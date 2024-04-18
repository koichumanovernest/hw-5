import qwer from "./Qwerty.module.css";
import charlens from "../../assets/img/charles.png";
const Qwerty = () => {
	return (
		<div className={qwer.bigblock}>
			<div className={qwer.divtwo}>
				<div className={qwer.bigDiv}>
					<p>YOU SHOULD ALSO KNOW</p>
				</div>
				<div className={qwer.bigMedium}>
          <h1>Ready. Set. Smile</h1>
					<div className={qwer.oro}>
						<p>
							MDD affects more than 16.1 million American adults, or about
							6.7%of the U.S. population age 18 and older in a given year.{" "}
							<br /> We at
							<span> ThriveTalk</span> can help you.
						</p>
					</div>
				</div>
				<div className={qwer.bigSmall}>
					<p>GET HELP NOW</p>
				</div>
			</div>
			<div className={qwer.div}>
				<img className={qwer.divbek} src={charlens} alt="#" />
			</div>
		</div>
	);
};

export default Qwerty;
