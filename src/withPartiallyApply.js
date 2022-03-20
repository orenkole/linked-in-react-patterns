export const withPartiallyApply = (Component, partialProps) => {
	return props => {
		<Component {...partialProps} {...props} />
	}
}

export const Button = ({size, color, text, ...props}) => {
	return <button
		style={{
			padding: size === 'large' ? '32px' : '8px',
			fontSize: size === 'large' ? '32px' : '16px',
			backgroundColor: color,
		}}
		{...props}
	>{text}</button>
}

export const DangerButton = withPartiallyApply(Button, {color: 'red'});

export const BigSuccessButton = withPartiallyApply(Button, {size: 'large', color: 'green'})