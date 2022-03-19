import { useEffect, useState } from "react"

export const ControlledForm = () => {
	const [nameInputError, setNameInputError] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] =useState();
	const [hairColor, setHairColor] = useState('');

	useEffect(() => {
		if(name.length < 2) {
			setNameInputError('Name must be 2 or more charactes')
		} else {
			setNameInputError('');
		}
	},
		[name]
	)

	return (
		<form>
			{nameInputError && <p>{nameInputError}</p>}
			<input
				name="name" 
				type="text" 
				placeholder="Name" 
				value={name} 
				onChange={e => setName(e.target.value)} 
			/>
			<input 
				name="age" 
				type="number" 
				placeholder="Age" 
				value={age} 
				onChange={e => setAge(Number(e.target.value))} 
			/>
			<input 
				name="hairColor" 
				type="text" 
				placeholder="Hair color" 
				value={hairColor} 
				onChange={e => setHairColor(e.target.value)} 
			/>
			<button>Submit</button>
		</form>
	)
}