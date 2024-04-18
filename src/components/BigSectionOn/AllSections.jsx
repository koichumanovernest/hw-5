import all from "./AllSections.module.css";
import ert from "../../assets/img/ertugrul.png";
const AllSections = () => {
	return (
		<div className={all.bigblock}>
			<div className={all.div}>
				<img className={all.divbek} src={ert} alt="#" />
			</div>
			<div className={all.divtwo}>
				<div className={all.bigDiv}>
					<p>YOU SHOULD ALSO KNOW</p>
				</div>
				<div className={all.bigMedium}>
					<div className={all.oro}>
						<p>
							MDD affects more than 16.1 million American adults, or about
							6.7%of the U.S. population age 18 and older in a given year.{" "}
							<br /> We at
							<span> ThriveTalk</span> can help you.
						</p>
					</div>
				</div>
				<div className={all.bigSmall}>
					<p>GET HELP NOW</p>
				</div>
			</div>
		</div>
	);
};

export default AllSections;
