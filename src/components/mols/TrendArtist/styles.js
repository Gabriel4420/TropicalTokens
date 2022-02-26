import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export const TrendNft = styled.img`
	width: 180px;
	height: 165px;
`;
export const TrendNftArea = styled.div`
	width: 15%;
	padding: 10px;
`;
export const TrendArtistContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	.TitleArt {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
	}
`;
export const TicketArtistArea = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	padding: 10px;
	align-items: flex-start;
	justify-content: flex-start; 
`;
