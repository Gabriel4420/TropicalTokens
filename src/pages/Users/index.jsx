import React from "react";
import { SearchArea, TableArea } from "./styles";
import Navbar from "../../components/mols/NavBar";
import Footer from "../../components/template/footer";
import Input from "../../components/atoms/Input";

import "bootstrap/dist/css/bootstrap.css";
import { Table } from "reactstrap";
import { FcSearch } from "react-icons/fc";

const Users = () => {
	return (
		<div>
			<Navbar />
			<h2
				style={{
					textAlign: "center",
					marginTop: "2em",
					marginBottom: "2em",
					color: "#70CC98",
				}}
			>
				Users
			</h2>
			<SearchArea>
				<Input mode="hard-radius" icon>
					<FcSearch />
				</Input>
			</SearchArea>
			<TableArea>
				<Table>
					<thead>
						<tr>
							<th>Collectors</th>
							<th>Collections</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Mark</td>
							<td>10</td>
						</tr>
						<tr>
							<td>Jacob</td>
							<td>20</td>
						</tr>
						<tr>
							<td>Larry</td>
							<td>5</td>
						</tr>
						<tr>
							<td>John</td>
							<td>1</td>
						</tr>
						<tr>
							<td>Jane</td>
							<td>1</td>
						</tr>
					</tbody>
				</Table>
			</TableArea>
			<Footer />
		</div>
	);
};

export default Users;
