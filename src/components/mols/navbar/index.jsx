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
	IconAreas,
} from "./styles.js";

const Navbar = () => {
	const menu = [
		{ titulo: "Home", to: "/" },
		{ titulo: "Gallery", to: "/gallery" },
		{ titulo: "Users", to: "/users" },
		{ titulo: "About", to: "/about" },
	];
	return (
		<div style={{padding:20}}>
			<Nav>
				<div className="NavLogoArea">
					<NavLogo src="/images/logo_tropical.png" />
				</div>
				<Bars />
				<NavMenu>
					{menu.map((item, index) => (
						<NavLink key={index} to={item.to}>
							{item.titulo}
						</NavLink>
					))}
				</NavMenu>
				<IconAreas>
					<NavLink to="/">
						<Lupa />
					</NavLink>
					<NavLink to="/">
						<Person />
					</NavLink>
				</IconAreas>
			</Nav>
		</div>
	);
};

export default Navbar;
