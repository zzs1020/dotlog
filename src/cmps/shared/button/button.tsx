import React, { MouseEvent, FC } from 'react'; // FunctionComponent defined children

type Props = {
	id?: string,
	type?: string,
	cls?: string,
	size?: string,
	disabled?: boolean,
	onClick?: (e: MouseEvent<HTMLElement>) => void
};

const Button: FC<Props> = ({id, type = 'button', cls = 'primary', size = 'default-size', disabled = false, onClick = null, children}) => {
	return (
		<button id={id} type={type} onClick={onClick} disabled={disabled} className={`btn btn-${cls} btn-${size}`}>
			{children}
		</button>
	);
};

export default Button;
