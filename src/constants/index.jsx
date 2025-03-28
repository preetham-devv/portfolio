import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJenkins } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDocker} from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { FaGit , FaGitlab } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiLangchain, SiScikitlearn, SiOpencv } from "react-icons/si";
import { SiPytorch, SiKeras } from "react-icons/si";
import { FaStream } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#Testimonials" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#Education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: " Sasi Preetham Chopparapu",
  info: "I'm a Grad Student, Programmer, Researcher, Tech Enthusiast",
};

export const ABOUT = {
  text1:
    "I develop innovative solutions that streamline processes and boost efficiency using cutting-edge machine learning and cloud technologies.",
  text2:
    " Full-stack developer and AI researcher, skilled in cloud platforms, data analysis, and machine learning, pursuing an MS in IT with hands-on experience in impactful projects..My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Multi-Language Invoice Data Extractor using LLM",
    subtitle:
      "A multi-language invoice data extractor using Python and Google Gemini Pro API",
    image: image1,
    link: "https://github.com/preetham-devv/Multi-Language-Invoice-Data-Extractor-using-LLM" ,
  },
  {
    title: "Flask Two-Factor Authentication with PyOTP",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
    link: "https://github.com/preetham-devv/Flask-Two-Factor-Authentication-with-PyOTP"
  },
  {
    title: "Automatic System for Driver Drowsiness Detection System using Deep Learning",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image3,
    link  :"https://github.com/preetham-devv/Automatic-System-for-Driver-Drowsiness-Detection-using-Deep-Learning-/tree/main"
  },
  {
    title: "Breast Cancer Predicition",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image4,
    link: "https://github.com/preetham-devv/Breast-Cancer-Prediction"
  },
  {
    title: "Conversational Q A Chatbot Using Gemini-Pro",
    subtitle:
      "A blogging platform developed with Ruby on Rails and PostgreSQL.",
    image: image5,
    link: "https://github.com/preetham-devv/Conversational-Q-A-Chatbot-Using-Gemini-Pro"
  },
  {
    title: "Auto MPG Data Processing with Pandas and Pipelines",
    subtitle: "A recipe finder application developed with Angular and Node.js.",
    image: image6,
    link :"https://github.com/preetham7225/Auto-MPG-Data-Processing-with-Pandas-and-Pipelines"
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <FaJenkins className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Jenkins",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Python",
    experience: "3+ years",
  },
  {
    icon: <FaJava className="text-4xl lg:text-6xl text-red-500" />,
    name: "Java",
    experience: "4+ years",
  },
  {
    icon: <FaJsSquare className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "JavaScript",
    experience: "3+ years",
  },
  {
    icon: <FaAws className="text-4xl lg:text-6xl text-orange-500" />,
    name: "AWS",
    experience: "2+ years",
  },
  {
    icon: <FaDocker className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Docker",
    experience: "2+ years",
  },
  {
    icon: <SiKubernetes className="text-4xl lg:text-6xl text-blue-400" />,
    name: "Kubernetes",
    experience: "1+ year",
  },
  {
    icon: <SiAzuredevops className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Azure",
    experience: "1+ year",
  },
  {
    icon: <SiAngular className="text-4xl lg:text-6xl text-red-600" />, // Angular added here
    name: "Angular",
    experience: "2+ years",
  },
  {
    icon: <FaGit className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Git",
    experience: "2+ years",
  },
  {
    icon: <FaGitlab className="text-4xl lg:text-6xl text-orange-400" />,
    name: "GitLab",
    experience: "1+ year",
  },
  {
    icon: <FaTools className="text-4xl lg:text-6xl text-gray-500" />,
    name: "CI/CD",
    experience: "2+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl lg:text-6xl text-teal-500" />,
    name: "Tailwind CSS",
    experience: "1.5+ years",
  },
  {
    icon: <SiMui className="text-4xl lg:text-6xl text-blue-500" />,
    name: "Material UI",
    experience: "2+ years",
  },
  {
    icon: <SiLangchain className="text-4xl lg:text-6xl text-purple-600" />, // Custom color for Langchain
    name: "Langchain",
    experience: "1+ year",
  },
  {
    icon: <SiScikitlearn className="text-4xl lg:text-6xl text-orange-400" />,
    name: "Scikit-learn",
    experience: "2+ years",
  },
  {
    icon: <SiOpencv className="text-4xl lg:text-6xl text-green-500" />,
    name: "OpenCV",
    experience: "2+ years",
  },
  {
    icon: <SiPytorch className="text-4xl lg:text-6xl text-orange-600" />,
    name: "PyTorch",
    experience: "2+ years",
  },
  {
    icon: <SiKeras className="text-4xl lg:text-6xl text-red-500" />,
    name: "Keras",
    experience: "2+ years",
  },
  {
    icon: <FaStream className="text-4xl lg:text-6xl text-black" />,
    name: "Kafka",
    experience: "2+ years",
  },
  {
    icon: <SiExpress className="text-4xl lg:text-6xl text-gray-400" />,
    name: "Express.js",
    experience: "2+ years",
  },
  
  
  
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024", 
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name:"Graduate Teaching Assistant",
    title: "Kennesaw State University",
    quote:
    [
      "Taught Python, Java, and C# with a focus on algorithms, advanced data structures, OOP, recursion, and design patterns.",
      "Emphasized core programming fundamentals such as conditionals, loops, arrays, and methods, alongside effective debugging and error handling techniques.",
      "Led hands-on lab sessions covering file I/O operations, exception handling, and GUI development using industry-standard IDEs (e.g., Pycharm, IntelliJ).",
      "Introduced version control (Git), unit testing, and continuous integration practices to prepare students for real-world software development.",
      "Evaluated and provided detailed feedback on code-based assignments, ensuring adherence to best practices in software design and coding standards.",
      "Collaborated with faculty and fellow GTAs to refine course materials and integrate agile methodologies and test-driven development into the curriculum.",
    ],
    image: user2,
  },
  {
    name: "MLops and Devops Intern",
    title: "Criativo Technologies",
    quote:
    [
     "LLMOPS Migration: Migrated inferencing from Ollama to Vllm, significantly increasing speed by 3.5x utilizing GPU.",
     "Video Ingestion: Optimized video ingestion from YouTube to Vimeo using Kafka with Docker, increasing speed by 5x.",
     "Container Management: Managed deployment with Docker, Nginx. Oversaw 30,000+ users & 1M+ monthly hits.",
     "Cloud Infrastructure: Built a container registry with Kubernetes and set up AWS EKS using Terraform, with monitoring tools like Grafana, Prometheus, and Loki.",
     "Scalable Infrastructure: Designed and deployed scalable solutions for both on-premises and cloud environments,utilizing "
    ],
    image: user1,
  },
  {
    name: "Software Engineer Intern",
    title: "Aditya University",
    quote:
    [
      "Addressed bugs in Spring Boot Microservices APIs through testing through Junit, JMeter ensuring optimal performance.",
      "Worked on migrating AngularJS components to the Angular UI, reducing rendering time by 30% and overall build size by 40% for improved performance.",
      "Implemented Kafka messaging queue to handle data flow when users posted data to Spring Boot APIs, ensuring scalable data processing across diverse databases.",
      "Addressed issues, improved software features, and seamlessly migrated to the updated Angular UI, ensuring enhanced functionality.",
      "Utilized Jenkins, Docker, OpenShift and Kubernetes for automated microservices builds and deployments, optimizing development processes.",
      "Utilized Postman and Swagger for API testing and documentation, contributing to improved API reliability.",
      "Worked on AWS EC2 and Jenkins for CI/CD, ensuring seamless integration of AWS services.",
      "Utilized Jira and GitHub extensively for efficient project management, teamwork, and version control, contributing to streamlined development processes."
    ],
    image: user3,
  },
  {
    name: "Data Science and Business Analyst Intern",
    title: "Sparks Foundation",
    quote:
    [
      "Developed a Python-based Exploratory Data Analysis (EDA) pipeline to analyse student datasets, streamlining data processing.",
      "Generated over 50 data visualizations using Matplotlib and Seaborn, uncovering key trends and classification in student performance.",
      "Improved predictive modelling accuracy by 25% with Scikit-Learn, enhancing insights into student performance by 40%.",
      "Automated analysis tasks, reducing overall analysis time by 30% and allowing for more efficient data processing.",
      "Collaborated with a team of data scientists to identify and resolve data inconsistencies, improving the quality of the datasets by 15%.",
      "Designed and implemented a machine learning model to classify students into performance categories, increasing prediction accuracy by 20%.",
      "Created custom dashboards in Jupyter Notebooks to visually represent the performance of various machine learning models for stakeholder presentations.",
      " Used pandas and NumPy for data manipulation, preprocessing over 100,000 records, optimizing the pipeline’s speed by 35%.",
      "Applied hyperparameter tuning using GridSearchCV to improve the performance of machine learning models, increasing model efficiency by 10%."

    ],
    image: user4,
  }
];

export const EDUCATION = [
  {
    "role": "Masters Degree, Information Technology",
    "company": "Kennesaw State University",
    "period": "Jan 2024 - Present",
    "image": user2
  },
  {
    "role": "Bachelor of Technology,Electronics and Communication",
    "company": "SRM University",
    "period": "Jun 2019 - May 2023",
    "image": user5
  },
]

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/preetham.ch.5",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/channels/@me",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/preetham_ch_/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/preethamch2",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/preetham-devv",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/preetham-ch-2i/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
