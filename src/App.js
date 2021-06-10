import "./App.css";
import { Route, Switch } from "react-router-dom";
// Imports: Pages and Components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Checkout from "./pages/checkout/Checkout";
import Error from "./components/error/Error";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/products' component={Products} />
				<Route path='/productDetail' component={Product} />
				<Route path='/cart' component={Cart} />
				<Route path='/checkout' component={Checkout} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
