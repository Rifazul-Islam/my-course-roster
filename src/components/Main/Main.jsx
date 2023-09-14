import { useState } from "react";
import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";
import toast from "react-hot-toast";

const Main = () => {

 const[courseSelect,setCourseSelect] = useState([]) 

 const handlerAddToCourse=(course,id)=>{
   let isExit = courseSelect.find(item => item.id === id)

    if(isExit){
      return toast.error('Name is already Add')
    }else{
      setCourseSelect([...courseSelect,course])
    }
 }

return (
<div className="md:flex justify-between">
   <Cards handlerAddToCourse={handlerAddToCourse} />
   <Carts courseSelect={courseSelect} />                                       
</div>
);
};

export default Main;