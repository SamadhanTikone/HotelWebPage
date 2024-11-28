// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CloseIcon from "@mui/icons-material/Close";
// import { ThemeContext } from "./Context/ThemeProvider";

export default function NavBar() {
  // const [themeName, setThemeName] = useState("Dark");
  // const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  // const navigate = useNavigate()

  //   const { theme, setTheme } = useContext(ThemeContext);
  //   console.log(theme);

  // function handleTheme() {
  //     setTheme(!theme);

  //     if (themeName === "Dark") {
  //         setThemeName("Light");
  //     } else if (themeName === "Light") {
  //         setThemeName("Dark");
  //     }
  // }

  // {`${ theme ? "bg-white text-black" : "bg-[#242424] text-white"
  // }

  function handleMenu() {

    setOpen(!open);
    
  }

  function handleNav(){
    if (menu && open){
      setOpen(!open)
    }
    else{
      setMenu(!menu)
    }
  }

  function handleClick(){
    navigate("/bookRooms")
  }
  function handleHome(){
    navigate("/")
  }
  return (
    <div className="sticky top-1  z-50  ">
      <nav className="flex justify-around items-center py-6 md:mx-6 sm:m-5 mx-2 my-2 shadow-custom-dark shadow-black z-50  bg-[#384049]  rounded-2xl">
        <h1 className="text-2xl uppercase font-bold cursor-pointer md:text3-xl text-white" onClick={handleHome}>
          <RestaurantMenuIcon sx={{ fontSize:"38px"}}  /> THE{" "}
          <span className="text-[#8456f7]">KIngs </span>Garden
        </h1>
        
        <div
          className={`flex uppercase flex-col gap-6 font-semibold lg:flex-row lg:block 
             ${open
              ? "block  text-white absolute w-[40vh] h-screen top  z-30  bg-[#384049] py-7  text-centre justify-centre items-center left-0   "
              : "hidden"
          }  `}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#8456f7] mx-4 font-semibold" : ` text-white mx-4 font-semibold`
            }
            onClick={handleNav}
          
          >
            Home
          </NavLink>
          <NavLink
            to="/bookRooms"
            className={({ isActive }) =>
              isActive ? "text-[#8456f7] mx-4" : ` text-white mx-4 font-semibold`
            }
            onClick={handleNav}
            
          >
            Rooms
          </NavLink>
          <NavLink
            to="/meals"
            className={({ isActive }) =>
              isActive ? "text-[#8456f7] mx-4" : `text-white mx-4 `
            }
            onClick={handleNav}
          
          >
            Meals
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#8456f7] mx-4" : `text-white mx-4 `
            }
            onClick={handleNav}
         
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#8456f7] mx-4" : `text-white mx-4 `
            }
            onClick={handleNav}
          
          >
            Contact
          </NavLink>
          

                    
       

     
        </div>

        <div className={` hidden md:block`}>
        <Button variant="contained" onClick={handleClick} sx={{bgcolor:"#8456f7"}}>
          Book A Room <BedroomChildIcon className="ml-4" />
        </Button>
        </div>
                
                


        <div onClick={handleMenu} className="lg:hidden">
          {open ? (
            <CloseIcon sx={{ fontSize: "32px" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "32px" }} />
          )}
        </div>

        {/* <div className="w-[40vh] flex justify-between"> */}

        {/* 
                    <FormControlLabel
                        control={
                            <Switch onClick={handleTheme} defaultChecked name={themeName} />
                        }
                        className="ml-6"
                        label={themeName}
                    /> */}
        {/* </div> */}
      </nav>
    </div>
  );
}
