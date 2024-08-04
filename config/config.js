
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Derrick Remigious",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
   
  ],
}
export const intro = {
  title: "Hey, I'm Derrick Remigious",
  description: "IT engineering fresher with expertise in data science, machine learning, and web development.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1UZZriidAUoa39xFradEtkl3lBau7_hic/view?usp=drive_link",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "Hello! I’m currently pursuing my B.Tech in Information Technology at Prathyusha Engineering College, with a planned graduation in 2025. I have maintained a CGPA of 8.2, reflecting my dedication and commitment to my studies. My education has provided me with a solid foundation in IT principles and practices, preparing me for a dynamic career in technology.",
    "I have honed my skills in web development, data analytics, UI/UX design, and core IT concepts. My expertise includes creating dynamic and responsive web applications, analyzing and interpreting complex data sets to generate actionable insights, and designing user-friendly interfaces that enhance user experience. This diverse skill set equips me to tackle a variety of technical challenges and contribute effectively to any project.",
    "I am passionate about leveraging my knowledge to solve real-world problems and make a meaningful impact. Whether it’s developing innovative web solutions or uncovering insights through data analysis, I am driven by a desire to contribute to impactful projects. I am excited to connect with like-minded professionals and explore opportunities to collaborate and create something amazing together.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
   
    {
      title: "Web Development",
      description: "A web developer crafts digital experiences, blending creativity and technical prowess to build captivating and intuitive websites that engage users effectively.",
      icons: null,
    },
    {
      title: "Data Analytics",
      description: "A data analyst translates complex data into actionable insights, driving informed decisions and strategic outcomes through meticulous analysis and visualization techniques.",
      icons: null,
    },
    {
      title: "Android App Development",
      description: "An Android app developer designs and builds applications for mobile devices running the Android operating system, focusing on creating intuitive user interfaces and robust functionality to enhance user experiences.",
      icons: null,
    },

  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "E-Commerce Website",
      description: "Successfully led the end-to-end development of a responsive E- Commerce website, implementing secure payment gateways, inventory management, and analytics tools, resulting in increased user engagement and business growth.",
      icons: [

        {
          icon: faGithub,
          link: "",
        },
      ]
    },
    {
      title: "Online Bookstore Management System",
      description: "Developed an Online Bookstore Management System in Python, featuring user authentication, inventory management, and order processing, highlighting proficiency in backend development and e-commerce functionality.",
      icons: [

        {
          icon: faGithub,
          link: "",
        },

      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to ask questions, feel free to reach out directly by email at derrickremigious@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:derrickremigious@gmail.com",
      isPrimary: true,
    },
    
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Derrick Remigious | IT Engineer | Web Developer | Data Analyst",
  description: "Enthusiastic entry-level IT professional with a strong foundation in web development and a fervent passion for data science. Possessing hands-on expertise in machine learning, I am eager to contribute to innovative projects, demonstrate adaptability in dynamic environments, and actively contribute to the growth of a forward-thinking team.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@derrickremigious",
  description: "IT Engineer | Web Developer | Data Analyst",
  cards: [
    {
      title: "My website",
      link: "",
    },
    {
      title: "E-Commerce Website",
      link: "",
    },
    {
      title: "Online Bookstore Management System",
      link: "",
    },
    {
      title: "My GitHub",
      link: "https://github.com/Remigious07",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/derrickremigious/",
    },
  ]
}