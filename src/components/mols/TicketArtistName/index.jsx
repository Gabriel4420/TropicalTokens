import React from "react";

import {
	Background,
	Container,
	TrendAvatarArea,
	UsernameTittleArea,
} from "./styles";
import { UserAvatar } from "../../atoms/UserAvatar";

const TicketArtistName = () => {
	return (
		<Background>
			<Container>
				<TrendAvatarArea>
					<UserAvatar src="/images/leo.png" />
				</TrendAvatarArea>
				<UsernameTittleArea>
					<h3>@leo</h3>
				</UsernameTittleArea>
			</Container>
		</Background>
	);
};

export default TicketArtistName;
