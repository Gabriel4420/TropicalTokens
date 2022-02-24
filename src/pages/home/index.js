import React from "react";

/* Custom style*/
import "@fontsource/playfair-display";
import Navbar from "../../components/mols/navbar/";
import Footer from '../../components/template/footer'

import { Header, Img } from "./styles.js";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header>
				<Img src="/images/art.png" />
			</Header>
			<Footer/>
		</div>
	);
};

export default Home;
