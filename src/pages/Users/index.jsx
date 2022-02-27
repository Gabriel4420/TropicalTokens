import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import { SearchArea, TableArea } from "./styles";
import Navbar from "../../components/mols/NavBar";
import Footer from "../../components/template/footer";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "reactstrap";

export default class Users extends Component {
	data = [
		{
			key: "john",
			value: "John Doe",
		},
		{
			key: "jane",
			value: "Jane Doe",
		},
		{
			key: "mary",
			value: "Mary Phillips",
		},
		{
			key: "robert",
			value: "Robert",
		},
		{
			key: "karius",
			value: "Karius",
		},
	];

	render() {
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
					<ReactSearchBox
						data={this.data}
						inputBackgroundColor="#F5F5F5"
						inputFontColor="#70CC98"
						autoFocus
						dropDownBorderColor="#F5F5F5"
						dropDownHoverColor="#F5F5F5"
						leftIcon={<>🔍</>}
						iconBoxSize="48px"
						clearOnSelect
					/>
				</SearchArea>
				<TableArea>
					<Table>
						<thead>
							<tr>
								<th>#</th>
								<th>Collectors</th>
								<th>Collections</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>10</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>20</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>5</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>John</td>
								<td>1</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>Jane</td>
								<td>1</td>
							</tr>
						</tbody>
					</Table>
				</TableArea>
				<Footer />
			</div>
		);
	}
}
