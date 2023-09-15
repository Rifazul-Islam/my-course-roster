import { useState } from "react";
import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";
import toast from "react-hot-toast";

const Main = () => {

 const[courseSelect,setCourseSelect] = useState([])
 const[totalSum,setTotalSum] = useState(0)
 const[totalRemaining,setTotalRemaining] = useState(0)


 const handlerAddToCourse=(id,course)=>{
  let sumHour = course.credit ;
   let isExit = courseSelect.find(item => item.id === id)

    if(isExit){
      return toast.error('Name is already Add')
    }else{
      courseSelect.forEach(hour =>{
        sumHour  = sumHour  + hour.credit;
        
      })

     if( sumHour  > 20){
      return toast.error('your No Remaining hours')
     }else{

      let remaining = 20 - sumHour ;
      
      if(remaining < 0){
        return toast.error('your Not allow ')
      }else{
     
        setTotalSum(sumHour)
        setTotalRemaining(remaining)
        setCourseSelect([...courseSelect,course])
      }
     }
     }
 
 }

return (
<div className="md:flex justify-between">
   <Cards handlerAddToCourse={handlerAddToCourse} />
   <Carts courseSelect={courseSelect} totalSum={totalSum} totalRemaining={totalRemaining} />                                       
</div>
);
};

export default Main;