import React from 'react'

export interface ButtonProps {
	color: string
	big: boolean
}

const Button: React.FC<ButtonProps> = ({children, color, ...props}) => {
	return (
		<button {...props} style={{color}}>
			{children}
		</button>
	)
}

export default Button