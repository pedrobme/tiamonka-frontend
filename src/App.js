import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SiginIn";
import GlobalStyleReset from "./styles/GlobalStyleReset";

function App() {
	return (
		<Router>
			<GlobalStyleReset />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" />
			</Routes>
		</Router>
	);
}

export default App;
