
import PropTypes from 'prop-types'
const Carts = ({courseSelect}) => {

return (
<div className="md:w-1/3 md:mx-10 border-2"> 
<div className="bg-[#FFF] rounded-lg w-[80%] px-4 mx-auto  border-3 border-red-500">
<h1 className="py-4 text-blue-600 border-b-2 ">Credit Hour Remaining : 7 hr</h1>   
  
  <h2 className="font-bold"> Course Name</h2>  
   
 {courseSelect.map(items =><ul className='list-disc pl-4' key={items.id}> <li> {items.name} </li> </ul> )}         


 <p className='py-4 text-[#1c1b1b99]'> Total Credit Hour : 13 </p>

</div>
                                      



</div>
);
};

Carts.propTypes = {
courseSelect: PropTypes.array
}
export default Carts;