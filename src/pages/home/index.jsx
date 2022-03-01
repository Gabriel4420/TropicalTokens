import React from "react";

/* Custom style*/
import "@fontsource/playfair-display";
import Navbar from "../../components/mols/NavBar";
import Footer from "../../components/template/footer";
import TrendArtist from "../../components/mols/TrendArtist";
import TicketArtistName from "../../components/mols/TicketArtistName";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "reactstrap";
import { TropicalTokenArea } from "./styles";

const Home = () => {
	return (
		<>
			<Navbar />
			<TrendArtist />
			<TropicalTokenArea>
				<Row xs="2">
					<Col>
						<img src="/images/logo_nav.svg" alt="Logo" style={{ width: 300 }} />
					</Col>
					<Col>
						<h2>What is a tropical token?</h2>
						<p>
							Tropical Tokens is the backbone of content development between
							creators, digitality, and supporters of all kinds.
							Digital-tropicality is multiplicity, synergy and abundance. It’s
							feasibility.
						</p>
						<h4>know more</h4>
					</Col>
				</Row>
			</TropicalTokenArea>
			<Footer />
		</>
	);
};

export default Home;
