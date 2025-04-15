export interface Skill {
    name: string;
}

export const skills: Skill[] = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Redux-Toolkit" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "Git" },
];

// Залишаємо решту (projects, experiences) без змін
export interface Project {
    title: string;
    description: string;
    image?: string;
    github: string;
    demo: string;
    tags: string[];
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
    achievements?: string[];
}

export const projects: Project[] = [
    {
        title: "A Tarot Card Reader Portfolio Website 🃏🔮",
        description: "Recently, I built a modern one-page portfolio website for my sister, who is a professional tarot card reader. The goal was to create a stylish, responsive, and visually appealing site that reflects her unique brand.",
        github: "#",
        demo: "https://taro-portfolio-one.vercel.app/",
        tags: ["React", "TypeScript ", "Framer Motion"],
    },
    {
        title: "Mood Tracker 🌠📊",
        description: "I recently built Mood Tracker, a modern web app designed to track and analyze moods with a unique cosmic vibe. This project lets users log their emotions, visualize them through charts, review statistics, and even track consecutive days of entries. My goal was to create an intuitive, responsive, and visually engaging app that encourages self-reflection.",
        image: "/placeholder.svg?height=200&width=300",
        github: "#",
        demo: "https://mood-tracker-teal.vercel.app/",
        tags: ["React", " TypeScript", "Redux"],
    },
    {
        title: "Questify",
        description: "A task management application with CRUD functionality.",
        image: "/placeholder.svg?height=200&width=300",
        github: "#",
        demo: "https://questify-swart.vercel.app/",
        tags: ["React", "TypeScript", "Redux"],
    },
    // {
    //     title: "Portfolio Website",
    //     description: "A personal portfolio website showcasing my projects and skills.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     github: "#",
    //     demo: "#",
    //     tags: ["React", "Tailwind CSS"],
    // },
    // {
    //     title: "Recipe Finder",
    //     description: "An application to search and save cooking recipes.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     github: "#",
    //     demo: "#",
    //     tags: ["JavaScript", "API", "LocalStorage"],
    // },
    // {
    //     title: "Movie Database",
    //     description: "A movie database application using a public API.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     github: "#",
    //     demo: "#",
    //     tags: ["React", "API", "CSS"],
    // },
];

export const experiences: Experience[] = [
    {
        company: "Stagic.dk",
        position: "Junior React Developer",
        period: "April 2024 - November 2024",
        description:
            " Developed and maintained scalable components for an existing project using React.js,+ Taillwind ensuring compatibility\n" +
            "across different devices and browsers.\n" +
            "Collaborated with a team of developers to implement new features, focusing on performance optimization..\n" +
            " Participated in code reviews and implemented suggestions to improve overall code quality..",
        // achievements: [
        //     "Improved site performance by 40%",
        //     "Implemented new design system",
        //     "Led team of 3 junior developers",
        // ],
    },
    {
        company: "Your Price Booking",
        position: "Junior React Developer",
        period: "April 2024 - June 2024",
        description:
            "Built responsive and reusable UI components using React.js and CSS modules to improve user experience.\n" +
            " Maintained and extended the existing codebase, ensuring compliance with best practices and coding\n" +
            "standards.\n" +
            "Integrated third-party APIs and handled dynamic routing for a seamless userflow.\n" +
            " Worked closely with designers to transform mockups into functional components.",
        // achievements: [
        //     "Delivered 15+ client projects",
        //     "Reduced page load time by 25%",
        //     "Implemented SEO best practices",
        // ],
    },
    {
        company: "Info-Polus",
        position: "Junior React Developer",
        period: "May 2022 - November 2022",
        description:
            " Built responsive and reusable UI components using React.js and CSS modules to improve user experience.\n" +
            "Maintained and extended the existing codebase, ensuring compliance with best practices and coding\n" +
            "standards.\n" +
            "Integrated third-party APIs and handled dynamic routing for a seamless userflow.\n" +
            " Worked closely with designers to transform mockups into functional components.",
        // achievements: ["Designed 5 landing pages", "Learned React fundamentals", "Created responsive email templates"],
    },
];
