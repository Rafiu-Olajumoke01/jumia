import React from 'react'
import image1 from "./../images/jumia arrival.jpg"
import "./Newarrival.css"

function Newarrival() {
    return (
        <div className='arrival'>
            <img src={image1} alt="" />
        </div>

// return (
//     <div>
//       <div className="container-fluid bg-white">
//         <div className="container">
//           <div className="nav_brand d-flex align-items-center">
//             <GiHamburgerMenu className='hamburger-button' onClick={toggleHamburger} />
//             <img src={require("./../images/Jumia-Logo3-removebg-preview.png")} alt="" />
//           </div>
//           {menuOpen && (
//             <ul className='menu-items'>
//               <li><Link>Home</Link></li>
//               <li><Link>About</Link></li>
//               <li><Link>Contact</Link></li>
//               <li><Link>Services</Link></li>
//             </ul>
//           )}
//           <div className="nav_search">
//             {/* <IoMdSearch size={40} /> */}
//             <input type="text" placeholder="Search products, brands and categories" className='' />
//             <button type="submit" className='ms-3'>SEARCH</button>
//           </div>

//           <div className="nav_addToCart">
//             <div className="account d-flex dropdown" onClick={handleToggle}>
//               <CiUser size={30} />
//               <span>Account</span>
//               <IoMdArrowDropdown className={dropdown ? 'rotate' : ''} />
//             </div>

//             <div className="help d-flex" onClick={handleToggle}>
//               <IoIosHelpCircleOutline size={30} />
//               <span>Help</span>
//               <IoMdArrowDropdown className='' />
//               {
//                 dropdown && (
//                   <ul className='dropdown-menu'>
//                     <li><Link>Hello</Link></li>
//                     <li><Link>Hello</Link></li>
//                     <li><Link>Hello</Link></li>
//                   </ul>
//                 )
//               }
//             </div>

//             <div className="cart">
//               <MdOutlineShoppingCart size={30} />
//               <span>Cart</span>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
    )
}

export default Newarrival

