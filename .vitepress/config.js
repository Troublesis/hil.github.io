import {defineConfig} from 'vitepress';

const mode = process.argv[process.argv.length - 1]

export default defineConfig({
    title: '正心全栈编程', // 站点标题
    base:'/',
    description: '正心的全栈编程笔记 | Python ', // mate 标签 description，多用于搜索引擎抓取摘要
    locales: {
        root: {
            label: 'Change language',
            lang: 'zh-CN',
        },
    },
    markdown: {
        lineNumbers: true, // 显示代码行数
    },
    lastUpdated: false,
    themeConfig: {
        nav: [
            {
                text: "Home", link: '/posts'
            },
            {
                text: "Archives", link: '/archives'
            },
            {
                text: "Tags", link: '/tags'
            }
        ],
        sidebar: {},
        socialLinks: [
            {
                icon: {
                    svg: '<svg t="1676025427495" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2136" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="2137"></path></svg>',
                }, link: "https://gitee.com/zhengxinonly",
            },
            {
                icon: {
                    svg: '<svg t="1676025513460" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2746"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2747"></path></svg>',
                }, link: "https://space.bilibili.com/162101364",
            },
            {icon: "github", link: "https://github.com/zhengxinonly"},
        ],
        logo: 'logo.svg',  // 站点 logo
        siteTitle: '正心全栈编程', // 站点首页标题
        outline: 'deep',  // 开启深层目录
        outlineTitle: '目录',
        lastUpdated: '最后更新时间',
        docFooter: { //上下篇文本
            prev: '上一篇',
            next: '下一篇',
        },
        footer: {
            copyright: 'Copyright © 2023 zhengxing. All rights reserved | <a rel="nofollow" href="https://beian.miit.gov.cn/" style="color:#93999F;font-size:12px;text-decoration:none;" target="_blank">湘ICP备2023002542号-1</a>',
            message: '',
        },
    },
    // mpa: true,
    head: mode === 'dev' ? [] : [
        [
            'script',
            {id: 'baidu'},
            `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?42d7e0f183103b4578ac0684f1342bde";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
        ],
    ],
});
