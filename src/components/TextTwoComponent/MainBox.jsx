import main from "./MainBox.module.css";
import TextBox from "./TextBox";

const MainBox = () => {
	const textdata = [
		{
			textH1: "Nutritional Plans",
			textP:
				"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
		},
		{
			textH1: "Weight Loss",
			textP:
				"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
		},
		{
			textH1: "Mental Peace",
			textP:
				"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
		},
		{
			textH1: "Home Training",
			textP:
				"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
		},
		{
			textH1: "Work/Life Balance",
			textP:
				"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
		},
		{
			textH1: "Cardio",
			textP:
				"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
		},
	];
	return (
		<div className={main.cub}>
			{textdata.map((item) => (
				<TextBox key={item.textH1} textH1={item.textH1} textP={item.textP} />
			))}
		</div>
	);
};

export default MainBox;
