import React from "react";

import { connect } from "react-redux";

import Form from "../../components/Form";
import TodoList from "../../components/Todo-List";

const Layout = (props) => {
	return (
		<React.Fragment>
			{props.children}
			<Form></Form>
			<TodoList todos={props.todos}></TodoList>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todo,
	};
};

export default connect(mapStateToProps)(Layout);
