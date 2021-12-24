import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Members() {
    return (
        <div className="Login">
            <div className="NavBar" style={{paddingRight:'1%'}}>
                <Nav className="mr-auto" navbar>
                    <NavItem href="#">
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://drive.google.com/drive/folders/1XrsKHpn6ZAvcMNw_emydaJXSK_Z9nUzH?usp=sharing">Club Documents</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Newsletters</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Fly Tying</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Fly Casting</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Ebor Hut Bookings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Deepwater Bookings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Gallery</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Handy Hints</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Trip Reports</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Recipes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Sell/Swap/Want to Buy</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Videos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Technology</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Admin Documents</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    )
}