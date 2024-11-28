
import Room from "./Room"
import "./style.css"
import Button from '@mui/material/Button';

export default function BookARoom() {
  return (
    <div className="bg-[#384049] m-6 rounded-lg text-white">
      
      <div className=" relative  flex text-white justify-around rounded-lg">

        {/* <h1 className="z-10 absolute">Hello ji</h1> */}
        <Room url={"https://images.pexels.com/photos/14021932/pexels-photo-14021932.jpeg"} />
        <div className="text-left mt-12 ml-12 ">


          <h1 className="text-4xl font-semibold font-times py-4 ">Luxury Super Delux  </h1>
          <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

          <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$199<span className="text-lg text-white">/ NIGHT</span></span></p>

          <div className="flex  gap-2 my-4 ">

            <div className="flex gap-2 w-[20%]  flex-col">


              <p className="uppercase text-lg font-semibold ">Status</p>
              <p className="uppercase text-lg font-semibold">Payment</p>
              <p className="uppercase text-lg font-semibold">Guest</p>
              <p className="uppercase text-lg font-semibold">Beds</p>

            </div>

            <div className="flex flex-col gap-2 ">

              <p className="text-lg font-normal ">Available</p>
              <p className="text-lg font-normal ">30% Advanced</p>
              <p className=" text-lg font-normal ">3</p>
              <p className="text-lg font-normal ">2</p>

            </div>
          </div>
          <Button variant="contained" sx={{padding:"6px 25px", bgcolor:"#FFAD60", margin:"0px 12px"}} >Book Now</Button>

          <Button variant="text" sx={{padding:"6px 25px", textDecoration:"underline", margin:"0px 12px"}}>More Details</Button>

        </div>


      </div>
      <div className=" relative  flex text-white justify-around flex-row-reverse  rounded-lg">

        {/* <h1 className="z-10 absolute">Hello ji</h1> */}
        <Room url={"https://images.pexels.com/photos/6876822/pexels-photo-6876822.jpeg"} />
        <div className="text-left mt-12 ml-12 ">


          <h1 className="text-4xl font-semibold font-times py-4 ">Simple Family Room </h1>
          <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

          <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$299 <span className="text-lg text-white">/ NIGHT</span></span></p>

          <div className="flex  gap-2 my-4 ">

            <div className="flex gap-2 w-[20%]  flex-col">


              <p className="uppercase text-lg font-semibold ">Status</p>
              <p className="uppercase text-lg font-semibold">Payment</p>
              <p className="uppercase text-lg font-semibold">Guest</p>
              <p className="uppercase text-lg font-semibold">Beds</p>

            </div>

            <div className="flex flex-col gap-2 ">

              <p className="text-lg font-normal ">Available</p>
              <p className="text-lg font-normal ">30% Advanced</p>
              <p className=" text-lg font-normal ">3</p>
              <p className="text-lg font-normal ">2</p>

            </div>
          </div>
          <Button variant="contained" sx={{padding:"6px 25px", bgcolor:"#FFAD60", margin:"0px 12px"}} >Book Now</Button>

          <Button variant="text" sx={{padding:"6px 25px", textDecoration:"underline", margin:"0px 12px"}}>More Details</Button>

        </div>


      </div>
      <div className=" relative  flex text-white justify-around  rounded-lg">

        {/* <h1 className="z-10 absolute">Hello ji</h1> */}
        <Room url={"https://images.pexels.com/photos/20666872/pexels-photo-20666872/free-photo-of-beds-in-a-hotel-room.jpeg"} />
        <div className="text-left mt-12 ml-12">


          <h1 className="text-4xl font-semibold font-times py-4 ">Luxury Family Delux  </h1>
          <p className="text-[16px] py-4 w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

          <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$399 <span className="text-lg text-white">/ NIGHT</span></span></p>

          <div className="flex  gap-2 my-4 ">

            <div className="flex gap-2 w-[20%]  flex-col">


              <p className="uppercase text-lg font-semibold ">Status</p>
              <p className="uppercase text-lg font-semibold">Payment</p>
              <p className="uppercase text-lg font-semibold">Guest</p>
              <p className="uppercase text-lg font-semibold">Beds</p>

            </div>

            <div className="flex flex-col gap-2 ">

              <p className="text-lg font-normal ">Available</p>
              <p className="text-lg font-normal ">30% Advanced</p>
              <p className=" text-lg font-normal ">3</p>
              <p className="text-lg font-normal ">2</p>

            </div>
          </div>
          <Button variant="contained" sx={{padding:"6px 25px", bgcolor:"#FFAD60", margin:"0px 12px"}} >Book Now</Button>

          <Button variant="text" sx={{padding:"6px 25px", textDecoration:"underline", margin:"0px 12px"}}>More Details</Button>

        </div>


      </div>
      <div className=" relative  flex text-white justify-around  flex-row-reverse rounded-lg">

        {/* <h1 className="z-10 absolute">Hello ji</h1> */}
        <Room url={"https://images.pexels.com/photos/15456203/pexels-photo-15456203/free-photo-of-double-bed-in-cozy-bedroom.jpeg"} />
        <div className="text-left mt-12 ml-12">


          <h1 className="text-4xl font-semibold font-times py-4 ">Single Super Delux  </h1>
          <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

          <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$499 <span className="text-lg text-white">/ NIGHT</span></span></p>

          <div className="flex  gap-2 my-4 ">

            <div className="flex gap-2 w-[20%]  flex-col">


              <p className="uppercase text-lg font-semibold ">Status</p>
              <p className="uppercase text-lg font-semibold">Payment</p>
              <p className="uppercase text-lg font-semibold">Guest</p>
              <p className="uppercase text-lg font-semibold">Beds</p>

            </div>

            <div className="flex flex-col gap-2 ">

              <p className="text-lg font-normal ">Available</p>
              <p className="text-lg font-normal ">30% Advanced</p>
              <p className=" text-lg font-normal ">3</p>
              <p className="text-lg font-normal ">2</p>

            </div>
          </div>
          <Button variant="contained" sx={{padding:"6px 25px", bgcolor:"#FFAD60", margin:"0px 12px"}} >Book Now</Button>

          <Button variant="text" sx={{padding:"6px 25px", textDecoration:"underline", margin:"0px 12px"}}>More Details</Button>

        </div>


      </div>
      <div className=" relative  flex text-white justify-around   rounded-lg">

        {/* <h1 className="z-10 absolute">Hello ji</h1> */}
        <Room url={"https://images.pexels.com/photos/18470959/pexels-photo-18470959/free-photo-of-two-beds-in-a-hotel-bedroom.jpeg"} />
        <div className="text-left mt-12 ml-12">


          <h1 className="text-4xl font-semibold font-times py-4 ">Couple Super Delux  </h1>
          <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

          <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$599 <span className="text-lg text-white">/ NIGHT</span></span></p>

          <div className="flex  gap-2 my-4 ">

            <div className="flex gap-2 w-[20%]  flex-col">


              <p className="uppercase text-lg font-semibold ">Status</p>
              <p className="uppercase text-lg font-semibold">Payment</p>
              <p className="uppercase text-lg font-semibold">Guest</p>
              <p className="uppercase text-lg font-semibold">Beds</p>

            </div>

            <div className="flex flex-col gap-2 ">

              <p className="text-lg font-normal ">Not Available</p>
              <p className="text-lg font-normal ">30% Advanced</p>
              <p className=" text-lg font-normal ">2</p>
              <p className="text-lg font-normal ">0</p>

            </div>
          </div>
          <Button variant="contained" sx={{padding:"6px 25px", bgcolor:"#FFAD60", margin:"0px 12px"}} >Book Now</Button>

          <Button variant="text" sx={{padding:"6px 25px", textDecoration:"underline", margin:"0px 12px"}}>More Details</Button>

        </div>


      </div>
      <div className=" relative  flex text-white justify-around flex-row-reverse  rounded-lg">

        {/* <h1 className="z-10 absolute">Hello ji</h1> */}
        <Room url={"https://images.pexels.com/photos/29000012/pexels-photo-29000012/free-photo-of-modern-hotel-room-with-twin-beds-and-elegant-decor.jpeg"} />
        <div className="text-left mt-12 ml-12">


          <h1 className="text-4xl font-semibold font-times py-4 ">Double Bed Super Delux  </h1>
          <p className="text-[16px]  w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut voluptatibus et adipisci soluta aliquid nesciunt natus itaque accusantium cumque?</p>

          <p className=" text-lg">starts from <span className="text-2xl font-semibold text-[#FFAD60]">$699 <span className="text-lg text-white">/ NIGHT</span></span></p>

          <div className="flex  gap-2 my-4 ">

            <div className="flex gap-2 w-[20%]  flex-col">


              <p className="uppercase text-lg font-semibold ">Status</p>
              <p className="uppercase text-lg font-semibold">Payment</p>
              <p className="uppercase text-lg font-semibold">Guest</p>
              <p className="uppercase text-lg font-semibold">Beds</p>

            </div>

            <div className="flex flex-col gap-2 ">

              <p className="text-lg font-normal ">Available</p>
              <p className="text-lg font-normal ">10% Advanced</p>
              <p className=" text-lg font-normal ">2</p>
              <p className="text-lg font-normal ">1</p>

            </div>
          </div>
          <Button variant="contained" sx={{padding:"6px 25px", bgcolor:"#FFAD60", margin:"0px 12px"}} >Book Now</Button>

          <Button variant="text" sx={{padding:"6px 25px", textDecoration:"underline", margin:"0px 12px"}}>More Details</Button>

        </div>


      </div>
     
    </div>
  )
}
