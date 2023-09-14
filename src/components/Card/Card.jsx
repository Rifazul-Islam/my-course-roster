
const Card = () => {
return (
<div className="bg-[#FFF] rounded-lg w-72 border-3 border-red-500 p-4">
  <img src="https://i.ibb.co/C9FXhmv/Rectangle.png" alt="" />

    <h1 className="py-3 font-semibold"> Introduction to C Programming </h1> 
    <p className="text-[#1c1b1b99]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>         
    <div className="py-4 text-[#1c1b1b99] flex justify-between">
      <p> Price : 13000</p>
      <p> Credit: 2hr</p>
   </div> 
  <button  className="bg-[magenta] w-full h-8 text-white rounded-lg"> Select </button>
</div>
);
};

export default Card;