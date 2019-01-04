import React, { MouseEvent, FC } from 'react'; // FunctionComponent defined children

type Props = {
	id?: string,
	type?: string,
	btnType?: string, // specific to btn classes
	className?: string, // additional custom classes
	size?: string,
	disabled?: boolean,
	onClick?: (e: MouseEvent<HTMLElement>) => void
};

const Button: FC<Props> = ({id, type, btnType = 'primary', className, size, disabled, onClick, children}) => {
	// if a prop doesn't exist, react will omit this html prop
	return (
		<button id={id} type={type} onClick={onClick} disabled={disabled} className={`btn btn-${btnType} btn-${size} ${className}`}>
			{children}
		</button>
	);
};

export default Button;
