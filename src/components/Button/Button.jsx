import scssa from "./Button.module.css";

const Button = ({ children, variant }) => {
	return (
		<div className="button">
			<button className={`${scssa.button} ${scssa[variant]}`}>{children}</button>
		</div>
	);
};

export default Button;
