import React from "react";
import Post from "./Post";

const Posts = (props) => {
	return (
		<div
			className="comments-container"
			style={{ padding: "0 2rem 0 2rem " }}
		>
			<h1
				style={{
					fontFamily: "Raleway",
					textTransform: "uppercase",
					padding: "0 0 0 .3rem",
					fontSize: "2rem",
					color: "#00764e",
					fontWeight: "900",
				}}
			>
				RESPONSE FROM{" "}
				<span style={{ color: "black" }}>JSONPLACEHOLDER</span> SERVER
			</h1>
			<Post responseData={props.responseData} ></Post>;
		</div>
	);
};

export default Posts;
