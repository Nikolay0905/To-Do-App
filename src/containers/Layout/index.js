import React from "react";
import Form from "../../components/Form";

const Layout = (props) => {
	return (
		<React.Fragment>
			{props.children}
			<Form></Form>
		</React.Fragment>
	);
};

export default Layout;