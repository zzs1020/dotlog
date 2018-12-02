import React, { MouseEvent, FC } from 'react'; // FunctionComponent defined children

type Props = {
	type?: string,
	cls?: string,
	size?: string,
	disabled?: boolean,
	onClick?: (e: MouseEvent<HTMLElement>) => void
};

const Button: FC<Props> = ({type = 'button', cls = 'primary', size = 'default-size', disabled = false, onClick = null, children}) => {
	return (
		<button type={type} onClick={onClick} disabled={disabled} className={`btn btn-${cls} btn-${size}`}>
			{children}
		</button>
	);
};

export default Button;
