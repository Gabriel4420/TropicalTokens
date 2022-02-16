import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/Error";

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
