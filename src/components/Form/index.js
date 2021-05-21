import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";
import * as actions from "../../Store/actions";

const Form = (props) => {
	const [todoText, setTodoText] = useState("");

	const focusInput = (event) => {
		event.preventDefault();
		event.target.previousSibling.focus();
	};
	const submitHandler = (event) => {
		event.preventDefault();
		if (todoText.length > 5 && todoText.match(/[a-zA-Z]/)) {
			props.addTodo({ text: todoText, isCompleted: false });
		} else {
			props.showAndHideAlert();
		}
		setTodoText("");
	};
	const inputChangeHandler = (event) => {
		const text = event.target.value;
		setTodoText(text);
	};

	return (
		<Container className="text-center w-50">
			<form onSubmit={submitHandler}>
				<Row>
					<Col md>
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Enter ToDo"
								value={todoText}
								onChange={inputChangeHandler}
							/>
							<span
								className="input-group-text text-light"
								style={{
									border: "none",
									backgroundColor: "#ff6f47",
									cursor: "pointer",
								}}
								onClick={(event) => focusInput(event)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									className="bi bi-bootstrap"
									viewBox="0 0 16 16">
									<path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
									<path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />
								</svg>
							</span>
						</div>
					</Col>
					<Col md>
						<div className="input-group">
							<select className="form-control">
								<option value="all">All</option>
								<option value="completed">Completed</option>
								<option value="uncompleted">Uncompleted</option>
							</select>
							<span
								className="input-group-text text-light"
								style={{
									border: "none",
									backgroundColor: "#ff6f47",
									cursor: "pointer",
								}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-arrow-bar-down"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
									/>
								</svg>
							</span>
						</div>
					</Col>
				</Row>
			</form>
		</Container>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (todo) => dispatch(actions.addTodo(todo)),
		showAndHideAlert: () => dispatch(actions.showAndHideAlert()),
	};
};
export default connect(null, mapDispatchToProps)(Form);
