import React from "react";

/* Custom style*/
import "@fontsource/playfair-display";
import {
	Header,
	TrendNft,
	TrendNftArea,
	TrendArtistContainer,
	TicketArtistArea,
} from "./styles.js";
import TicketArtistName from "../TicketArtistName/index.jsx";

const TrendArtist = () => {
	return (
		<TrendArtistContainer>
			<div className="TitleArt">
				<h2>Arte XYZ</h2>
			</div>
			<Header>
				<TrendNftArea>
					<TrendNft src="/images/art.png" />
				</TrendNftArea>
				<TicketArtistArea>
					<TicketArtistName titleArtist="@leo" createBy="Create By" />
				</TicketArtistArea>
			</Header>
		</TrendArtistContainer>
	);
};

export default TrendArtist;
