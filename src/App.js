import "./App.css";
import { Route, Switch } from "react-router-dom";
// Import : Browser Router
import BrowserRouter from "react-router-dom/BrowserRouter";
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
import Reservation from "./pages/reservation/Reservation";

// Redux
import { useDispatch, useSelector } from "react-redux";

function App() {
	const isLogin = useSelector((state) => state.user.isLogin);
	console.log("login ", isLogin);
	return (
		<>
			<Switch>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/product-type/:productId' component={Products} />
					<Route path='/product/:productId' component={ProductDetails} />
					<Route path='/cart' component={Cart} />
					<Route path='/wishlist' component={isLogin ? Wishlist : Login} />
					<Route
						path='/reservation'
						component={isLogin ? Reservation : Login}
					/>
					<Route path='/checkout' component={Checkout} />
					{/* <Route component={Error} /> */}
				</BrowserRouter>
			</Switch>
		</>
	);
}

export default App;
