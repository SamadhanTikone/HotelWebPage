import Button from "@mui/material/Button";
import BedIcon from '@mui/icons-material/Bed';

import { useNavigate } from "react-router-dom";
import ImageSlickSlider from "./ImageSlickSlider";
import SectionBImg from "./SectionBImg";




export default function Home() {
  const navigate = useNavigate()


  function handleNavigate() {

    navigate("/bookARoom")


  }


  return (
    <>
      <div className=" main-home  text-black md:h-[80%] h-[70vh]  md:mx-6 m-2  rounded-lg  ">


        <div className=" h-full  flex  rounded-lg  bg-opacity-40 bg-black inset-0   ">


          <div className="flex flex-col flex-1 md:justify-center   md:py-24 mt-10 md:mt-0 py-0  items-center">


            <h1 className=" md:text-7xl  sm:text-4xl text-3xl leading-relaxed text-white opacity-100 mb-5 font-bold  w-full md:w-auto lg:p-5 sm:p-2 sm:mx-3 uppercase  "><span className="block sm:text-5xl md:mb-2 text-[#8456f7] ">Hotel</span> <span className="inline opacity-100 font-times px-2 border-b-2  md:border-b-4 lg:shadow-custom-glow lg:py-2 lg:px-6 rounded-2xl ">The Kings <span className="  sm:ml-0"> Garden</span></span></h1>



            <p className="text-white lg:w-[60%] px-4 md:text-center md:text-lg text-left ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facere magnam commodi perferendis aut maxime asperiores, dolores quibusdam ut quo pariatur explicabo ab repellat. Ab mollitia cupiditate et accusantium enim tenetur quia est harum! Dolor minima sit facilis itaque reprehenderit, fugit sequi voluptatem commodi inventore, repellat dolore.  </p>


            <Button variant="contained" onClick={handleNavigate} className=" top-[5%] hover:shadow-custom-light shadow-md shadow-current transition-shadow duration-300 " sx={{ bgcolor: "#8456f7" }}>
              Book A Room <BedIcon className="ml-2" />
            </Button>

          </div>
          {/* <img src="./Hotel Booking-rafiki.svg" alt="" className="w-[30%] " /> */}
        </div>

      </div>

      {/* <Time/> */}


      <SectionBImg />
      <ImageSlickSlider />












    </>
  );
}
