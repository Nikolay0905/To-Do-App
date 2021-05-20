import { Container, Row } from "react-bootstrap";
import ListItem from "./ListItem";

const todoList = (props) => {
	let todos = <p>Add todo..</p>;
	if (props.todos) {
		if (props.todos.length > 0) {
			todos = props.todos.map((item) => (
				<Row>
					<ListItem
						text={item.text}
						isComplete={item.isCompleted}
						key={item.task + item.isCompleted}
					/>
				</Row>
			));
		}
	}
	return <Container className="w-50 h-auto p-3  mt-5">{todos}</Container>;
};

export default todoList;
