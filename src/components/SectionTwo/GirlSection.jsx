import girl from "./GirlSection.module.css";
import girlImg from '../../assets/img/girl.png'
const GirlSection = () => {
	return (
		<div className={girl.BlockG}>
			<div className={girl.glavBlock}>
				<div className={girl.textty}>
					<h2>Why Thrive?</h2>
					<h4>
						Want to improve your well-being from the comfort of your own couch?
						Are you having trouble finding the right therapist?
						<span>
							Here at ThriveTalk, our licensed therapists provide the same
							quality care you would get in office from anywhere you can access
							your laptop or mobile phone. Become your best self with
							ThriveTalk. Start therapy now with a licensed therapist!
						</span>
					</h4>
				</div>
			</div>
			<div className={girl.secondBlock}>
        <img className={girl.imgF} src={girlImg} alt="#" />
      </div>
		</div>
	);
};

export default GirlSection;
