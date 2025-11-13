import CardComponent from "./CardComponent";
import { useState } from "react";

const Courses = () => {
     const [courses, setcourses] = useState([
        { title: 'UI/UX Designing Training Course', modules: 11, author: 'Ethan Cole', id: 1 },
        { title: 'Full Stack Development Course', modules: 9, author: 'Olivia Hayes', id: 2 },
        { title: 'Digital Marketing & E-Commerce', modules: 15, author: 'Sophie Turner', id: 3 }
    ])
    return (
        <div className="Courses">
            <h1 className="pre-courses-text">Our Online Courses</h1>
            <CardComponent courses={courses} />
        </div>
    );
}

export default Courses;