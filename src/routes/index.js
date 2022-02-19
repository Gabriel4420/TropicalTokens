import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Error404 from "../pages/Error";
import Login from "../pages/login/";

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="*" element={<Error404 />}></Route>
				<Route path="/login" element={<Login />}></Route>

			
				
				
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
