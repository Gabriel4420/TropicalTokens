import React from "react";

import {
	Background,
	Container,
	TrendAvatarArea,
	UsernameTittleArea,
} from "./styles";
import { UserAvatar } from "../../atoms/UserAvatar";

const TicketArtistName = (
	{
		titleArtist,
		createBy
	}
) => {
	return (
		<Background createBy = {createBy}>
			<h3>{createBy}</h3>
			<Container>
				<TrendAvatarArea>
					<UserAvatar src="/images/leo.png" />
				</TrendAvatarArea>
				<UsernameTittleArea titleArtist = {titleArtist}>
					<h3>{titleArtist}</h3>
				</UsernameTittleArea>
			</Container>
		</Background>
	);
};

export default TicketArtistName;
