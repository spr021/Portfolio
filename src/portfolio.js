/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Saber Pourrahimi",
  title: "Hi all, I'm Saber",
  subTitle: emoji(
    "A passionate Front-End Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1jedhmcSZlvw3aOHTK_Es-rGqT-M0NazQ4rpUG2NVrW0/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/spr021",
  linkedin: "https://www.linkedin.com/in/saber-pourrahimi/",
  gmail: "saber.pourrahimi.1999@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/11072707/saber-pourrahimi",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase" /* / AWS / Digital Ocean */
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fa html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fa css3"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fa sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fa js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fa ts"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fa react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fa nextjs"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fa redux"
    },
    {
      skillName: "Mateial UI",
      fontAwesomeClassname: "fa mui"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fa npm"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fa firebase"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Amir Kabir University",
      logo: require("./assets/images/amirkabir.png"),
      subHeader: "Bachelor of Science in Electrical Engineering",
      duration: "September 2017 - June 2021"
    },
    {
      schoolName: "Allame Heli 7",
      logo: require("./assets/images/sampad.png"),
      subHeader: "Diploma of Science in Math and Physics",
      duration: "September 2013 - June 2017"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Developer",
      company: "Taaghche",
      companylogo: require("./assets/images/taaghche.webp"),
      date: "Jan 2022 – Jun 2023",
      desc: "Develop and maintain ownership of web app projects with use of edge technologies such as NextJs."
    },
    {
      role: "Front-End Developer",
      company: "Hadish Sabz Parse",
      companylogo: require("./assets/images/hadish-sabz.png"),
      date: "March 2020 – August 2021",
      desc: "Comprehensive sales system web application. Developed with ReactJs and TypeScript."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  title: "Open source is where the work lives.",
  subtitle:
    "Web products, React libraries, games, developer tools, and experiments — built in public and ready to explore.",
  githubUsername: "spr021",
  featuredProject: "Space-X",
  projects: [
    {
      name: "Space-X",
      description:
        "A focused React experience for exploring SpaceX launches, mission details, and upcoming flights.",
      url: "https://github.com/spr021/Space-X",
      demo: "https://spr021.github.io/Space-X/",
      category: "Apps",
      language: "JavaScript",
      tags: ["React", "SCSS", "Axios"],
      image: require("./assets/images/space-x-preview.png"),
      accent: "#7c8cf8"
    },
    {
      name: "Clicker",
      description:
        "An endless record-chasing browser game built as a fast, playful Next.js experience.",
      url: "https://github.com/spr021/clicker",
      demo: "https://clicker-pi-ashen.vercel.app",
      category: "Games",
      language: "JavaScript",
      tags: ["Next.js", "Game", "Vercel"],
      accent: "#ff6b4a"
    },
    {
      name: "useSortable",
      description:
        "A reusable React hook for sorting, searching, and bookmarking data collections.",
      url: "https://github.com/spr021/useSortable",
      demo: "https://www.npmjs.com/package/use-sortable",
      category: "Libraries",
      language: "TypeScript",
      tags: ["React Hooks", "npm", "MIT"],
      accent: "#e84f8a"
    },
    {
      name: "Cinema Seat",
      description:
        "An open-source cinema reservation platform spanning React Native, Expo, Next.js, and a shared UI kit.",
      url: "https://github.com/spr021/Cinema-Seat",
      category: "Apps",
      language: "TypeScript",
      tags: ["Turborepo", "Expo", "Next.js"],
      accent: "#f0b43c"
    },
    {
      name: "S-Note",
      description:
        "A TypeScript and React browser extension for keeping useful notes close at hand.",
      url: "https://github.com/spr021/S-Note",
      category: "Apps",
      language: "TypeScript",
      tags: ["Chrome Extension", "Vite", "React"],
      accent: "#43b7a6"
    },
    {
      name: "Docs",
      description:
        "A minimal document manager with Firebase authentication, storage, and a Material UI workspace.",
      url: "https://github.com/spr021/Docs",
      demo: "https://spr021.github.io/Docs/",
      category: "Apps",
      language: "JavaScript",
      tags: ["React", "Firebase", "Material UI"],
      accent: "#4d8df7"
    },
    {
      name: "SRNote",
      description:
        "A mobile note-taking application developed with React Native.",
      url: "https://github.com/spr021/SRNote",
      category: "Apps",
      language: "JavaScript",
      tags: ["React Native", "Mobile", "Notes"],
      accent: "#8a6fe8"
    },
    {
      name: "GitHub User Activity",
      description:
        "A compact tool for looking up the latest public activity for any GitHub username.",
      url: "https://github.com/spr021/github-user-activity",
      category: "Tools",
      language: "JavaScript",
      tags: ["GitHub API", "CLI", "Activity"],
      accent: "#6b7280"
    },
    {
      name: "Mount Remote Storage",
      description:
        "A practical macOS guide for mounting remote WebDAV and cloud storage with rclone and macFUSE.",
      url: "https://github.com/spr021/Mounting-Remote-Web-Server-Storage",
      category: "Tools",
      language: "Shell",
      tags: ["macOS", "rclone", "WebDAV"],
      accent: "#3f9d73"
    },
    {
      name: "Git Multiple",
      description:
        "Shell tooling and notes for working cleanly with multiple Git identities.",
      url: "https://github.com/spr021/Git-Multiple",
      category: "Tools",
      language: "Shell",
      tags: ["Git", "Shell", "Workflow"],
      accent: "#f06b45"
    },
    {
      name: "TriviaQ",
      description:
        "A TypeScript trivia project exploring question flows, state, and interactive feedback.",
      url: "https://github.com/spr021/TriviaQ",
      category: "Games",
      language: "TypeScript",
      tags: ["Trivia", "TypeScript", "UI"],
      accent: "#d45d9d"
    },
    {
      name: "7 Wonders Duel",
      description:
        "A TypeScript implementation inspired by the strategic two-player board game.",
      url: "https://github.com/spr021/7Wonder-Duel",
      category: "Games",
      language: "TypeScript",
      tags: ["Board Game", "Strategy", "TypeScript"],
      accent: "#c98b32"
    },
    {
      name: "3D Landing",
      description:
        "An interactive landing-page experiment combining Next.js and Three.js.",
      url: "https://github.com/spr021/3D-Landing",
      category: "Experiments",
      language: "TypeScript",
      tags: ["Three.js", "Next.js", "3D"],
      accent: "#7659dc"
    },
    {
      name: "BuyMore",
      description:
        "A TypeScript product experiment focused on commerce interface patterns.",
      url: "https://github.com/spr021/BuyMore",
      category: "Experiments",
      language: "TypeScript",
      tags: ["Commerce", "Frontend", "TypeScript"],
      accent: "#e85e63"
    },
    {
      name: "Avocado React",
      description:
        "A React iteration of the Avocado project with a deployable browser preview.",
      url: "https://github.com/spr021/Avocado-react",
      demo: "https://spr021.github.io/Avocado-react/",
      category: "Experiments",
      language: "JavaScript",
      tags: ["React", "Frontend", "Prototype"],
      accent: "#78a84f"
    },
    {
      name: "Avocado Native",
      description:
        "A React Native exploration of the Avocado product across mobile interfaces.",
      url: "https://github.com/spr021/Avocado-react-native",
      category: "Experiments",
      language: "JavaScript",
      tags: ["React Native", "Mobile", "Prototype"],
      accent: "#82b65b"
    },
    {
      name: "Avocado PWA",
      description:
        "A progressive-web-app version of Avocado exploring installable web experiences.",
      url: "https://github.com/spr021/Avocado-react-pwa",
      category: "Experiments",
      language: "JavaScript",
      tags: ["PWA", "React", "Offline"],
      accent: "#97bd54"
    },
    {
      name: "Portfolio",
      description:
        "The source behind this portfolio and its evolving open-source project portal.",
      url: "https://github.com/spr021/Portfolio",
      demo: "https://saberpourrahimi.ir",
      category: "Experiments",
      language: "JavaScript",
      tags: ["React", "Portfolio", "Open Source"],
      accent: "#5865f2"
    }
  ],
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/taaghche.webp"),
      projectName: "Taaghche",
      projectDesc: "Aplication for reading and listening E-Book",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://taaghche.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/taaghche.webp"),
      projectName: "Panext",
      projectDesc: "Aplication for E-Book publisher in Taaghche",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://publisher.taaghche.ir/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/panoramic.png"),
      projectName: "Panoramic",
      projectDesc: "Aplication for sales TVs",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://panoramic.ir/"
        }
      ]
    },
    {
      image: require("./assets/images/hadish-sabz.png"),
      projectName: "Hadish Sabz Selse System",
      projectDesc:
        "Supervise and perform all internal sales processes of the company"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "React js",
      subtitle:
        "First Place in React Programming Course, UTech Academy, Tehran.",
      image: require("./assets/images/Utech-Academy.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/11luyZjMzAwumFGOC2fXefaq93vlTjH0V/view?usp=sharing"
        },
        {
          name: "UTech Academy",
          url: "https://ai.utech-academy.ir/"
        }
      ]
    },
    {
      title: "Startup Workshop",
      subtitle: "Participate in the workshop of Amir Kabir Innovation Center.",
      image: require("./assets/images/amirkabir.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12r4pKcxSCNsbfMP0Ry6pUvZtD1Fug7wj/view?usp=sharing"
        }
      ]
    },

    {
      title: "Web Developer",
      subtitle:
        "First Place in Web Programming Course, University of Science and Technology, Tehran.",
      image: require("./assets/images/elmosanat.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kY3YJAiDlZqAT0f_Wv2jTc3sHEr8qMRr/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+(49) 15753415136",
  email_address: "saber.pourrahimi.1999@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "spr021", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
