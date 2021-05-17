import "./App.css";
import Layout from "./containers/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className="App">
			<div className="app-header" style={{ marginBottom: "8vh" }}>
				<p className="h1">Todo List</p>
			</div>
			<Layout></Layout>
		</div>
	);
};

export default App;
