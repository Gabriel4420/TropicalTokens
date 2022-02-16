import React from "react";

/* Custom style*/
import "./index.css";
import "@fontsource/playfair-display";

/* icons */
import { ImGooglePlus3 } from "react-icons/im";
import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";

/* Bootstap Style */
import "bootstrap/dist/css/bootstrap.css";

/* Components */
import { Form, FormGroup, Input, Button } from "reactstrap";
import Footer from "../../components/atoms/footer/";

const Login = () => {
	return (
		<div>
			<div className="FormCentered">
				<div style={{ marginTop: 120 }}>
					<h1 className="text">Login</h1>
				</div>
				<Form style={{ marginTop: 61 }}>
					<FormGroup>
						<Input
							id="email"
							name="email"
							placeholder="Type your Email"
							type="email"
						/>
					</FormGroup>
					<FormGroup style={{ marginTop: 29 }}>
						<Input
							id="password"
							name="password"
							placeholder="Type your password"
							type="password"
						/>
					</FormGroup>
				</Form>
				<Button className="buttonEnter">Enter</Button>
				<div style={{ marginTop: 80 }}>
					<h1 className="text">Create new account</h1>
					<h1 className="text" style={{ marginTop: 50 }}>
						or
					</h1>
				</div>
				<br />
				<br />
				<IconContext.Provider value={{ size: "69.73px" }}>
					<div className="ButtonSocialCenter">
						<Button className="FacebookSocialButton">
							<BsFacebook />
							Login with Facebook
						</Button>
						<Button className="GoogleSocialButton">
							<ImGooglePlus3 />
							Login with Google
						</Button>
					</div>
				</IconContext.Provider>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
