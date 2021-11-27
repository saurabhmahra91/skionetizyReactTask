import React from "react";
const Post = (props) => {
	return (
		<div
			style={{
				display: "flex",
				backgroundColor: "#00764e",
				padding: "1rem 0px",
				color: "white",
				maxWidth: "900px",
				padding: "1.5rem",
				borderRadius: "5px",
				margin: "1rem 0",
				boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
			}}
		>
			<div className="json-data">
				<pre
					style={{
						fontSize: ".6rem",
						fontFamily: "JetBrains Mono, sans-serif",
					}}
				>
					{JSON.stringify(props.responseData, null, 4)}
				</pre>
			</div>
		</div>
	);
};

export default Post;
