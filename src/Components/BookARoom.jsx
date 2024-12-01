
import Room from "./Room"
import "./style.css"
import Button from '@mui/material/Button';

export default function BookARoom() {
  return (
    <>
      <div className="bg-[#384049] m-6 rounded-lg text-white">

        <div className=" relative  flex lg:flex-row flex-col text-white lg:justify-around justify-evenly items-center  rounded-lg">

          {/* <h1 className="z-10 absolute">Hello ji</h1> */}
          <Room url={"https://images.pexels.com/photos/14021932/pexels-photo-14021932.jpeg"} />
          <div className="text-left lg:mt-12 mb-12 ml-12 md:ml-48  ">


            <h1 className=" md:text-4xl text-3xl  font-semibold font-times py-4 ">Luxury Super Delux  </h1>
            <p className="md:text-[16px] text-[12px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

            <p className=" md:text-lg">starts from <span className="md:text-2xl  text-lg font-semibold text-[#FFAD60]">$199<span className="md:text-lg text-sm text-white">/ NIGHT</span></span></p>

            <div className="flex  md:gap-2 gap-8 my-4 ">

              <div className="flex gap-2 w-[20%] md:w-[40%]  flex-col">


                <p className="uppercase md:text-lg text-sm font-semibold ">Status</p>
                <p className="uppercase md:text-lg text-sm font-semibold">Payment</p>
                <p className="uppercase md:text-lg text-sm font-semibold">Guest</p>
                <p className="uppercase md:text-lg text-sm font-semibold">Beds</p>

              </div>

              <div className="flex flex-col gap-2 ">

                <p className="md:text-lg text-sm font-normal ">Available</p>
                <p className="md:text-lg text-sm font-normal ">30% Advanced</p>
                <p className="md:text-lg text-sm font-normal ">3</p>
                <p className="md:text-lg text-sm font-normal ">2</p>

              </div>
            </div >
            <div className="flex md:justify-between items-center md:w-[60%]">


              <Button variant="contained" sx={{ padding: "6px 25px", bgcolor: "#FFAD60" }} >Book Now</Button>

              <Button variant="text" sx={{ padding: "6px 25px", textDecoration: "underline" }}>More Details</Button>
            </div>

          </div>


        </div>
        <div className=" relative  flex text-white justify-around lg:flex-row-reverse flex-col  rounded-lg">

          {/* <h1 className="z-10 absolute">Hello ji</h1> */}
          <Room url={"https://images.pexels.com/photos/6876822/pexels-photo-6876822.jpeg"} />
          <div className="text-left md:mt-12 mb-12 ml-12 md:ml-48   ">


            <h1 className=" md:text-4xl text-3xl  font-semibold font-times py-4 ">Simple Family Room </h1>
            <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

            <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$299 <span className="text-lg text-white">/ NIGHT</span></span></p>

            <div className="flex md:gap-2 gap-8 my-4 ">

              <div className="flex gap-2 w-[20%]  flex-col">


                <p className="uppercase  md:text-lg text-sm  font-semibold ">Status</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Payment</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Guest</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Beds</p>

              </div>

              <div className="flex flex-col gap-2 ">

                <p className="md:text-lg text-sm font-normal ">Available</p>
                <p className="md:text-lg text-sm font-normal ">30% Advanced</p>
                <p className=" md:text-lg text-sm  font-normal ">3</p>
                <p className="md:text-lg text-sm font-normal ">2</p>

              </div>
            </div>
            <div className="flex md:justify-between items-center md:w-[60%]">


              <Button variant="contained" sx={{ padding: "6px 25px", bgcolor: "#FFAD60" }} >Book Now</Button>

              <Button variant="text" sx={{ padding: "6px 25px", textDecoration: "underline" }}>More Details</Button>
            </div>
          </div>


        </div>
        <div className=" relative  flex  lg:flex-row flex-col text-white justify-around  rounded-lg">

          {/* <h1 className="z-10 absolute">Hello ji</h1> */}
          <Room url={"https://images.pexels.com/photos/20666872/pexels-photo-20666872/free-photo-of-beds-in-a-hotel-room.jpeg"} />
          <div className="text-left md:mt-12 mb-12 ml-12 md:ml-48 ">


            <h1 className=" md:text-4xl text-3xl font-semibold font-times py-4 ">Luxury Family Delux  </h1>
            <p className="text-[16px] py-4 w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

            <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$399 <span className="text-lg text-white">/ NIGHT</span></span></p>

            <div className="flex  md:gap-2 gap-8 my-4 ">

              <div className="flex gap-2 w-[20%]  flex-col">


                <p className="uppercase  md:text-lg text-sm  font-semibold ">Status</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Payment</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Guest</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Beds</p>

              </div>

              <div className="flex flex-col gap-2 ">

                <p className="md:text-lg text-sm  font-normal ">Available</p>
                <p className="md:text-lg text-sm  font-normal ">30% Advanced</p>
                <p className="md:text-lg text-sm  font-normal ">3</p>
                <p className="text-lg font-normal ">2</p>

              </div>
            </div>
            <div className="flex md:justify-between items-center md:w-[60%]">


              <Button variant="contained" sx={{ padding: "6px 25px", bgcolor: "#FFAD60" }} >Book Now</Button>

              <Button variant="text" sx={{ padding: "6px 25px", textDecoration: "underline" }}>More Details</Button>
            </div>
          </div>


        </div>
        <div className=" relative  flex text-white justify-around  lg:flex-row-reverse flex-col rounded-lg">

          {/* <h1 className="z-10 absolute">Hello ji</h1> */}
          <Room url={"https://images.pexels.com/photos/15456203/pexels-photo-15456203/free-photo-of-double-bed-in-cozy-bedroom.jpeg"} />
          <div className="text-left md:mt-12 mb-12 ml-12 md:ml-48 ">


            <h1 className=" md:text-4xl text-3xl font-semibold font-times py-4 ">Single Super Delux  </h1>
            <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

            <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$499 <span className="text-lg text-white">/ NIGHT</span></span></p>

            <div className="flex  md:gap-2 gap-8 my-4 ">

              <div className="flex gap-2 w-[20%]  flex-col">


                <p className="uppercase  md:text-lg text-sm  font-semibold ">Status</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Payment</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Guest</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Beds</p>

              </div>

              <div className="flex flex-col gap-2 ">

                <p className="md:text-lg text-sm  font-normal ">Available</p>
                <p className="md:text-lg text-sm  font-normal ">30% Advanced</p>
                <p className="  md:text-lg text-sm  font-normal ">3</p>
                <p className="md:text-lg text-sm  font-normal ">2</p>

              </div>
            </div>
            <div className="flex md:justify-between items-center md:w-[60%]">


              <Button variant="contained" sx={{ padding: "6px 25px", bgcolor: "#FFAD60" }} >Book Now</Button>

              <Button variant="text" sx={{ padding: "6px 25px", textDecoration: "underline" }}>More Details</Button>
            </div>
          </div>


        </div>
        <div className=" relative  flex lg:flex-row flex-col text-white justify-around   rounded-lg">

          {/* <h1 className="z-10 absolute">Hello ji</h1> */}
          <Room url={"https://images.pexels.com/photos/18470959/pexels-photo-18470959/free-photo-of-two-beds-in-a-hotel-bedroom.jpeg"} />
          <div className="text-left md:mt-12 mb-12 ml-12 md:ml-48 ">


            <h1 className=" md:text-4xl text-3xl font-semibold font-times py-4 ">Couple Super Delux  </h1>
            <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

            <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$599 <span className="text-lg text-white">/ NIGHT</span></span></p>

            <div className="flex md:gap-2 gap-8 my-4 ">

              <div className="flex gap-2 w-[20%]  flex-col">


                <p className="uppercase  md:text-lg text-sm  font-semibold ">Status</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Payment</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Guest</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Beds</p>

              </div>

              <div className="flex flex-col gap-2 ">

                <p className="md:text-lg text-sm  font-normal ">Not Available</p>
                <p className="md:text-lg text-sm  font-normal ">30% Advanced</p>
                <p className="  md:text-lg text-sm  font-normal ">2</p>
                <p className="md:text-lg text-sm  font-normal ">0</p>

              </div>
            </div>
            <div className="flex md:justify-between items-center md:w-[60%]">


              <Button variant="contained" sx={{ padding: "6px 25px", bgcolor: "#FFAD60" }} >Book Now</Button>

              <Button variant="text" sx={{ padding: "6px 25px", textDecoration: "underline" }}>More Details</Button>
            </div>
          </div>


        </div>
        <div className=" relative  flex text-white justify-around lg:flex-row-reverse flex-col  rounded-lg">

          {/* <h1 className="z-10 absolute">Hello ji</h1> */}
          <Room url={"https://images.pexels.com/photos/29000012/pexels-photo-29000012/free-photo-of-modern-hotel-room-with-twin-beds-and-elegant-decor.jpeg"} />
          <div className="text-left lg:mt-12 mb-12 ml-12 md:ml-48  ">


            <h1 className=" md:text-4xl text-3xl font-semibold font-times py-4 ">Double Bed Super Delux  </h1>
            <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

            <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$699 <span className="text-lg text-white">/ NIGHT</span></span></p>

            <div className="flex  md:gap-2 gap-8 my-4 ">

              <div className="flex gap-2 w-[20%]  flex-col">


                <p className="uppercase  md:text-lg text-sm  font-semibold ">Status</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Payment</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Guest</p>
                <p className="uppercase  md:text-lg text-sm  font-semibold">Beds</p>

              </div>

              <div className="flex flex-col gap-2 ">

                <p className="md:text-lg text-sm  font-normal ">Available</p>
                <p className="md:text-lg text-sm  font-normal ">10% Advanced</p>
                <p className="  md:text-lg text-sm  font-normal ">2</p>
                <p className="md:text-lg text-sm  font-normal ">1</p>

              </div>
            </div>
            <div className="flex md:justify-between items-center md:w-[60%]">


              <Button variant="contained" sx={{ padding: "6px 25px", bgcolor: "#FFAD60" }} >Book Now</Button>

              <Button variant="text" sx={{ padding: "6px 25px", textDecoration: "underline" }}>More Details</Button>
            </div>
          </div>


        </div>

        <p className="flex justify-center items-center p-4 md:my-8 ">      <Button variant="text" sx={{ padding: "6px 25px", border: "1px solid #FFAD60", color: "white" }}>Load More</Button>
        </p>

      </div>



    </>

  )
}
