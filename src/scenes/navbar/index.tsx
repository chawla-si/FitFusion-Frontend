import React from 'react'
import {useState} from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"


type Props = {}

const Navbar = (props: Props) => {
    const flexBetween= "flex items-center justify-between";

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-20 w-full py-6`}> 
        {/* keep nav bar at top occupy full width and padding of 6 */}
            <div className={`${flexBetween} mx-auto w-5/6 `}>
                {/* keep inner in center and occupy 5/6th of the width */}

                {/* LEFT SIDE  space between each item is 16*/}
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt='logo' src ={Logo}></img>
                </div>

                {/* RIGHT SIDE- all items to the right of logo*/}
                <div className={`${flexBetween} w-full`}>
                    {/* inner left div */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>Benefits</p>
                        <p>Our Classes</p>
                        <p>Contact Us</p>
                    </div>

                    {/* inner right div */}
                    <div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <button>Join US</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar