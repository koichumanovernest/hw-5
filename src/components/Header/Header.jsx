import Button from "../Button/Button";
import MiniTextSub from "../MiniTextSubHeader/MiniTextSubHeader";
import headers from "./Header.module.css";

const Headers = () => {
	return (
		<div className={headers.Main_block}>
			<MiniTextSub />
			<div className={headers.navBar}>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Services</li>
					<li>Blog</li>
				</ul>
			</div>
			<div className={headers.buttonComponent}>
				<Button variant="contact">CONTACT US</Button>
			</div>
		</div>
	);
};

export default Headers;
