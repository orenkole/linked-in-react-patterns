import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
	const [shouldShowModal, setShouldShowModal] = useState(false);
	return (
		<>
			<ControlledModal
				shouldShowModal={shouldShowModal}
				onRequestClose={() => {setShouldShowModal(false);}}
			>
				<h1>Hello</h1>
			</ControlledModal>
			<button onClick={() => setShouldShowModal(!shouldShowModal)}>
				{shouldShowModal ? 'Hide modal' : 'Show modal'}
			</button>
		</>
	);
}

export default App;
