import end from "./End.module.css";
import negrs from "../../assets/img/autumn.png";
const End = () => {
	return (
		<div className={end.block}>
			<div className={end.negr}>
				<img className={end.ner} src={negrs} alt="#" />
			</div>
			<div className={end.Two}>
				<div className={end.boks}>
					<h2>SOME INFO</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula.
					</p>
				</div>
				<div className={end.boksc}>
					<h2>ENFOLD HEALTH</h2>
					<p>
						Main Street 1, Olcott <br /> Buffalo, United States
					</p>
					<p>
						+555 283 784 333 <br /> office@enfold-health.com
					</p>
				</div>
				<div className={end.boksbek}>
					<h2>OFFICE HOURS</h2>
					<p>Mo-Fr: 8:00-19:00 <br /> Sa: 8:00-14:00 <br /> Su: closed</p>
				</div>
			</div>
		</div>
	);
};

export default End;
