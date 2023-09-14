
import PropTypes from 'prop-types'
import { BsCurrencyDollar } from "react-icons/bs";
import { BiBookOpen} from "react-icons/bi";

const Card = ({course,handlerAddToCourse}) => {
const {img,name,description,price,credit,id} = course

return (

<div className="bg-[#FFF] rounded-lg p-4">
  <img src={img} alt="" />
    <h1 className="py-3 font-semibold"> {name} </h1> 
    <p className="text-[#1c1b1b99]"> {description} </p>         
    <div className="py-4 flex justify-between">
      <p className="flex items-center"> <BsCurrencyDollar/>  <span className="text-[#1c1b1b99] pl-2"> Price: {price} </span></p>
      <p className="flex items-center">  <BiBookOpen/> <span className="ml-2 text-[#1c1b1b99]">Credit:{credit}hr</span></p>
   </div> 
  <button onClick={()=>handlerAddToCourse(course,id)}  className="bg-[magenta] w-full h-8 hover:bg-blue-500 text-white rounded-lg"> Select </button>
</div>             

);
};

Card.propTypes = {
 course:PropTypes.object,
 handlerAddToCourse:PropTypes.func
}
export default Card;