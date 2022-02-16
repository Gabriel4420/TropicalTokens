/*react components*/
import React from "react";

/* Bootstap Style */
import "bootstrap/dist/css/bootstrap.css";

/* custom style */
import "./index.css";

/* icons */
import { BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";

/*components*/
import { Col, Row } from "reactstrap";

const Footer = () => (
	<div className="footer">
		<Row style={{width: "140%"}}>
			<Col lg="4" sm="12">
        <h2>Contact Us</h2>
        <h2>About</h2>
				<BsInstagram/>
				<GrTwitter/>
      </Col>
			<Col lg="4" sm="12">
				<h2>teste</h2>
			</Col>
			<Col lg="4" sm="12">
				<h2>Home</h2>
				<h2>Gallery</h2>
				<h2>User</h2>
				<p>By Gabriel4420 <br/>
					 and ThalisDev</p>
			</Col>
		</Row>
		<div className="footerline"></div>
	</div>
);

export default Footer;
