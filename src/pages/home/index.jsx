import React from "react";

/* Custom style*/
import "@fontsource/playfair-display";
import Navbar from "../../components/mols/NavBar";
import Footer from '../../components/template/footer'
import TrendArtist from "../../components/mols/TrendArtist";
import TicketArtistName from "../../components/mols/TicketArtistName";

const Home = () => {
	return (
		<>
			<Navbar />
			<TrendArtist />
			<Footer />
		</>
	);
};

export default Home;
