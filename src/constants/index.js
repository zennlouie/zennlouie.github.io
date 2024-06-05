import { python, java, cpp, html, css, javascript, sql, mongodb } from '../assets';
import { django, react, node, tailwind, flutter, firebase, git, docker, gcp, chatgpt, copilot } from '../assets';
import { github} from '../assets';
import { elgives, amilaude } from '../assets';

export const languages = [
    {
        title: 'Python',
        icon: python
    },
    {
        title: 'Java',
        icon: java
    },
    {
        title: 'C++',
        icon: cpp
    },
    {
        title: 'HTML',
        icon: html
    },
    {
        title: 'CSS',
        icon: css
    },
    {
        title: 'JavaScript',
        icon: javascript
    },
    {
        title: 'SQL',
        icon: sql
    },
    {
        title: 'MongoDB',
        icon: mongodb
    }
    
];

export const frameworks = [
    {
        title: 'Django',
        icon: django
    },
    {
        title: 'ReactJS',
        icon: react
    },
    {
        title: 'Node.js',
        icon: node
    },
    {
        title: 'Tailwind CSS',
        icon: tailwind
    },
    {
        title: 'Flutter',
        icon: flutter
    },
    {
        title: 'Firebase',
        icon: firebase
    },
    {
        title: 'Git',
        icon: git
    },
    {
        title: 'Docker',
        icon: docker
    },
    {
        title: 'Google Cloud Platform',
        icon: gcp
    },
    {
        title: 'ChatGPT',
        icon: chatgpt
    },
    {
        title: 'GitHub Copilot',
        icon: copilot
    }

];


export const projects = [
    {
      title: "SubSentiments: A Subreddit Sentiment Analysis Tool",
      description: "SubSentiments is a web application tool that allows users to analyze the sentiment of a subreddit. Users can input a subreddit name and the tool will summarized and visualize the data gathered from the Sentiment Analysis. The model used in the web application is a DistilBERT that was fine-tuned by me using a reddit dataset with 50,000+ entries. It utilizes a lot of python libraries such as transformers, pandas, praw, torch, sklearn, google translate api, etc.. The web application is solely made with Panel a high level python framework. It is currently deployed using Google Cloud Platform.",
      liveDemoUrl: "https://subsentiments-latest-2f7acoidia-de.a.run.app/",
      techStack: [{
        title: "Python",
        icon: python
      }, {
        title: "Google Cloud Platform",
        icon: gcp
      },]
    },
    {
      title: "ElGives",
      description: "ElGives is a donation system application built using Flutter. This app serves as a medium for people who are willing to donate, organizations who are willing to manage donations,  and communities who are in need to receive these donations. The users may sign up either as a donor or as an organization. Additionally, an account was made exclusively for admins only. An admin can view information regarding donors, organizations, and the donations. Going in to the technical side of the app, it revolves around asynchronous programming where streams are able to provide data over the network. The data is stored using Google Firebase and is accessed through its API. Authentication and Storage are also utilized to handle user registrations and image uploads respectively. Lastly, some of the notable packages used by the app are flutter_sms which provide access to android's sms feature and qr_code/scanner which provide services to generating and scanning of QR codes.",
      images: elgives,
      mode: "portrait",
      techStack: [{
        title: "Flutter",
        icon: flutter
      }, {
        title: "Firebase",
        icon: firebase
      },]

    },
    {
      title: "AmILaude",
      description: "AmILaude is a supplementary tool designed for the administrative personnel at the University of the Philippines Los Baños (UPLB). It assists in verifying the General Weighted Average (GWA) of UPLB College of Arts and Sciences (CAS) graduating students to determine their eligibility for Latin honors. The front end is built with ReactJS and Electron, incorporating Material-UI for the user interface. The backend is powered by XAMPP, and the database utilizes MySQL.",
      images: amilaude,
      mode: "landscape",
      techStack: [{
        title: "React",
        icon: react
      }, {
        title: "MySQL",
        icon: sql
      },]
    },
    {
      title: "Portfolio",
      description: "This is my personal portfolio.",
      liveDemoUrl: "https://zenrui.github.io/",
      techStack: [{
        title: "React",
        icon: react
      }, {
        title: "Github Pages",
        icon: github
      },]
    }
  ];