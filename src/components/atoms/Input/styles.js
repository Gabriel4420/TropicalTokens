import styled from "styled-components";

export const ContainerInput = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const InputBar = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: #70cc98;
	background: #f5f5f5;
	border: none;
	border-radius: ${(props) => {
		switch (props.mode) {
			case "hard-radius":
				return "50px";
				break;
			case "light-radius":
				return "20px";
				break;
		}
	}};
	width: 100%;
	box-shadow: 5px 5px 5px grey;
	padding-left: 50px;
`;
