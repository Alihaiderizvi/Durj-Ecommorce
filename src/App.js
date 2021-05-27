import "./App.css";
import { Route, Switch } from "react-router-dom";
// Imports: Pages and Components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";
import Error from "./components/error/Error";

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/checkout' component={Checkout} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
