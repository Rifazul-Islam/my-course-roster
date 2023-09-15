import { useState } from "react";
import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";
import toast from "react-hot-toast";

const Main = () => {

 const[courseSelect,setCourseSelect] = useState([])
 const[totalSum,setTotalSum] = useState(0)


 const handlerAddToCourse=(id,course)=>{
  let count = course.credit ;
   let isExit = courseSelect.find(item => item.id === id)

    if(isExit){
      return toast.error('Name is already Add')
    }else{
      
      courseSelect.forEach(hour =>{
      count = count + hour.credit;
        
      })


      setTotalSum(count)
      setCourseSelect([...courseSelect,course])

     }
 
 }

return (
<div className="md:flex justify-between">
   <Cards handlerAddToCourse={handlerAddToCourse} />
   <Carts courseSelect={courseSelect} totalSum={totalSum} />                                       
</div>
);
};

export default Main;