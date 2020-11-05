import React from 'react'
import {Nav,NavLink} from './NavbarElement'
const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
            </Nav>
        </div>
    )
}

export default Navbar
