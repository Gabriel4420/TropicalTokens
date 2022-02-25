import React from "react";

/* Custom style*/
import "@fontsource/playfair-display";
import { Header, TrendNft, TrendNftArea } from "./styles.js";
import TicketArtistName from "../TicketArtistName/index.jsx";

const TrendArtist = () => {
	return (
		<Header>
			<TrendNftArea>
				<TrendNft src="/images/art.png" />
			</TrendNftArea>
			<TicketArtistName />
		</Header>
	);
};

export default TrendArtist;
