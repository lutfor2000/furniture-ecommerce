import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// ---------Icon import-----------
import { MdShoppingBag } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

const navItems = [
    {path: "/", label: "Furniture"},
    {path: "/shop", label: "Shop"},
    {path: "/contact", label: "Contact"},
    {path: "/about", label: "About"},
]

const NavMenu = ({toggLeMenu}) =>{
    return(
        <ul className="flex flex-col lg:flex-row md:flex-row items-center md:space-x-6 gap-8">
            {
              navItems.map((item,index)=>(


              <li key={index} onClick={toggLeMenu}>

                <NavLink to={item.path}

                className={({isActive}) =>

                isActive? "text-primary font-bold" : "hover:text-primary"

                }
                >

                {item.label}

                </NavLink>

              </li>


              ))
            }
        </ul>
    )
}



const Navbar = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled,setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
    }

    //---when scrolled apply bg color to navbar---
    useEffect(()=>{

        const handleScroll = () =>{
            if(window.scrollY > 50){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.addEventListener('scroll',handleScroll);
        }

    },[])


    return(
       <div>

          <header className={`${isScrolled ? "bg-white shadow-md" : " bg-transparent text-white"} fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out`}>
                <nav className="container max-w-screen-2xl mx-auto flex justify-between items-center py-6 px-4">
                    {/* ----Logo----- */}
                    <Link className="font-bold" to="/">Logo</Link>

                    {/* -------Mobile Menu icon----------- */}
                    <div onClick={toggleMenu} className=" md:hidden text-xl cursor-pointer hover:text-primary">
                       
                       {
                         isMenuOpen ? null :  <FiMenu />
                       }
                       
                    </div>


                    {/* ------Desktop Menu Items----- */}
                    <div className="hidden md:flex">
                        <NavMenu />
                    </div>

                    {/* ------Mobile Menu Items----- */}
                    <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                        <div className="cursor-pointer absolute top-6 right-4 hover:text-primary" onClick={toggleMenu}>
                        <FaTimes />
                        </div>
                        <NavMenu toggLeMenu={toggleMenu}/>
                    </div>


                    {/* -----Card Items-------------- */}
                    <div className="hidden md:block cursor-pointer relative">
                        <MdShoppingBag className="text-2xl" />
                        <sup className="absolute top-0 -right-1 bg-primary text-white h-4 w-4 rounded-full flex items-center justify-center text-xs">
                            0
                        </sup>
                    </div>

                </nav>
          </header>

       </div>
    )
}

export default Navbar;