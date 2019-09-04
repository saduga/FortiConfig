export default {
    header: {
        platform: 'FortiGate VM64-KVM',
        deviceName: "fancy-firewall",
        defaultUser: "adminus"
    },
    menu: {
        isSelected: 1,
        menuItems: [{
            name: 'Dashboard',
            icon: 'fa-dashboard',
            subMenu: [{ name: 'Main', url: '' }]
        },
        {
            name: 'Security Fabric',
            icon: 'ftnt-security-fabric',
            subMenu: [
                { name: 'Physical Topology', url: '' },
                { name: 'Logical Topology', url: '' },
                { name: 'Security Rating', url: '' },
            ]
        },
            {
                name: 'FortiView',
                icon: 'fa-area-chart',
                subMenu: [
                    {
                        name: 'Traffic from LAN/DMZ',
                        isGroup: true,
                        items: [
                            { name: 'Sources', url: '' },
                            { name: 'Destinations', url: '' },
                            { name: 'Applications', url: '' },
                            { name: 'Cloud Applications', url: '' },
                        ]
                    },
                    {
                        name: 'Traffic from WAN',
                        isGroup: true,
                        items: [
                            { name: 'Sources', url: '' },
                            { name: 'Servers', url: '' },
                            { name: 'Threads', url: '' },
                        ]
                    },
                ]
            },
        {
            name: 'Network',
            icon: 'fa-arrows',
            subMenu: []
        },
        {
            name: 'System',
            icon: 'fa-cog',
            subMenu: []
        },
        {
            name: 'Policy & Objects',
            icon: 'ftnt-policy-objects',
            subMenu: []
        },
        {
            name: 'Security Profiles',
            icon: 'fa-lock',
            subMenu: []
        },
        {
            name: 'VPN',
            icon: 'fa-laptop',
            subMenu: []
        },
        {
            name: 'User & Devices',
            icon: 'fa-user',
            subMenu: []
        },
        {
            name: 'WiFi & Switch Controller',
            icon: 'fa-wifi',
            subMenu: []
        },
        {
            name: 'Log & Report',
            icon: 'fa-bar-chart',
            subMenu: []
        },
        {
            name: 'Monitor',
            icon: 'fa-pie-chart',
            subMenu: []
        }]
    }
}