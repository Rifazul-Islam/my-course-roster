import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
const Cards = () => {
const [courses,setCourses] = useState([]);
useEffect( ()=>{
   fetch('courses.json')  
   .then(res => res.json())
   .then(data => setCourses(data))         
} ,[])
console.log(courses);
return (
<div className="md:w-4/5 md:mx-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   {
    courses.map(course => <Card key={course.id} course={course} ></Card> )
   }                                     
</div>
);
};

export default Cards;