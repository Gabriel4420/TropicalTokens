import styled from "styled-components";

export const Page = styled.div`
	background-image: linear-gradient(
			rgba(0, 0, 0, 0.548),
			rgba(31, 30, 30, 0.403)
		),
		url("https://cdna.artstation.com/p/assets/images/images/040/241/642/large/anna-dawson-img-2181.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 800px;
	height: 600px;
	z-index: 1;
	border-radius: 25px;
	overflow: hidden;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
	background-image: url("https://cdna.artstation.com/p/assets/images/images/040/241/642/large/anna-dawson-img-2181.jpg");
	text-align: center;
	padding-top: 118px;
	color: #cdd4de;
	height: 100vh;

	h1 {
		color: #f3dbb1;
		font-weight: 900;
		font-size: 165px;
		line-height: 1;
		margin-bottom: -10px;
	}

	h2 {
		color: #f3dbb1;
		font-weight: 700;
		font-size: 34px;
		margin-bottom: 6px;
	}

	p {
		color: #f3dbb1;
		font-weight: 300;
		font-size: 14px;
		margin-bottom: 140px;
	}

	a {
		color: black;
		background-color: #f3dbb1;
		display: inline-block;
		font-weight: 300;
		font-size: 12px;
		text-transform: uppercase;
		border: 1px solid #f3dbb1;
		padding: 8px 14px;
		border-radius: 4px;
		cursor: pointer;
	}
`;
