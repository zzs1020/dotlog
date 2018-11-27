import React from 'react';

const Button = ({onClick = null, type = 'button', cls = 'primary', size = 'default-size', children}) => {
	return (
		<button type={type} onClick={onClick} className={`btn btn-${cls} btn-${size}`}>
			{children}
		</button>
	);
};

export default Button;
