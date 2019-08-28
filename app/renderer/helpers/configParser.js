var fs = require('fs');
var readline = require('readline');

export default function parseConfig(filename) {
  return new Promise(function(resolve, reject) {
    var deep = 1;
    var sections = [];
    var contentSection = [],
      contentName;
    var start = false;
    readline
      .createInterface({
        input: fs.createReadStream(filename),
        terminal: false,
      })
      .on('line', function(line) {
        const trimmedLine = line.trim();

        var re = /^config [A-Za-z]+/;
        var match;
        if ((match = re.exec(trimmedLine)) !== null) {
          if (deep == 1) {
            if (start) sections.push({ name: contentName, content: contentSection });

            contentName = line;
            start = true;
            contentSection = [];
          }
          deep++;
        }

        if (start) contentSection.push(line);

        re = /^end/;
        if ((match = re.exec(trimmedLine)) !== null) {
          deep--;
        }
      })
      .on('close', function() {
        resolve(sections);
      });
  });
}
