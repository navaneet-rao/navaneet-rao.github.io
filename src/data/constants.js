import icons from "./icons";
import images from "./images";

export const skills = [
  {
    title: "Web Development",
    skills: [
      {
        name: "React Js",
        image: icons.react,
      },
      {
        name: "JavaScript",
        image: icons.javascript,
      },
      {
        name: "Git Hub",
        image:
          "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      },
      {
        name: "HTML",
        image: icons.html5,
      },
      {
        name: "CSS",
        image: icons.css3,
      },
      {
        name: "Node JS",
        image: icons.nodejs,
      },
      {
        name: "Yarn",
        image: icons.yarn,
      },
      {
        name: "Bootstrap",
        image: icons.bootstrap,
      },
      {
        name: "Tailwind",
        image: icons.tailwind,
      },
      {
        name: "Django",
        image: icons.django,
      },
      {
        name: "Flask",
        image:
          "https://www.pngitem.com/pimgs/m/159-1595977_flask-python-logo-hd-png-download.png",
      },
    ],
  },
  {
    title: "Cyber Security",
    skills: [
      {
        name: "Nmap",
        image:
          "https://miro.medium.com/v2/resize:fit:576/1*R6I7ZcaoaL0TIaclrFoR5A.png",
      },
      {
        name: "Wireshark",
        image: icons.wireshark,
      },
      {
        name: "PFsense",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXR6RXRA0HT0YyjEYrO8hG-gUc18HLONByNSppiAP9TJL1-BbqHQCwBUiiIifcqxWZZkU&usqp=CAU",
      },
      {
        name: "Wazuh",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6c/Wazuh_blue.png",
      },
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image: icons.java,
      },
      {
        name: "React Native",
        image: icons.react,
      },
      {
        name: "Expo",
        image:
          "https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "programming languages",
    skills: [
      {
        name: "C",
        image: icons.c,
      },
      {
        name: "C++",
        image: icons.cPlusPlus,
      },
      {
        name: "C#",
        image: icons.csharp,
      },
      {
        name: "Python",
        image: icons.python,
      },
      {
        name: "Lua",
        image: icons.lua,
      },
      {
        name: "Arduino",
        image:
          "https://banner2.cleanpng.com/20190302/lh/kisspng-arduino-computer-icons-adafruit-industries-electro-online-store-5c7abe6a31fd12.7005350215515480102048.jpg",
      },
      {
        name: "Power Shell",
        image:
          "https://w7.pngwing.com/pngs/698/375/png-transparent-powershell-microsoft-windows-management-instrumentation-computer-icons-microsoft-thumbnail.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      //   {
      //     name: "IBM quantum learning ",
      //     image:
      //       "https://www.quantumlah.org/images/highlight/highlight_qiskit-logo.jpg",
      //   },
      {
        name: "Git",
        image: icons.git,
      },
      {
        name: "Docker",
        image:
          "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Red Hat",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/316px-Red_Hat_logo.svg.png",
      },
    ],
  },
];

export const Projects = [
  // {
  //   title: "My Portfolio",
  //   description:
  //     "This is my personal portfolio website built using ReactJS and Tailwind",
  //   image: images.PortfolioPhoto,
  //   haveDemo: true,
  //   demo: "https://navaneet-rao.github.io/portfolio-website/",
  //   code: "https://github.com/navaneet-rao/portfolio-website",
  // },
  {
    title: "Face Detection Application",
    description: "Face Detection Application using Python and BetaFaceAPI",
    image: images.FaceDetection,
    haveDemo: false,
    code: "https://github.com/navaneet-rao/Face-Detection-With-BetaFaceAPI-Application",
  },
  {
    title: "Basic Calculator",
    description: "Build a basic calculator using html and css",
    image: images.calc,
    haveDemo: true,
    demo: "https://navaneet-rao.github.io/Simple-HTML-Calculator/",
    code: "https://github.com/navaneet-rao/Simple-HTML-Calculator",
  },
  {
    title: "Automated Push Notification",
    description: "Automated Notification with NTFY and using PowerShell",
    image: images.NTFY,
    haveDemo: false,
    code: "https://github.com/navaneet-rao/Automated-Push-Notification-Using-NTFY-PowerShell",
  },
];
