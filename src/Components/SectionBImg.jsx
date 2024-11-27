

export default function SectionBImg() {
  return (
    <>
    
    
    <div className=" md:mx-6 p-6 m-2 rounded-xl bg-[#384049] relative">

    <h1 className="md:text-4xl text-3xl font-semibold camelCase my-2 font-times text-white">Our <span className="text-[#8456f7]">Specifications</span> :-</h1>
   

    <div className="m-2 md:mx-6 md:p-2 ">
      
      <div className="flex w-full md:flex-row flex-col  justify-center items-center gap-8 text-white ">
        <img src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg" alt="" 
        className="md:w-[30%] w-full rounded-lg md:ml-[20%] bg-white p-2 shadow-custom-dark"
         />

       <div className="md:w-[40%] md:-mt-[12%]  w-full   ">
       <h2 className="md:text-3xl text-xl font-semibold best-place mb-3 text-[#8456f7]">Best Place to RELAX </h2>
       <p className="md:text-lg w-full ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo recusandae odio repudiandae culpa mollitia tenetur ipsa officia fugiat doloribus, natus omnis ex deserunt modi quo porro ipsum nemo exercitationem totam aut provident, dolore ea distinctio? Voluptate animi numquam ullam facere veniam repellat, maxime asperiores labore nihil expedita magnam magni alias?</p>
       </div>
      </div>
      <img src="https://images.pexels.com/photos/6670869/pexels-photo-6670869.jpeg" alt="" 
      className="w-[30%] rounded-lg absolute hidden md:block  top-[40%]"/>
      
    </div>
    <div className="m-2 md:mx-6  md:p-4 bg-[#384049]">
      
      <div className="flex w-full md:flex-row flex-col-reverse justify-center items-center gap-8 text-white ">
        

       <div className="md:w-[40%] w-full relative">
       <h2 className="md:text-3xl text-xl font-semibold best-place tracking-normal mb-3 text-[#8456f7] ">Luxury Interior</h2>
       <p className="md:text-lg w-full ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo recusandae odio repudiandae culpa mollitia tenetur ipsa officia fugiat doloribus, natus omnis ex deserunt modi quo porro ipsum nemo exercitationem totam aut provident, dolore ea distinctio? Voluptate animi numquam ullam facere veniam repellat, maxime asperiores labore nihil expedita magnam magni alias?</p>
       </div>
       <img src="https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg" alt="" 
        className="md:w-[30%] w-full rounded-lg z-10 right-[20%] bg-white mt-12 p-2 shadow-custom-dark "
         />
      </div>
    </div>
    <img src="https://images.pexels.com/photos/8092435/pexels-photo-8092435.jpeg" alt="" className="w-[30%] rounded-lg hidden md:block absolute top-[34%] right-12" />
    </div>
    </>
  )
}
