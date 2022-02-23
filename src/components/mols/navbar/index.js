import React from "react";
import "@fontsource/playfair-display";
import {
	Nav,
	NavLogo,
	NavLink,
	Bars,
	NavMenu,
	Lupa,
	Person,
} from "../navbar/styles.js";

const Navbar = () => {
	return (
		<div>
			<Nav>
				<NavLogo src="/images/logo_nav.svg"></NavLogo>
				<Bars />
				<NavMenu>
					<NavLink to="/" activeStyle={{ color: "black" }}>
						Home
					</NavLink>
					<NavLink to="/" activeStyle={{ color: "black" }}>
						Gallery
					</NavLink>
					<NavLink to="/" activeStyle={{ color: "black" }}>
						Users
					</NavLink>
					<NavLink to="/" activeStyle={{ color: "black" }}>
						About
					</NavLink>
					<NavLink to="/" activeStyle={{ color: "black" }}>
						<Lupa />
					</NavLink>
					<NavLink to="/" activeStyle={{ color: "black" }}>
						<Person />
					</NavLink>
				</NavMenu>
			</Nav>
		</div>
	);
};

export default Navbar;
