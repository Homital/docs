module.exports = {
    title: 'Homital',
    description: 'The ultimate smart home ecosystem',
    lang: 'en-US',
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'User Guide', link: '/user-guide/'
            },
            {
                text: 'Developer Guide',
                link: '/developer-guide/core',
                items: [
                    { text: 'General Guide', link: '/developer-guide/' },
                    { text: 'Homital-Core', link: '/developer-guide/core' },
                    { text: 'Homital-App', link: '/developer-guide/app' },
                    { text: 'Homital-Light', link: '/developer-guide/light' },
                    { text: 'Homital-USB_Adapter', link: '/developer-guide/usb' },
                    { text: 'Homital-Docs', link: '/developer-guide/docs' },
                ],
            },
        ],
        sidebar: {},
        lastUpdated: 'Last Updated', // string | boolean
        repo: 'Homital/Homital.github.io',
        docsRepo: 'Homital/Homital.github.io',
        docsDir: 'docs',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        displayAllHeaders: false, // Default: false
    },
};