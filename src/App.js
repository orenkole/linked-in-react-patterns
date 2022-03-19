import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { DataResource } from "./DataSource";
import axios from "axios";

const getServerData = url => async () => {
	const response = await axios.get('/users/1');
	return response.data;
}

const getLocalStorageData = key => () => {
	return localStorage.getItem(key);
}

const Text = ({message}) => <h1>{message}</h1>

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
			<DataResource
				getDataFunc={getLocalStorageData('message')}
				resourceName="message"
			>
				<Text />
			</DataResource>
		</>
	);
}

export default App;
