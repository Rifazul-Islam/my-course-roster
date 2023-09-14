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
<div className="md:w-2/3 md:mx-5 border-2">
   <Card></Card>                                      
</div>
);
};

export default Cards;