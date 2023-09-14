import { useState } from "react";
import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";

const Main = () => {

 const[courseSelect,setCourseSelect] = useState([]) 

 const handlerAddToCourse=(course,id)=>{
   let isExit = courseSelect.find(item => item.id === id)

    if(isExit){
      return alert('Name is already Select')
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