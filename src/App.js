import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { DataResource } from "./DataSource";
import axios from "axios";

const getServerData = url => async () => {
	const response = await axios.get('/users/1');
	return response.data;
}

function App() {
	return (
		<>
			<DataResource
				getDataFunc={getServerData('/users/1')}
				resourceName="user"
			>
				<UserInfo />
			</DataResource>
			<DataResource
				getDataFunc={getServerData('/products/1')}
				resourceName="product"
			>
				<ProductInfo />
			</DataResource>
		</>
	);
}

export default App;
