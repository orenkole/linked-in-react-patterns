import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

function App() {
	return (
		<>
			<ResourceLoader resourceUrl="/users/1" resourceName="user">
				<UserInfo />
			</ResourceLoader>
			<ResourceLoader resourceUrl="/products/2" resourceName="product">
				<ProductInfo />
			</ResourceLoader>
		</>
	);
}

export default App;
