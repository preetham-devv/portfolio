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
import { SiAngular } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
// Only using GUARANTEED working icons from react-icons
import {FaDatabase,FaCloud,FaChartBar,FaCode,FaCogs,FaTerminal,FaStream,FaTools} from "react-icons/fa";
import {MdAnalytics,MdSecurity,MdStorage,MdCloudQueue} from "react-icons/md";
import {AiOutlineBarChart} from "react-icons/ai";
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
  name: " Sasi Chopparapu",
  info: "I'm a Grad Student, Programmer, Researcher, Tech Enthusiast",
};
export const ABOUT = {
  text1:"I develop innovative solutions that streamline processes and boost efficiency using cutting-edge machine learning and cloud technologies.",
  text2:"Data Engineer with 3+ years of experience in designing, optimizing, and maintaining large-scale data platforms across AWS, Azure, and GCP. Skilled in ETL/ELT, data warehousing, big data processing, and data modeling, with proven ability to improve query performance, ensure compliance, and deliver accurate analytics. Adept at building automated pipelines, implementing role-based security, and integrating monitoring systems to enhance operational efficiency. ",
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
export const SKILLS_CATEGORIES = {
  "Programming & Scripting": [
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
      icon: <FaCode className="text-4xl lg:text-6xl text-red-600" />,
      name: "Scala",
      experience: "N/A",
    },
    {
      icon: <FaChartBar className="text-4xl lg:text-6xl text-blue-500" />,
      name: "R",
      experience: "N/A",
    },
    {
      icon: <FaTerminal className="text-4xl lg:text-6xl text-gray-700" />,
      name: "Bash/Shell",
      experience: "N/A",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-blue-500" />,
      name: "SQL",
      experience: "N/A",
    },
  ],
  "Cloud Platforms": [
    {
      icon: <FaAws className="text-4xl lg:text-6xl text-orange-500" />,
      name: "AWS",
      experience: "3+ years",
    },
    {
      icon: <FaCloud className="text-4xl lg:text-6xl text-blue-600" />,
      name: "Azure",
      experience: "2+ years",
    },
    {
      icon: <MdCloudQueue className="text-4xl lg:text-6xl text-blue-500" />,
      name: "GCP",
      experience: "1+ year",
    },
  ],
  "Big Data & Processing": [
    {
      icon: <FaCogs className="text-4xl lg:text-6xl text-orange-500" />,
      name: "Apache Spark",
      experience: "N/A",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-yellow-600" />,
      name: "Hadoop",
      experience: "N/A",
    },
    {
      icon: <MdStorage className="text-4xl lg:text-6xl text-orange-400" />,
      name: "Hive",
      experience: "N/A",
    },
    {
      icon: <FaStream className="text-4xl lg:text-6xl text-black" />,
      name: "Kafka",
      experience: "2+ years",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-blue-600" />,
      name: "Delta Lake",
      experience: "N/A",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-red-600" />,
      name: "ClickHouse",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-gray-500" />,
      name: "Flink",
      experience: "N/A",
    },
  ],
  "Data Warehousing": [
    {
      icon: <MdCloudQueue className="text-4xl lg:text-6xl text-blue-400" />,
      name: "Snowflake",
      experience: "2+ years",
    },
    {
      icon: <FaAws className="text-4xl lg:text-6xl text-red-600" />,
      name: "Redshift",
      experience: "2+ years",
    },
    {
      icon: <FaCloud className="text-4xl lg:text-6xl text-blue-500" />,
      name: "BigQuery",
      experience: "1+ year",
    },
    {
      icon: <MdStorage className="text-4xl lg:text-6xl text-blue-600" />,
      name: "Azure Synapse",
      experience: "1+ year",
    },
  ],
  "ETL/ELT & Orchestration": [
    {
      icon: <FaCogs className="text-4xl lg:text-6xl text-red-500" />,
      name: "Airflow",
      experience: "2+ years",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-orange-600" />,
      name: "dbt",
      experience: "2+ years",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-gray-500" />,
      name: "Apache NiFi",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-blue-600" />,
      name: "Azure Data Factory",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-purple-600" />,
      name: "Informatica",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-orange-500" />,
      name: "Talend",
      experience: "N/A",
    },
  ],
  "Databases": [
    {
      icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
      name: "PostgreSQL",
      experience: "3+ years",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-blue-600" />,
      name: "MySQL",
      experience: "3+ years",
    },
    {
      icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
      name: "MongoDB",
      experience: "2+ years",
    },
    {
      icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
      name: "Redis",
      experience: "2+ years",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-red-700" />,
      name: "MS SQL Server",
      experience: "N/A",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-orange-600" />,
      name: "Oracle",
      experience: "N/A",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-gray-500" />,
      name: "Cassandra",
      experience: "N/A",
    },
    {
      icon: <FaDatabase className="text-4xl lg:text-6xl text-yellow-600" />,
      name: "DynamoDB",
      experience: "N/A",
    },
  ],
  "DevOps & Infrastructure": [
    {
      icon: <FaDocker className="text-4xl lg:text-6xl text-blue-600" />,
      name: "Docker",
      experience: "3+ years",
    },
    {
      icon: <SiKubernetes className="text-4xl lg:text-6xl text-blue-400" />,
      name: "Kubernetes",
      experience: "2+ years",
    },
    {
      icon: <FaJenkins className="text-4xl lg:text-6xl text-blue-600" />,
      name: "Jenkins",
      experience: "2+ years",
    },
    {
      icon: <FaGit className="text-4xl lg:text-6xl text-orange-600" />,
      name: "Git",
      experience: "4+ years",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-gray-500" />,
      name: "CI/CD",
      experience: "3+ years",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-blue-400" />,
      name: "GitHub Actions",
      experience: "N/A",
    },
    {
      icon: <MdSecurity className="text-4xl lg:text-6xl text-orange-600" />,
      name: "Prometheus",
      experience: "N/A",
    },
    {
      icon: <FaChartBar className="text-4xl lg:text-6xl text-orange-500" />,
      name: "Grafana",
      experience: "N/A",
    },
    {
      icon: <MdSecurity className="text-4xl lg:text-6xl text-purple-600" />,
      name: "Datadog",
      experience: "N/A",
    },
    {
      icon: <FaAws className="text-4xl lg:text-6xl text-orange-500" />,
      name: "CloudWatch",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-gray-500" />,
      name: "ELK Stack",
      experience: "N/A",
    },
  ],
  "Data Visualization & BI": [
    {
      icon: <AiOutlineBarChart className="text-4xl lg:text-6xl text-yellow-500" />,
      name: "Power BI",
      experience: "2+ years",
    },
    {
      icon: <FaChartBar className="text-4xl lg:text-6xl text-blue-600" />,
      name: "Tableau",
      experience: "2+ years",
    },
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-purple-500" />,
      name: "Looker",
      experience: "1+ year",
    },
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-red-600" />,
      name: "Google Data Studio",
      experience: "N/A",
    },
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-blue-400" />,
      name: "Metabase",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-green-600" />,
      name: "Microsoft Excel",
      experience: "N/A",
    },
    {
      icon: <FaAws className="text-4xl lg:text-6xl text-red-600" />,
      name: "Amazon QuickSight",
      experience: "N/A",
    },
  ],
  "AI/ML & Related Technologies": [
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-orange-600" />,
      name: "SageMaker",
      experience: "2+ years",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-orange-400" />,
      name: "Scikit-learn",
      experience: "3+ years",
    },
    {
      icon: <FaCogs className="text-4xl lg:text-6xl text-orange-600" />,
      name: "PyTorch",
      experience: "2+ years",
    },
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-red-500" />,
      name: "Keras",
      experience: "2+ years",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-blue-600" />,
      name: "TensorFlow",
      experience: "2+ years",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-purple-600" />,
      name: "Langchain",
      experience: "1+ year",
    },
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-green-500" />,
      name: "OpenCV",
      experience: "2+ years",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-teal-600" />,
      name: "Hugging Face",
      experience: "1+ year",
    },
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-purple-600" />,
      name: "MLflow",
      experience: "1+ year",
    },
    {
      icon: <FaCogs className="text-4xl lg:text-6xl text-indigo-600" />,
      name: "AutoML",
      experience: "1+ year",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-pink-600" />,
      name: "Pandas",
      experience: "3+ years",
    },
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-yellow-600" />,
      name: "NumPy",
      experience: "3+ years",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-red-400" />,
      name: "Matplotlib",
      experience: "2+ years",
    },
    {
      icon: <MdAnalytics className="text-4xl lg:text-6xl text-blue-400" />,
      name: "Seaborn",
      experience: "2+ years",
    },
    {
      icon: <FaCogs className="text-4xl lg:text-6xl text-green-400" />,
      name: "NLTK",
      experience: "2+ years",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-orange-500" />,
      name: "spaCy",
      experience: "1+ year",
    },
  ],
  "Web Development": [
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
      icon: <SiAngular className="text-4xl lg:text-6xl text-red-600" />,
      name: "Angular",
      experience: "2+ years",
    },
    {
      icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
      name: "Node.js",
      experience: "2+ years",
    },
    {
      icon: <FaCode className="text-4xl lg:text-6xl text-gray-400" />,
      name: "Express.js",
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
  ],
  "Data Governance & Security": [
    {
      icon: <MdSecurity className="text-4xl lg:text-6xl text-purple-600" />,
      name: "Great Expectations",
      experience: "1+ year",
    },
    {
      icon: <MdSecurity className="text-4xl lg:text-6xl text-blue-600" />,
      name: "Azure Purview",
      experience: "1+ year",
    },
    {
      icon: <MdSecurity className="text-4xl lg:text-6xl text-gray-600" />,
      name: "RBAC",
      experience: "N/A",
    },
    {
      icon: <MdSecurity className="text-4xl lg:text-6xl text-red-600" />,
      name: "Data Masking",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-blue-400" />,
      name: "Amundsen",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-green-400" />,
      name: "OpenMetadata",
      experience: "N/A",
    },
    {
      icon: <FaTools className="text-4xl lg:text-6xl text-orange-400" />,
      name: "Apache Ranger",
      experience: "N/A",
    },
  ],
};
// Keep the original SKILLS array for backward compatibility
export const SKILLS = Object.values(SKILLS_CATEGORIES).flat();
export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};
export const TESTIMONIALS = [
  {
    role: "Data Engineer",
    company: "Capital One",
    dates: "Jan 2025 - Present",
    image: user1,
    details: [
      "Designed Azure Data Factory pipelines to unify structured and semi-structured claims, reducing processing time by 38%.",
      "Optimized Azure Synapse queries using partitioning and materialized views, enhancing performance by 41%.",
      "Automated daily ingestion from Azure Data Lake Storage into Delta Lake via Apache Airflow.",
      "Applied Azure Purview and RBAC policies to enforce GDPR and PCI-DSS compliance, reducing remediation workload by 52%.",
    ],
  },
  {
    role: "Data Engineer",
    company: "CitiusTech",
    dates: "Jun 2021 - Dec 2023",
    image: user3,
    details: [
      "Designed Amazon Redshift warehouse consolidating patient data, improving clinical KPI tracking accuracy by 38%.",
      "Built Amazon QuickSight dashboards to visualize performance metrics, reducing emergency department wait times by 15%.",
      "Automated data pipelines with AWS Glue and AWS Lambda, reducing manual aggregation workload by 20 hours weekly.",
      "Developed machine learning models in Amazon SageMaker predicting patient length-of-stay, increasing discharge planning efficiency by 14%.",
    ],
  },
];
export const EDUCATION = [
  {
    "role": "Masters Degree, Information Technology",
    "company": "Kennesaw State University",
    "period": "Jan 2024 - May 2025",
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
    icon: <FaGithub fontSize={25} className="hover:hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/preethamchoppa/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];