import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I am a third-year Electrical and Information Engineering undergraduate with a passion for both software and electronics. My experience as a software engineering intern has honed my skills in development and problem-solving. I am driven to contribute to projects that connect software and hardware, especially in automation, IoT, and embedded systems.`;

export const ABOUT_TEXT = `Here's your updated portfolio description incorporating your expertise:

---

I am Wimukthi Pathum Wijerathne, a dedicated and versatile full-stack developer and a third-year undergraduate at the University of Ruhuna’s Faculty of Engineering, Department of Electrical and Information Engineering. With expertise in React, NestJS, Spring Boot, Node.js, and MongoDB, I am passionate about building efficient and user-friendly web applications. I am also experienced in machine learning, using libraries like Pandas, NumPy, and PyTorch to develop data-driven solutions. On the electronics side, I have proficiency in KiCad and Altium for designing and simulating circuits. My journey started with a curiosity for understanding how things work, and it has evolved into a commitment to learning and tackling complex challenges. I thrive in collaborative environments and enjoy solving problems to deliver high-quality results. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 ",
    role: "Intern Software Engineer",
    company: "NCINGA Pvt. Ltd.",
    description: `Contributed to the development and maintenance of e-commerce platforms using React.js and Spring Boot. Assisted in implementing RESTful APIs and integrating with databases. Collaborated with the team and stakeholders to understand project requirements and ensure timely delivery.`,
    technologies: ["Javascript", "React.js", "SpringBoot", "mongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Anuaradhapura, Sri Lanka",
  phoneNo: "0713834401",
  email: "wimukthiwijerathne@gmail.com",
};
