import React from "react";
import avatar from "../images/a.png";
const Comment = (props) => {
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
			<div className="avatar-container f1">
				<div
					className="avatar"
					style={{
						width: "60px",
						height: "60px",
						borderRadius: "100%",
						background: "#eee no-repeat center",
						backgroundSize: "cover",
						backgroundImage: "url(" + avatar + ")",
						marginRight: "1rem",
					}}
				></div>
			</div>
			<div className="comment-context f2">
				<div
					className="author"
					style={{ fontWeight: 100, fontSize: ".7rem", fontFamily: "sans-serif "}}
				>
					{props.userComment.name}
				</div>
				<div
					className="text"
					style={{
						fontSize: "1rem",
						fontFamily: "helvetica, sans-serif",
						fontWeight: "bold",
					}}
				>
					{props.userComment.commentText}
				</div>
			</div>

			<div
				className="date f3"
				style={{
					float: "right",
					fontSize: ".7rem",
					fontFamily: "monospace",
					fontWeight: 100,
                    marginLeft: "auto"

				}}
			>
				{props.userComment.datePosted}
			</div>
		</div>
	);
};

export default Comment;
