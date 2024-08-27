import moviex from '../../assets/moviex.png';
import landing from '../../assets/landing.png';
import fitClub from '../../assets/fitClub.png';

export const MandarinChineseData = {
    "aboutData": {
        "aboutSectionHeader": "关于我",
        "aboutDescText": "我是一名拥有 年经验的软件开发人员，专注于创建（偶尔开发）完美、引人入胜且出色的数字体验。目前，我专注于在 ",
        "companyName": "Lowe's India"
    },
    "contactData": {
        "contactSectionHeader": "联系我",
        "thanksMessage": "感谢您的浏览！",
        "onGoing": {
            "ongoingSectionHeader": "仍在开发中",
            "ongoingfeatures": ["使其完全可定制（直接从用户界面）", "支持明暗主题", "将这个网站迁移到渐进式 Web 应用程序 (PWA): 进行中"]
        }
    },
    "contactPopup": {
        "contactPopupHeader": "联系我！",
        "labelEmail": "输入您的电子邮件",
        "labelSubject": "主题",
        "labelMsg": "消息",
        "sendBtnText": "发送",
        "cancelBtnText": "取消",
        "successMsg": "成功！",
        "failedMsg": "失败！"
    },
    "experienceSectionData": {
        "experienceHeader": "经验",
        "experienceData": [
            {
                "role": "软件工程师",
                "companyName": "Lowe's India",
                "company": "lowes",
                "jobLocation": "班加罗尔，印度",
                "workYear": "2024年3月 - 现在",
                "skillsUsed": ["JavaScript (ES6+)", "React", "Redux", "NodeJs", "Rest-Api", "HTML5", "Css3"],
                "jobRoleDesc": "我与产品负责人和项目经理紧密合作，详细记录需求并推动应用程序的改进。我的职责包括集成API、开发可重用和可定制的组件，并优化Web应用程序的可扩展性以确保稳定的性能。我将Figma原型图转化为功能代码，实施自动化解决方案，并进行彻底的单元测试以维护项目的稳定性。此外，我还管理Confluence页面以记录应用程序功能和序列图，并促进与利益相关者的有效讨论，以确保项目目标和交付物的一致性。"
            },
            {
                "role": "高级软件开发人员",
                "companyName": "Hexagon R&D India",
                "company": "hexagon",
                "jobLocation": "海得拉巴，印度",
                "workYear": "2021年8月 - 2024年3月",
                "skillsUsed": ["JavaScript (ES6+)", "React", "React-Native", "Redux", "TypeScript", "Rest-Api", "HTML5", "Css3"],
                "jobRoleDesc": "我致力于提升用户体验和优化开发流程，以提供高质量的解决方案。我集成了包括API和可重用组件的新功能，按照客户规范进行调试，以确保功能的稳定性。我的努力确保了应用程序在各种设备和平台上的响应性，利用React优化技术来改进数据处理、代码效率、API请求和渲染性能。我运用创意思维和数学技能来开发符合公司目标的创新解决方案。此外，我还管理质量保证和开发团队的影响分析文档（IAD），确保全面评估并与项目目标一致。"
            }
        ]
    },
    "heroSectionData": {
        "heroIam": "我是",
        "heroName": "桑吉夫·阿育王",
        "techRole": "前端开发者 & React",
        "ifConsultant": true,
        "consultantText": "顾问",
        "contactBtnText": "联系我"
    },
    "portfolioSectionData": {
        "portfolioSectionHeader": "作品集",
        "visitBtnText": "网站",
        "gitBtnText": "GitRepo",
        "portfolioCardsData": [
            {
                "projectName": "Movix 网站",
                "projectDesc": "类似于 Disney+HotStar 的在线 OTT 平台...",
                "imageSrc": moviex,
                "imageAlt": "Moviex",
                "gitRepoName": "Moviex",
                "projectWebsite": "https://moviex-nine-mocha.vercel.app/"
            },
            {
                "projectName": "登陆页面",
                "projectDesc": "为摄影机构制作的响应式登陆页面...",
                "imageSrc": landing,
                "imageAlt": "登陆页面",
                "gitRepoName": "Responsive_Landing_Page",
                "projectWebsite": "https://sanjeevashoka.github.io/Responsive_Landing_Page/"
            },
            {
                "projectName": "FitClub 网站",
                "projectDesc": "一个响应式的健身网站，提供有关健身服务和优惠的信息...",
                "imageSrc": fitClub,
                "imageAlt": "FitClub 健身",
                "gitRepoName": "fit_Club_Website",
                "projectWebsite": "https://fitclubgym-6jk.pages.dev/"
            }
        ]
    },
    "resumeSectionData": {
        "resumeHaveLookText": "查看我的",
        "resumetext": "精彩简历",
        "downloadBtnText": "下载"
    },
    "skillSectionData": {
        "skillSectionHeader": "我的技能 "
    },
    "navSectionData":{
        navOptions: ["关于", "作品集", "经验", "联系"],
        languageOptions:[
            {languageText: 'En', flag: '🇬🇧'},
            {languageText: 'Fr', flag: '🇫🇷'},
            {languageText: 'Pl', flag: '🇵🇱'},
            {languageText: 'अ', flag: '🇮🇳'},
            {languageText: '中', flag: '🇨🇳'},
        ]
    }
}
