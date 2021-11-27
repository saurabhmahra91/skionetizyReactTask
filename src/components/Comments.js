import React from "react";
import Comment from "./Comment";

const Comments = (props) => {
	const renderComments = props.userComments.map((userComment) => {
		return <Comment userComment={userComment}></Comment>;
	});

	return (
		<div className="comments-container" style={{ padding: "0 2rem 0 2rem ",}}>
			<h1
				style={{
					fontFamily: "Raleway",
					textTransform: "uppercase",
                    padding: "0 0 0 .3rem",
					fontSize: "2rem",
                    color:"#00764e",
                    fontWeight:"900"
				}}
			>
				Comments
			</h1>
			{renderComments}
		</div>
	);
};

export default Comments;
