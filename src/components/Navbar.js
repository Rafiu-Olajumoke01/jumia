import React from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <div className="container_fluid">
                <div className="parent">
                    <div className="jumialogo d-flex align-items-center justify-content-between">
                        <GiHamburgerMenu className='hamburger' />
                        <img src={require("./../images/Jumia-Logo3-removebg-preview.png")} alt="" />
                    </div>

                    <div className="search position-relative">
                        <IoMdSearch size={20} className='search_icon position-absolute top-5 ms-1' />
                        <input type="text" placeholder='Search Products, brands and categories' />
                        <button>SEARCH</button>
                    </div>

                    <div className="cart">
                        <div className="account">
                            <CiUser size={30} />
                            <span>Account</span>
                            <IoMdArrowDropdown className='dropdown' />
                        </div>

                        <div className="help ">
                            <IoMdHelpCircleOutline size={30} />
                            <span>Help</span>
                            <IoMdArrowDropdown />
                        </div>

                        <div className="addToCart">
                            <IoMdCart size={30} />
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar