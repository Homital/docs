const getConfig = require("vuepress-bar");
const barConfig = getConfig(
    `${__dirname}/..`,
    {
        skipEmptySidebar: true,
        skipEmptyNavbar: true,
        addReadMeToFirstGroup: false,
        maxLevel: 1,
        stripNumbers: true,
        multipleSideBar: false
    }
)

module.exports = {
    title: 'Homital',
    description: 'The ultimate smart home ecosystem',
    themeConfig: {
        //logo: 'logo.png', //navbar logo
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            //...barConfig.nav,
            {
                text: 'Guide',
                ariaLabel: 'Guide Menu',
                items: [
                    { text: 'User Guide', link: '/guide/user-guide/' },
                    { text: 'Developer Guide', link: '/guide/developer-guide/' },
                    { text: 'Business Guide', link: '/guide/business-guide/' }
                ]
            }
        ],
        sidebar: barConfig.sidebar,
        lastUpdated: 'Last Updated', // string | boolean
        repo: 'Homital/Homital.github.io',
        docsRepo: 'Homital/Homital.github.io',
        docsDir: 'docs',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        displayAllHeaders: false // Default: false
    }
}