import { Container, Row } from "react-bootstrap";
import ListItem from "./ListItem";

const todoListItems = [
	{ task: "Throw the bin", isComplete: false },
	{ task: "Something to do", isComplete: true },
	{ task: "Something another to doaslk naslkdnalksn dlakn slknasn kdanl naslnd kanlsk anskln aklnskd nllk ", isComplete: false },
];

const todoList = (props) => {
	return (
		<Container className="w-50 h-auto p-3  mt-5">
			{todoListItems.map((item) => (
				<Row>
					<ListItem text={item.task} isComplete={item.isComplete} key={item.task}/>
				</Row>
			))}
		</Container>
	);
};

export default todoList;
