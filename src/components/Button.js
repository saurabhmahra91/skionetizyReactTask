import React from "react";

const Button = (props) => {
	return (
		<button onClick={props.onClick}
			style={{
				width: "150px",
				fontSize: "1.5rem",
				backgroundColor: "black",
				color: "white",
				fontWeight: 900,
				borderRadius: "1rem",
				margin: ".2rem",
				padding: "1rem",
				boxShadow: "rgba(0, 0, 0, .35) 0px 5px 15px",
			}}
		>
			{props.text}
			
		</button>
	);
};

export default Button;
