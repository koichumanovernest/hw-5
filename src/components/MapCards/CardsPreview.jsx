import Card from "./Card";
import cards from "./Cards.module.css";

const Cards = () => {
	const DATA = [
		{ text: "Weight Lifting", clasess: "pink" },
		{ text: "Running  & Spinning", clasess: "green" },
		{ text: "Pumping Iron", clasess: "blue" },
		{ text: "Pumping Iron", clasess: "dark-blue" },
	];
	return (
		<div className={cards.width}>
			{DATA.map((item) => (
				<Card key={item.text} text={item.text} clasess={item.clasess} />
			))}
		</div>
	);
};

export default Cards;
