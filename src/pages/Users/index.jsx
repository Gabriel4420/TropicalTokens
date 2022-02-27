import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import { SearchArea } from "./styles";
import Navbar from "../../components/mols/NavBar";
import Footer from '../../components/template/footer';

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
      <>
      <Navbar />
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
				/>
			</SearchArea>
      <Footer pos="home"/>
      </>
		);
	}
}
