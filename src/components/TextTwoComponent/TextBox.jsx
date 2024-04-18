import test from "./TextBox.module.css";

const TextBox = ({ textH1, textP }) => {
	return (
			<div className={test.blochka}>
				<h1>{textH1}</h1>
				<p>{textP}</p>
			</div>
	);
};

export default TextBox;
