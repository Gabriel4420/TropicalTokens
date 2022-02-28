import React from "react";
import { ContainerInput, InputBar } from "./styles";

const Input = (props) => {
	return (
		<ContainerInput icon={props.icon}>
			{props.icon && <div>{props.children}</div>}
			<InputBar mode={props.mode} />
		</ContainerInput>
	);
};

export default Input;
