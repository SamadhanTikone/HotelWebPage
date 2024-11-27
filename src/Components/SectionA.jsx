import { useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./style.css"

export default function SectionA() {

    const images = [
        "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/01/15/17/32/table-3084384_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/01/16/15/24/work-4770924_1280.jpg",
        "https://cdn.pixabay.com/photo/2021/12/09/22/17/table-setting-6859274_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/01/09/22/24/guy-playing-billiard-1967834_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/04/03/10/42/woman-2197947_1280.jpg",
      ];

    const [imageIndex, setImageIndex] = useState(0);

  function handlePrev() {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }
  function handleNext() {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }
  return (
    <div>
       <div className="w-full  flex   justify-center items-center relative ">
        <button className="  text-center left-0  top-[45%] absolute md:p-4 rounded-lg" onClick={handlePrev}> <ArrowBackIosIcon sx={{ fontSize: "28px" , color:"black" }} /> </button>

        <div className=" slider-image flex-row flex justify-center transition-all duration-500 relative group">

          <img src={images[imageIndex]} alt="slider" className="slider-image " />


          <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-300 w-full  flex justify-center absolute h-full items-center bg-black bg-opacity-50">
            <Button variant="contained" className="z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Know More <ChevronRightIcon />
            </Button>
          </div>
        </div>



        <button className=" text-center top-[45%] right-0 absolute md:p-4 rounded-lg" onClick={handleNext}> <ArrowForwardIosIcon sx={{ fontSize: "28px", color:"black" }} /> </button>



      </div>
    </div>
  )
}
