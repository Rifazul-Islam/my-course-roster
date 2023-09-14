import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";

const Main = () => {
return (
<div className="md:flex justify-between">
   <Cards/>
   <Carts/>                                       
</div>
);
};

export default Main;