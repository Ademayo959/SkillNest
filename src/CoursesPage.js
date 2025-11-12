import CardComponent from "./CardComponent";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const CoursesPage = () => {
    const [courses, setcourses] = useState([
        { title: 'UI/UX Designing Training Course', modules: 11, author: 'Ethan Cole', id: 1 },
        { title: 'Full Stack Development Course', modules: 9, author: 'Olivia Hayes', id: 2 },
        { title: 'Python for Data Scientists', modules: 12, author: 'Marcus Reeds', id: 3 },
        { title: 'Digital Marketing & E-Commerce', modules: 15, author: 'Sophie Turner', id: 4 },
        { title: 'Advanced Javascript Mastery', modules: 14, author: 'Ella Johnson', id: 5 },
        { title: 'Mobile App Dev with React', modules: 10, author: 'Liam Brooks', id: 6 },
        { title: 'Cloud Computing Essentials', modules: 7, author: 'Chloe Adams', id: 7 },
        { title: 'Cybersecurity Fundamentals', modules: 11, author: 'Noah Turner', id: 8 },
        { title: 'Machine Learning Bootcamp', modules: 16, author: 'Ava Mitchell', id: 9 },
        { title: 'Database Design & Analysis', modules: 19, author: 'Lucas Bennett', id: 10 },
        { id: 11, title: "Frontend Web Dev with Vue", modules: 12, author: "Grace Wilson" },
        { id: 12, title: "Backend Dev with Node.js", modules: 14, author: "Henry Parker" },
        { id: 13, title: "Artificial Intelligence Basics", modules: 10, author: "Nora Peterson" },
        { id: 14, title: "Blockchain Technology Intro", modules: 11, author: "Eliot Sanders" },
        { id: 15, title: "Responsive Web Design Pro", modules: 8, author: "Isla Gray" },
        { id: 16, title: "DevOps Foundations Training", modules: 13, author: "Ryan Brooks" },
        { id: 17, title: "C++ Programming Essentials", modules: 9, author: "Sienna Clark" },
        { id: 18, title: "Game Dev with Unity Engine", modules: 15, author: "Owen James" },
        { id: 19, title: "Intro to Ethical Hacking", modules: 12, author: "Lara Collins" },
        { id: 20, title: "Project Management Basics", modules: 10, author: "Hugo Wright" },
        { id: 21, title: "React Native Mobile Apps", modules: 14, author: "Zara Mitchell" },
        { id: 22, title: "Intro to Data Visualization", modules: 11, author: "Leo Bennett" },
        { id: 23, title: "Computer Networks Course", modules: 10, author: "Amelia Scott" },
        { id: 24, title: "Penetration Testing Basics", modules: 15, author: "Jacob Murphy" },
        { id: 25, title: "Microservices Architecture", modules: 13, author: "Scarlett Lewis" },
        { id: 26, title: "NoSQL Databases Explained", modules: 9, author: "Elijah Moore" },
        { id: 27, title: "Software Testing Workshop", modules: 12, author: "Luna Perry" },
        { id: 28, title: "Agile Scrum Mastery Guide", modules: 10, author: "Logan Rivera" },
        { id: 29, title: "Intro to Internet of Things", modules: 13, author: "Layla Foster" },
        { id: 30, title: "Advanced React Patterns", modules: 11, author: "Dylan Ross" },
        { id: 31, title: "AWS Cloud Practitioner Path", modules: 14, author: "Maya Roberts" },
        { id: 32, title: "UI Animation with Framer", modules: 8, author: "Eli Walker" },
        { id: 33, title: "Git and GitHub Masterclass", modules: 9, author: "Ruby Anderson" },
        { id: 34, title: "SQL for Data Analytics", modules: 12, author: "Carter Lopez" },
        { id: 35, title: "Next.js for Modern Web", modules: 10, author: "Eva Phillips" },
        { id: 36, title: "Linux Command Line Course", modules: 11, author: "Jack Rivera" },
        { id: 37, title: "Digital Illustration Basics", modules: 15, author: "Hazel Turner" },
        { id: 38, title: "Artificial Neural Networks", modules: 13, author: "Miles Carter" },
        { id: 39, title: "Kotlin App Dev Bootcamp", modules: 9, author: "Avery Brooks" },
        { id: 40, title: "Intro to API Development", modules: 12, author: "Naomi Stewart" },
        { id: 41, title: "UI Systems & Design Tokens", modules: 10, author: "Isaac Perez" },
        { id: 42, title: "Building RESTful Services", modules: 11, author: "Zoe Hamilton" },
        { id: 43, title: "Django Web App Framework", modules: 14, author: "Ethan Morris" },
        { id: 44, title: "Advanced CSS Animations", modules: 9, author: "Clara Jenkins" },
        { id: 45, title: "TypeScript Crash Course", modules: 8, author: "Julian Torres" },
        { id: 46, title: "Firebase Authentication", modules: 10, author: "Mila Baker" },
        { id: 47, title: "Data Science with Pandas", modules: 15, author: "Adam Nelson" },
        { id: 48, title: "TensorFlow Deep Learning", modules: 16, author: "Ariana Cooper" },
        { id: 49, title: "AI Prompt Engineering Lab", modules: 13, author: "Harrison Evans" },
        { id: 50, title: "Chatbot Dev with OpenAI", modules: 11, author: "Ivy Martinez" },
        { id: 56, title: "Creative Coding with Framer Motion", modules: 8, author: "Ruby Howard" }
    ])
    return (
        <div className="coursesPage">
            <div>
                <h1 className="coursesPageMainText">Learn Something New Today</h1>
                <p className="coursesPageSubText">Build real-world skills in coding, design, and tech</p>
            </div>
            <div class="search-bar">
                <div>
                    <input type="text" placeholder="What do you want to learn today?" class="input" />
                </div>
                <div class="filter-div">
                    <div class="filters">
                        <p>Development</p>
                    </div>
                    <div class="filters">
                        <p>Design</p>
                    </div>
                    <div class="filters">
                        <p>Marketing</p>
                    </div>
                    <div class="filters">
                        <p>Business</p>
                    </div>
                </div>
            </div>
            <CardComponent courses={courses} />
        </div>
    );
}

export default CoursesPage;