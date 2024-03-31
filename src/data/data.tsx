import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/por1.jpg';
import porfolioImage2 from '../images/portfolio/por2.jpg';
import porfolioImage3 from '../images/portfolio/por3.png';
import porfolioImage4 from '../images/portfolio/por4.png';
import porfolioImage5 from '../images/portfolio/por5.png';
import profilepic from '../images/profilepic1.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Yi Ting Han's Personal Website",
  description: "Website for displaying Elane's Experience.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Experience: 'experience',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I am Elane (Yi-Ting) Han.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am actively seeking <strong className="text-stone-100">software engineering internship</strong>!.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://umass-my.sharepoint.com/:b:/g/personal/yhan_umass_edu/Ec4Qa3Ju8_1JtPTzT8tioswBgUkNkV2W-o9SaxRlecxDtg?e=gCqVgD',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: 
    `I am pursuing a master's degree in Computer Science at the University of Massachusetts Amherst. Prior to this, I gained practical experience as a Research Assistant for over a year. During this time, I was deeply involved in developing data pipelines and utilizing neural networks for data analysis. Throughout my career, I dedicated myself to various projects, including successfully improving and deploying an object-detection model on a real-time Mixed Reality (MR) device, enhancing my passion for innovative technological solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Amherst, MA', Icon: MapIcon},
    {label: 'Study', text: 'University of Massachusetts Amherst (UMASS)', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
 {
    name: 'Programming languages',
    skills: [
      {
        name: 'C/C++',
        level: 7,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'R',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'MATLAB',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
    ],
  },
  {
    name: 'Frameworks/Tools',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Django',
        level: 6,
      },
      {
        name: 'Shell Script',
        level: 7,
      },
      {
        name: 'Tensorflow',
        level: 8,
      },
      {
        name: 'Keras',
        level: 8,
      },
      {
        name: 'Unity',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Real-time Product Information in Mixed Reality (MR) through Object Detection',
    description: 'This project utilizes the Microsoft HoloLens MR device, employing deep learning for real-time product detection and recognition via the camera. By matching object features with our backend database, It provides product information instantly in front of the eyes of the customers, enhancing the consumer experience.',
    url: 'https://docs.google.com/document/d/1VQzwUrm0Fdn5htG9QQANOlNisgwKBFoC/edit?usp=sharing&ouid=109274637105206472637&rtpof=true&sd=true',
    image: porfolioImage1,
  },
  {
    title: 'Traditional Chinese Scene Text Recognition',
    description: 'The objective of this project is to accurately identify the precise location of Traditional Chinese characters within various scenes. To achieve this, we have employed the YOLOv5 model as our pretrained framework, subsequently fine-tuning it using our extensive dataset. This strategic approach enables us to achieve a high level of proficiency in detecting Traditional Chinese characters within the images, underscoring our commitment to precision and effectiveness in this endeavor.',
    url: 'https://docs.google.com/document/d/113NB530qxOMLhgeZQPucOGskAsg6gVOl/edit?usp=sharing&ouid=109274637105206472637&rtpof=true&sd=true',
    image: porfolioImage2,
  },
  {
    title: 'Improve Gender, Race, and Age Classification via Supervised Contrastive Learning',
    description: 'We applied a multi-output supervised contrastive loss on Resnet-50. Our method underwent rigorous evaluation on three recent datasets—FairFace, UTKFace, and the Asian Face Age Dataset (AFAD)—for gender, age, and race classification. The results clearly indicate a significant improvement in accuracy across the majority of tasks within all datasets, highlighting the efficacy of our approach.',
    url: 'https://drive.google.com/file/d/1FDnICOH48_Kd4Svj4hVKmqeK7tRPatB_/view?usp=sharing',
    image: porfolioImage3,
  },
  {
    title: 'First-in-First-out Page Replacement algorithm Implementation in Linux System',
    description: 'We successfully implemented the First-In-First-Out (FIFO) algorithm for page frame replacement within the Linux system. This implementation was rigorously tested using a dedicated user space testing program. This project provided valuable insights into memory management via paging, offering an in-depth examination of page tables and the intricacies of virtual address space.',
    url: 'https://docs.google.com/document/d/12irlVfbiEpU5OnArP5ap0nf95lAZ3FK13HTVvDO4QV8/edit?usp=sharing',
    image: porfolioImage4,
  },
  {
    title: 'A little astronaut on a strange planet',
    description: 'This project is an assignment from course: Game Programming. By creating a terrain, a 3D primitive, adjusting lighting, and using and modifying chracter controller through the Unity Engine, the player can control the astronaut character to explore the planet I built and eventually reach the end zone.',
    url: 'https://umass-my.sharepoint.com/:v:/g/personal/yhan_umass_edu/EdJnZNTqvHJEsLk5BA35ddgBJSUwVASb5h0HnNVk2DwYzQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=tTUU1m',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2023 - Present',
    location: 'University of Massachusetts Amherst (UMASS)',
    title: 'M.S. in Computer Science',
    content: <><p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong>• Overall GPA:</strong> 3.9 / 4.0.</p> 
      <p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong>• Courses:</strong> Advanced Algorithm, Software Engineering, Reinforcement Learning, Computer and Network Security, Game Programming.</p></>
  },
  {
    date: 'September 2018 - January 2022',
    location: 'National Chung Cheng University',
    title: 'B.S. in Computer Science and Information Engineering',
    content: <><p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong>• Overall GPA:</strong> 4.16 / 4.3 (3.84 / 4.0).</p> 
      <p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong>• Last 60 Credits:</strong> 4.28 / 4.3 (3.98 / 4.0).</p> 
      <p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong>• Awards:</strong> Academic Presidential Awards (top 5%)(2018 Fall Semester, 2021 Spring Semester, Undergraduate Research Fellowship.</p> 
      <p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong>• Courses:</strong> Objected-oriented Programming, Operating System, Data Structure and Algorithm, Machine Learning, Neural Network.</p></>
  },
];

export const experience: TimelineItem[] = [
{
    date: 'February 2024 - Present',
    location: 'Rescue Lab Umass Amherst',
    title: 'Software Engineer Intern',
    content: (
        <><p>• Collaborated with team to develop a cutting-edge web application utilizing YOLOv5 and Zero-Shot Learning to identify tattoos potentially affiliated with specific criminal syndicates or gangs.</p>
        <p>• Established user web interfaces using JavaScript and React to initiate requests to the web application, and Django for the backend.</p>
        <p>• Deployed infrastructure and developed server communication with Python, RESTful API. </p></>
    ),
  },
{
    date: 'March 2022 - July 2023',
    location: 'Academia Sinica, Institute of Information Science, Bio-IT-Station',
    title: 'Research Assistant',
    content: (
        <><p>• Achieved over 85% accuracy in the detection of extrachromosomal circular DNAs (eccDNAs) on 49k+ sequence over 4 species by applying graphical representation.</p>
        <p>• Spearheaded a Python tool to detect eccDNAs from single-cell assay for transposase-accessible chromatin with sequencing (ATAC-seq) data.</p>
        <p>• Optimized the eccDNA detection pipeline for over 14 TB of whole genome sequence through data cleaning; reduced processing time by 84%. </p></>
    ),
  },
  {
    date: 'July 2021 - February 2022',
    location: 'Academia Sinica, Institute of Information Science, Bio-IT-Station',
    title: 'Software Engineer Internship',
    content: (
        <><p>• Developed a database containing eccDNAs from 1.4k+ Taiwanese people using PostgreSQL.</p>
        <p>• Collaborated with people from a biology background to analyze eccDNAs using single-cell ATAC-seq data and single-cell RNA-seq data, which contained 74k+ cells.</p></>
    ),
  },
  {
    date: 'July 2021 - February 2022',
    location: 'National Chung Cheng University, Program Design, Department of Computer Science and Information Engineering',
    title: 'Teaching Assistant',
    content: (
        <><p>• Provided guidance to 40+ Program Design students on their weekly assignments, resulting in positive feedback from students regarding the effectiveness of the advice.</p>
        <p>• Developed web pages to facilitate the instructor's visual representation of key concepts in weekly assignments.</p></>
    ),
  },
];
/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'yhan@umass.edu',
      href: 'mailto:yhan@umass.edu',
    },
    {
      type: ContactType.Location,
      text: 'Amherst MA, United States',
      href: 'https://maps.app.goo.gl/F9D63wZAqNr6CCzv9',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/elanehan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/elane98/'},
];
