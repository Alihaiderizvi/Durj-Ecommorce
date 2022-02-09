import React from "react";
import spinner from "../../assets/spinner.gif";
const Spinner = () => {
	return (
		<img
			src={spinner}
			style={{
				margin: "auto",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			alt='Loading...'
		/>
	);
};

export default Spinner;
