import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Error404 from "../pages/Error";
import Login from "../pages/login/";

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Login />}></Route>
				<Route exact path="/home" element={<Home />}></Route>
				<Route exact path="*" element={<Error404 />}></Route>
				<Route exact path="/login" element={<Login />}></Route>				
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
