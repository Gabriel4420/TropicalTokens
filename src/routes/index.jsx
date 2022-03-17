import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error";
import Login from "../pages/Login";
import Users from "../pages/Users"
import Gallery from "../pages/Gallery";

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="*" element={<Error404 />}></Route>
				<Route exact path="/login" element={<Login />}></Route>
				<Route exact path="/users" element={<Users />}></Route>	
				<Route exact path="/gallery" element={<Gallery />}></Route>					
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
