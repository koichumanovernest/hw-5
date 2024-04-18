import "./App.css";
import AllSections from "./components/BigSectionOn/AllSections";
import Qwerty from "./components/BigSectionOn/Qwerty";
import End from "./components/EndComponent/End";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Header/Header";
import Cards from "./components/MapCards/CardsPreview";
import None from "./components/None";
import SecondCards from "./components/SecondCards/SecondCards";
import Section from "./components/SectionOne/Section";
import OneText from "./components/SectionThree/OneText";
import GirlSection from "./components/SectionTwo/GirlSection";
import TextFor from "./components/TextAndImgComponents/TextFor";
import MainBox from "./components/TextTwoComponent/MainBox";
function App() {
	return (
		<>
			<Section />
			<Headers />
			<None />
			<TextFor />
			<GirlSection />
			<OneText />
			<Cards />
			<None />
			<SecondCards />
			<MainBox />
			<AllSections />
			<Qwerty />
			<End />
			<Footer />
		</>
	);
}

export default App;
