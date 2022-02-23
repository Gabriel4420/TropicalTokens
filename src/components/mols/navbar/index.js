<<<<<<< Updated upstream
=======
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
	IconAreas
} from "../navbar/styles.js";

const Navbar = () => {
	return (
		<div>
			<Nav>
				<div style = {{width: "100%", padding: 5}}>
				<NavLogo src="/images/logo_nav.svg" />
				</div>
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
				</NavMenu>
				<IconAreas>
				<NavLink to="/" activeStyle={{ color: "black" }}>
						<Lupa />
					</NavLink>
					<NavLink to="/" activeStyle={{ color: "black" }}>
						<Person />
				</NavLink>
				</IconAreas>
			</Nav>
		</div>
	);
};

export default Navbar;
>>>>>>> Stashed changes
