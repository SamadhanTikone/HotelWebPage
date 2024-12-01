import { useState } from "react";
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


export default function Contact() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);



  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true)

    setTimeout(()=>{
      setSubmit(true);

      toast.success(`${name} Your From is Successfully Submitted!`)
    },1000)
    
  
     

      

    
  }
  return (
    <div className="bg-[#384049] md:p-12 p-2 m-2">
      <div className=" border-2   border-[#8456f7]">
      { <Toaster/>}
        {submit ? (
           <div className="py-3 my-2">
            <h1 className="text-3xl text-center font-semibold my-2">
              ☑️ {name}, Thanks for Submitting for Form.
            </h1>
            <p className="text-center text-lg">We Well contact you Later.</p>
           
          </div> 
         
         ) : ( 
          <form
            action=""
            className=" flex justify-center md:p-4 items-center p-2 flex-col  "
            onSubmit={handleSubmit}
          >
            {/* {submit &&  } */}
            <h1 className="text-center text-3xl uppercase font-semibold my-6">
              Get in Touch
            </h1>

            <div className="flex md:w-1/2 w-full gap-4 flex-col md:flex-row">
              <div className="md:w-1/2">
                <label htmlFor="fname" className="text-lg">
                  FName*
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="eg. Jhon"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className=" py-2 px-4 text-md rounded-lg w-full text-black"
                />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="lname" className="text-lg">
                  LName*
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder="eg. Wick"
                  required
                  className=" py-2 px-4 text-md rounded-lg w-full text-black"
                />
              </div>
            </div>

            <div className="flex md:w-1/2 gap-4  w-full  flex-col md:flex-row">
              <div className="md:w-1/2 ">
                <label htmlFor="email" className="text-lg">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="eg.jhonwick@gmail.com"
                  required
                  className="py-2 px-4 text-md rounded-lg w-full text-black"
                />
              </div>
              <div className="md:w-1/2 inline">
                <label htmlFor="mobile" className="text-lg">
                  Mobile*
                </label>
                <input
                  type="number"
                  id="mobile"
                  placeholder="eg.9389282989"
                  required
                  className=" py-2 px-4 text-md rounded-lg w-full text-black"
                />
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <label htmlFor="about" className="text-lg">
                About
              </label>
              <textarea
                type="text"
                id="about"
                cols={8}
                rows={6}
                placeholder="eg. I am a Jhon Wick "
                className=" text-lg py-2 p-4 rounded-lg w-full text-black"
              />
            </div>
            <button className="py-2 px-8 my-8 bg-[#8456f7] rounded-lg text-md active:scale-95 transition-all duration-300 ">
              {submitting ? "Submitting" : "Submit"}
            </button>
          </form>
         )} 
      </div>
    </div>
  );
}
