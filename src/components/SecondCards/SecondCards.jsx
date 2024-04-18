import CardSecond from "./CardSecondary";
import second from "./SexondCards.module.css";
import imgBek from '../../assets/img/klubnika.png'
const SecondCards = () => {
	const arr = [
		{ text: "Physical Health", classes: "dark_blu" },
		{ text: "Mental Health", classes: "blue_btn" },
		{ text: "Nutrition", classes: "imgKlub", img:imgBek },
		{ text: "Gymnastics", classes: "aqua" },
		{ text: "Crossfit", classes: "gray_btn" },
		{ text: "Aerobics", classes: "violet" },
	];
	return (
		<div className={second.box}>
			{arr.map((item) => (
				<CardSecond key={item.text} text={item.text} classes={item.classes} img={item.img} />
			))}
		</div>
	);
};

export default SecondCards;
