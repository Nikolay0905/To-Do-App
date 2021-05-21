import React from "react";

import { connect } from "react-redux";

import Form from "../../components/Form";
import TodoList from "../../components/Todo-List";
import { Modal } from "react-bootstrap";

import * as actions from "../../Store/actions";
const Layout = (props) => {
	return (
		<React.Fragment>
			<Modal
				show={props.modal}
				className="text-danger"
				onHide={props.showAndHideAlert}>
				<Modal.Header>
					<Modal.Title>Please add properly to-do!</Modal.Title>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
						onClick={props.showAndHideAlert}></button>
				</Modal.Header>
				<Modal.Footer>
					<button
						type="button"
						className="btn btn-danger"
						data-bs-dismiss="modal"
						onClick={props.showAndHideAlert}>
						Close
					</button>
				</Modal.Footer>
			</Modal>
			{props.children}
			<Form></Form>
			<TodoList todos={props.todos}></TodoList>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos.todo,
		modal: state.UI.showAlert,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		showAndHideAlert: () => dispatch(actions.showAndHideAlert()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
