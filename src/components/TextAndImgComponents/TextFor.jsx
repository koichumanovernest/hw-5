import Button from "../Button/Button";
import MiniTextSubHeader from "../MiniTextSubHeader/MiniTextSubHeader";
import text from "./TextFor.module.css";
import imgRactangle from "../../assets/img/RadiusBg.png";
import imgRactanglePeople from "../../assets/img/linkedin.png";
const TextBlockOne = () => {
	return (
		<div className={text.flexBlock}>
			<div className={text.blockDive}>
				<MiniTextSubHeader />
				<h1 className={text.h1}>
					HELPING YOU THRIVE <br /> IN ALL AREAS OF LIFE
				</h1>
				<p className={text.pteg}>
					Our highly talented therapists can help you with a range of issues
					including relationships, sex, PTSD, depression, social anxiety, or
					even just caring for yourself more.
				</p>
				<div className={text.neon_button}>
					<Button variant="neon-button">WHO AM I</Button>
					<Button variant="neon-button">WHO AM I</Button>
				</div>
			</div>
			<div className={text.blovkbeg}>
				<img className={text.imgBg} src={imgRactangle} alt="#" />
				<div className={text.peopleDiv}>
					<img className={text.imgBgPeople} src={imgRactanglePeople} alt="#" />
				</div>
			</div>
		</div>
	);
};
const TextFor = () => {
	return (
		<div className={text.BorderMainAnd}>
			<TextBlockOne />
		</div>
	);
};

export default TextFor;
