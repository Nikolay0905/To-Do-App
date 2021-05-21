import React from "react";

import Layout from "./containers/Layout";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className="App">
			<Layout>
				<div className="app-header" style={{ marginBottom: "8vh" }}>
					<p className="h1">Todo List</p>
				</div>
			</Layout>
		</div>
	);
};

export default App;
