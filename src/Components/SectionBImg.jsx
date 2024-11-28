

export default function SectionBImg() {
  return (
    <>
    
    
    <div className=" md:mx-6 p-6 m-2 rounded-xl bg-[#384049] relative">

    <h1 className="md:text-4xl text-3xl sm:mb-16 font-semibold  mt-2 font-times text-white">Our <span className="text-[#8456f7]">Specifications</span> :-</h1>
   

    <div className="m-2 md:mx-6 md:p-2  ">
      
      <div className="flex w-full md:flex-row  flex-col justify-around relative items-center gap-8 text-white ">
      <div className="sm:bg-[#4379F2] w-[30%]  md:left-[2%]  lg:-bottom-[10%] md:-bottom-[8%] md:h-[50vh] lg:h-[70vh] md:absolute"></div>
      <div className="sm:border-[#8B5DFF] w-[30%]  sm:border-2 left-[12%] lg:-top-[10%] md:-top-[10%] sm:h-[50vh] lg:h-[70vh] absolute"></div>

        <img src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg" alt="" 
        className="sm:w-[30%] w-full   z-10  shadow-custom-dark"
         />

       <div className="md:w-[40%] md:-mt-[12%]  w-full   ">
       <h2 className="md:text-3xl text-xl font-semibold best-place mb-3 text-[#8456f7]">Best Place to RELAX </h2>
       <p className="md:text-lg w-full ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo recusandae odio repudiandae culpa mollitia tenetur ipsa officia fugiat doloribus, natus omnis ex deserunt modi quo porro ipsum nemo exercitationem totam aut provident, dolore ea distinctio? Voluptate animi numquam ullam facere veniam repellat, maxime asperiores labore nihil expedita magnam magni alias?</p>
       </div>
      </div>
      {/* <img src="https://images.pexels.com/photos/6670869/pexels-photo-6670869.jpeg" alt=""  */}
      {/* className="w-[30%] rounded-lg absolute hidden md:block  top-[40%]"/> */}
      
    </div>
    <div className="m-2 md:mx-6  md:p-10  bg-[#384049]">
      
      <div className="flex w-full md:flex-row flex-col-reverse relative justify-around items-center gap-8 text-white ">
        

       <div className="md:w-[40%] w-full ">
       <h2 className="md:text-3xl text-xl font-semibold best-place tracking-normal mb-3 text-[#8456f7] ">Luxury Interior</h2>
       <p className="md:text-lg w-full  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo recusandae odio repudiandae culpa mollitia tenetur ipsa officia fugiat doloribus, natus omnis ex deserunt modi quo porro ipsum nemo exercitationem totam aut provident, dolore ea distinctio? Voluptate animi numquam ullam facere veniam repellat, maxime asperiores labore nihil expedita magnam magni alias?</p>
       </div>
      <div className="md:bg-[#85A98F] w-[30%] md:-mt-[12%] right-[2%]  lg:-top-[12%] md:bottom-[12%] md:h-[50vh] xl:h-[80vh] lg:h-[60vh] absolute"></div>
      <div className="md:border-[#A8CD89] w-[30%] md:border-2 md:-mt-[12%] right-[12%] md:h-[50vh] lg:-bottom-[10%]  md:top-[12%] lg:h-[60vh] xl:h-[80vh] absolute"></div>

       
       <img src="https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg" alt="" 
        className="sm:w-[30%] w-full z-10 md:-mt-[12%]  mt-12 shadow-custom-dark "
         />
         
      </div>
    </div>
    {/* <img src="https://images.pexels.com/photos/8092435/pexels-photo-8092435.jpeg" alt="" className="w-[30%] rounded-lg hidden md:block absolute top-[34%] right-12" /> */}
    </div>
    </>
  )
}
