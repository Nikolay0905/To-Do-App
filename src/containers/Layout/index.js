import React from "react";
import Form from "../../components/Form";
import TodoList from "../../components/Todo-List";

const Layout = (props) => {
	return (
		<React.Fragment>
			{props.children}
			<Form></Form>
			<TodoList></TodoList>
		</React.Fragment>
	);
};

export default Layout;
