import card from "./Card.module.css";
const Card = ({ text, clasess }) => {
	return (
		<div className={card.place}>
			<div className={(card.cards, card[clasess])}>
				<div className={card.bloc}></div>
				<div className={card.blocs}>
					<p className={card.ptegs}> <span>.</span>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
