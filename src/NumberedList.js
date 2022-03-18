export const NumberedList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => (
	<>
		{items.map((item, i) => (
			<>
				<h3>{i + 1}</h3>
				<ItemComponent key={i} {...{[resourceName]: item}}/>
			</>
		))}
	</>
);