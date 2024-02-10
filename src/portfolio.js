/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

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

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
