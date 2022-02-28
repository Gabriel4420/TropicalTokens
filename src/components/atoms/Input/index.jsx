import React from "react";
import { ContainerInput, InputBar } from "./styles";

const Input = (props) => {
	return (
		<ContainerInput icon={props.icon}>
			{props.icon && props.children}
			<InputBar mode={props.mode} />
		</ContainerInput>
	);
};

export default Input;
