
import moviex from '../../assets/moviex.png';
import landing from '../../assets/landing.png';
import fitClub from '../../assets/fitClub.png';

export const EnglishData = {
    "aboutData": {
        aboutSectionHeader: "About",
        aboutDescText:"I'm a Software Developer with 3+ years of experience, specializing in building (ocassionally developing) pixel-perfect, engaging and exceptional digital experiences. Currently, I'm focused on building accessible , human-centered web-applications at ",
        companyName: "Lowe's India"
    },
    "contactData": {
        contactSectionHeader: "Contact Me",
        thanksMessage: "Thank you for Scrolling !",
        onGoing: {
            ongoingSectionHeader: "Still Ongoing Under Development",
            ongoingfeatures: ["Making it Fully Customisable(directly from UI)", "Support for both light and dark theme", "Migrating this website to a Progressive Web App (PWA)- In Progress"],
        }
    },
    "contactPopup": {
        contactPopupHeader: "Contact Me!",
        labelEmail: "Enter Your Email",
        labelSubject: "Subject",
        labelMsg: "Message",
        sendBtnText: "Send",
        cancelBtnText: "Cancel",
        successMsg: "Success!",
        failedMsg: "Failed!"
    },
    "experienceSectionData": {
        experienceHeader: "Experience",
        experienceData :[
            {
                role: "Software Engineer",
                companyName: "Lowe's India",
                company:'lowes',
                jobLocation:"Bengaluru, India",
                workYear: 'March 2024 - Present',
                skillsUsed:['JavaScript(ES6+)', 'React','Redux','NodeJs', 'Rest-Api', 'HTML5', 'Css3'],
                jobRoleDesc:"I work closely with product owners and project managers to meticulously document requirements and drive enhancements for our application. My responsibilities include integrating APIs, developing reusable and customizable components, and optimizing the web application for scalability to ensure robust performance. I translate Figma wireframes into functional code, implement automation solutions, and conduct thorough unit testing to maintain project stability. Additionally, I manage Confluence pages to document application features and sequence diagrams, and facilitate productive discussions with stakeholders to align on project goals and deliverables."
            },
            {
                role: "Senior Software Developer",
                companyName: "Hexagon R&D India",
                company:'hexagon',
                jobLocation:"Hyderabad, India",
                workYear: 'August 2021 - March 2024',
                skillsUsed:['JavaScript(ES6+)', 'React','React-Native','Redux','TypeScript', 'Rest-Api', 'HTML5', 'Css3'],
                jobRoleDesc:"I was dedicated to enhancing user experiences and optimizing development processes to deliver high-quality solutions. I integrated new features, including APIs and reusable components, tailored to client specifications, and conducted rigorous debugging to ensure robust functionality. My efforts ensured application responsiveness across various devices and platforms, leveraging React optimization techniques to improve data handling, code efficiency, API requests, and rendering performance. I applied creative problem-solving and mathematical skills to develop innovative solutions aligned with company objectives. Additionally, I managed quality assurance and the Impact Analysis Document (IAD) for my development team, ensuring comprehensive evaluation and alignment with project goals."
            }
        ]
    },
    "heroSectionData": {
        heroIam: "I'm",
        heroName: "Sanjeev Ashoka",
        techRole: "FrontEnd Developer & React",
        ifConsultant: true,
        consultantText: "Consultant",
        contactBtnText: "Contact Me"
    },
    "portfolioSectionData": {
        portfolioSectionHeader: "PortFolio",
        visitBtnText: "Website",
        gitBtnText: "GitRepo",
        portfolioCardsData: [
            {
                projectName: "Movix Website",
                projectDesc: "Online OTT Platform like Disney+HotStar...",
                imageSrc: moviex,
                imageAlt: "Moviex",
                gitRepoName: 'Moviex',
                projectWebsite: "https://moviex-nine-mocha.vercel.app/"
            },
            {
                projectName: "Landing Page",
                projectDesc: "Responsive Landing Page for an photography agency...",
                imageSrc: landing,
                imageAlt: "Landing Page",
                gitRepoName: 'Responsive_Landing_Page',
                projectWebsite: 'https://sanjeevashoka.github.io/Responsive_Landing_Page/'
            },
            {
                projectName: "FitClub Website",
                projectDesc: "A Responsive Gym Website with  info about gym's services, offers...",
                imageSrc: fitClub,
                imageAlt: "FitClub Gym",
                gitRepoName: 'fit_Club_Website',
                projectWebsite: "https://fitclubgym-6jk.pages.dev/"
            }
        ]
    },
    "resumeSectionData": {
        resumeHaveLookText: "Have a Look at my",
        resumetext: "Awesome Resume",
        downloadBtnText: "Download"
    },
    "skillSectionData": {
        "skillSectionHeader": "My Skills"
    },
    "navSectionData":{
        navOptions: ["About", "Portfolio", "Experience", "Contact"],
        languageOptions:[
            {languageText: 'En', flag: '🇬🇧'},
            {languageText: 'Fr', flag: '🇫🇷'},
            {languageText: 'Pl', flag: '🇵🇱'},
            {languageText: 'अ', flag: '🇮🇳'},
            {languageText: '中', flag: '🇨🇳'},
        ]
    }
}