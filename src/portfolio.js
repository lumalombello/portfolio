/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Luma Lombello",
  logo_name: "lumalombello",
  nickname: "Looking UX/UI Design internship",
  subTitle:
    "I'm a brazilian Computer Engineer student doing a double degree in France and learning UX/UI design. I'm passionate about technology and how it can be used to help others, and I'm always looking to improve myself.",
  resumeLink:
   "https://drive.google.com/drive/u/0/search?q=Resume",
  //portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  /*{
    name: "Github",
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },*/
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lumalombello/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*{
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:lumalombello@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*{
    name: "Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },*/
  {
    name: "Facebook",
    link: "https://www.facebook.com/luma.lombello",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/lumalombello/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "UX Design Project",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Participated of a team project to design a system applying the concepts of UX Design. The main goal was to prototype a first version of a travel website.",
        "⚡ Creation of an interactive system to optimize the process of planning a trip. An intuitive, functional and precise tool, capable of creating a completely personalized experience.",
        "⚡ Seeked to understand the desires and needs in planning a trip and its peculiarities.", 
        "⚡ Applied different technologies during these processes, like Axure, .",
      ],
      softwareSkills: [
       /* {
          //skillName: "Tensorflow",
          //fontAwesomeClassname: "logos-tensorflow",
          //style: {
            //backgroundColor: "transparent",
          //},
        },
        {
          //skillName: "Keras",
          //fontAwesomeClassname: "simple-icons:keras",
         // style: {
           // backgroundColor: "white",
           // color: "#D00000",
          //},
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },*/
      ],
    },
    {
      title: "Stakeholders, Data Collection & Main Requirements",
      fileName: "FullStackImg",
      skills: [
        "⚡ Applied Socially Aware Design using 3 main artifacts: Stakeholders Diagram, Stakeholder Chart Evaluation and Semiotic Ladder.",
        "⚡ Designed a questionnaire: Fast, anonymous and online way to get in touch with the public.",
        "⚡ The use of other data collection strategies, such as interviews, was not feasible due to the tight schedule and the need to reach a large number of people.",
        "⚡After analyzing the results of both the stakeholders and the form, it was possible to understand the main requirements of the system.",
        "⚡ Main modalities: Home, Registration, Creation of Itinerary, Itinerary Review, Reservations and View (of Profile, Accomodation, Restaurant and Destination).",
      ],
      softwareSkills: [
        /*{
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },*/
      ],
    },
    {
      title: "Braiwriting, Braindrawing & Storyboarding",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Separated 4 blank papers, defined a screen to analyze and the time of one minute and a half per cycle. ",
		"⚡ During each cycle, wrote topics of what it found relevant on the screen being discussed.",  
		"⚡ At the end, the papers were changed clockwise until all the participants had written on all the papers.",
		"⚡ For the creation of low fidelity prototypes, used the braindrawing technique following the same principle applied previously in brainwriting.",
		"⚡ Designed a persona to test some functionalities of the system, like registering, creation of itinerary and visualization.",
      ],
      softwareSkills: [
        /*{
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },*/
      ],
    },
    {
      title: "High Fidelity Prototype",
      fileName: "DesignImg",
      skills: [
        "⚡ Developement of a high-fidelity prototype based on the functionalities explored previously in the Storyboarding.",
        "⚡ Used Photoshop to visualize possible designs for the system.",
        "⚡ Used Axure RP, a prototyping software, to create interactive prototypes. ",
        "⚡ Creation of user-friendly interfaces enabling its use without major problems."
      ],
      softwareSkills: [
       /* {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },*/
      ],
    },
    {
      title: "Usability Tests & Iterations",
      fileName: "Usability",
      skills: [
        "⚡ To evaluate the high-fidelity prototype, a person was invited to interact with the interfaces.",
        "⚡ An evaluation script was created to better understand the user's experience with the prototype.",
        "⚡ A usability inspection, based on Nielsen's Heuristics, was also carried out to find the problems that the prototype presented.",
        "⚡ After the first phase of testing, it was possible to understand the main flawed points of the system.",
        "⚡ This was a first version, that would require numerous iterations to became a real usable system.",
      ],
      softwareSkills: [
        /*{
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },*/
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "person/contact.svg",
    description:
      "Nowadays I am living in Nantes, France. I am available on almost every social media and always connected to my phone (+33) 07 83 64 46 38. You can message me!",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Nantes, France",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+33 07 83 64 46 38",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  contactPageData,
};
