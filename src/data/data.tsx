import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  name: `I am Elane (Yi Ting) Han.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am actively seeking <strong className="text-stone-100">software engineering internship</strong> starting from 2024.
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
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
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
    content: <p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong className="text-stone-100 text-black">• Courses:</strong> Reinforcement Learning, Computer and Network Security, Game Programming.</p>,
  },
  {
    date: 'September 2018 - January 2022',
    location: 'National Chung Cheng University',
    title: 'B.S. in Computer Science and Information Engineering',
    content: <><p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong className="text-stone-100 text-black">• Overall GPA:</strong> 4.16 / 4.3 (3.84 / 4.0).</p> 
      <p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong className="text-stone-100 text-black">• Last 60 Credits:</strong> 4.28 / 4.3 (3.98 / 4.0).</p> 
      <p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong className="text-stone-100 text-black">• Awards:</strong> Academic Presidential Awards (top 5%)(2018 Fall Semester, 2021 Spring Semester, Undergraduate Research Fellowship.</p> 
      <p className="prose-sm text-black sm:prose-base lg:prose-lg"><strong className="text-stone-100 text-black">• Courses:</strong> Software Engineering, Objected-oriented Programming, Operating System, Data Structure and Algorithm, Machine Learning, Neural Network.</p></>
  },
];

export const experience: TimelineItem[] = [
{
    date: 'March 2022 - July 2023',
    location: 'Academia Sinica, Institute of Information Science, Bio-IT-Station',
    title: 'Research Assistant',
    content: (
        <><p>• Applied graphical representation on the sequence and achieved over 85% accuracy in the detection of eccDNAs on most data using neural network.</p>
        <p>• Created a pipeline to detect eccDNAs from single-cell ATAC-seq data using Python.</p>
        <p>• Collaborated with people from a biology background to analyze eccDNAs using single-cell ATAC-seq data and single-cell RNA-seq data, which contained 74k+ cells.</p>
        <p>• Collaborated to develop a database containing eccDNAs from 1.4k+ Taiwanese people.</p>
        <p>• Optimized the eccDNA detection pipeline using BWA2; reduced processing time by 84%. </p></>
    ),
  },
  {
    date: 'July 2021 - February 2022',
    location: 'Academia Sinica, Institute of Information Science, Bio-IT-Station',
    title: 'Undergraduate Research Internship',
    content: (
        <><p>• Developed a database for eccDNAs using PostgreSQL.</p>
        <p>• Received positive feedback for demonstrating strong teamwork skills and a proactive approach in addressing new challenges from the advisor and team members.</p></>
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'www.linkedin.com/in/elane98'},
];
