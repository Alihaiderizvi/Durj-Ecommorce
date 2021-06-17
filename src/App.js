import "./App.css";
import { Route, Switch } from "react-router-dom";
// Imports: Pages and Components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Checkout from "./pages/checkout/Checkout";
import Error from "./components/error/Error";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetailsPage/ProductDetailsPage";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/products' component={Products} />
				<Route path='/product/:productId' component={ProductDetails} />
				<Route path='/cart' component={Cart} />
				<Route path='/wishlist' component={Wishlist} />
				<Route path='/checkout' component={Checkout} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
