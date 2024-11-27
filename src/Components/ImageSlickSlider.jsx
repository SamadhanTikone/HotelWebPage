import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 


function MultipleItems() {



    


  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    
    responsive: [
    {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          infinite: true,

        }
  }] 
}
  return (
    <>
    
   
    <div className=" bg-[#384049] sm:p-8 p-6 mx-2 md:mx-6 md:my-2 rounded-lg">

      <Slider {...settings} >
        <div className="relative group " >
         <img src=" https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg" className="rounded-xl p-2" alt="" />
         <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden transition-all duration-700 group-hover:block z-50 opacity-100 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>
        </div>
        <div className="relative group ">
          <img src="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg" className="rounded-xl p-2" alt="" />
          <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden  group-hover:block z-50 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>
        </div>


        <div className="relative group">
          <img src="https://cdn.pixabay.com/photo/2018/01/15/17/32/table-3084384_1280.jpg" className="rounded-xl p-2" alt="" />

           <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden  group-hover:block z-50 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>

        </div >
        <div className="relative group">
          <img src="https://cdn.pixabay.com/photo/2020/01/16/15/24/work-4770924_1280.jpg" className="rounded-xl p-2" alt="" />

           <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden  group-hover:block z-50 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>

        </div>
        <div className="relative group">
          <img src="https://cdn.pixabay.com/photo/2021/12/09/22/17/table-setting-6859274_960_720.jpg" className="rounded-xl p-2" alt="" />

           <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden  group-hover:block z-50 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>

        </div>
        <div className="relative group">
          <img src="https://cdn.pixabay.com/photo/2017/01/09/22/24/guy-playing-billiard-1967834_960_720.jpg" className="rounded-xl p-2" alt="" />

           <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden  group-hover:block z-50 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>

        </div>
        <div className="relative group">
          <img src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg" className="rounded-xl p-2" alt="" />

           <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden  group-hover:block z-50 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>

        </div>
        <div className="relative group">
         <img src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg" className="rounded-xl p-2" alt="" />

          <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden  group-hover:block z-50 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>

        </div>
        <div className="relative group">
          <img src="https://images.pexels.com/photos/14012231/pexels-photo-14012231.jpeg" className="rounded-xl p-2" alt="" />

           <p className="absolute top-0  bg-black h-[95%] sm:text-lg  sm:pt-8 p-2 sm:px-3 m-2 bg-opacity-50 rounded  hidden  group-hover:block z-50 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero? sit amet consectetur adipisicing elit. Maiores reiciendis, recusandae omnis mollitia quis illum maxime minus soluta dolores! Cupiditate!</p>

        </div>
      </Slider>
    </div>
    </>
  );
}

export default MultipleItems;
