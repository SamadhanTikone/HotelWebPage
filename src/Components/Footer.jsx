import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="flex md:flex-row  flex-wrap justify-around pt-12 md:pb-0 pb-6 bg-[#1A1A1D]">
        <div className="md:w-[50%] w-full mb-12 md:md-0 p-3">
            <h1 className="text-3xl font-semibold mb-4">Hotel The Kings Landing</h1>
            <p>Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa inventore nesciunt magni dolor id quia laudantium nisi expedita! Possimus exercitationem commodi autem optio cum natus odio sit architecto ex. Magni. sit amet consectetur adipisicing elit. Quod, enim. Vitae fugit id ex deleniti!</p>
        </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold underline">Explore</p>
        <Link className="">Locator</Link>
        <Link>FAQs</Link>
        <Link>Login</Link>
        <Link>Contact</Link>

      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold underline">Legal</p>
        <Link className="">Refund Policy</Link>
        <Link>Terms & Condition</Link>
        <Link>Privacy Policy</Link>
        

      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold underline">Follow Us</p>
        <Link className="">FaceBook</Link>
        <Link>Instagram</Link>
        <Link>LinkedIn</Link>
        <Link>YouTube</Link>
        

      </div>
    </div>
  )
}
