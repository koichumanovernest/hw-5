import sec from "./CardSecondari.module.css";

const CardSecond = ({ text, classes, }) => {
	return <div className={(sec.balajan, sec[classes])}>
    <div className={sec.blocks}></div>
    <div className={sec.blockTwo}>
      <p><span>.</span> {text}</p>
    </div>
  </div>;
};

export default CardSecond;
