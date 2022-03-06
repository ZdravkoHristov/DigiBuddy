import { useSelector } from "react-redux";
import { homeStateSelector } from "../store/store";
import Header from "./Header";
import AnimatedLine from "./AnimatedLine";
import AnimatedElement from "./AnimatedElement";
import RolesSection from "./RolesSection";
import RegTeacher from "./RegTeacher";
import RegStudent from "./RegStudent";
import LogTeacher from "./LogTeacher";
import LogStudent from "./LogStudent";
import Faq from "./Faq";
import Navbar from "./Navbar";
import HomeEl from "./styles/Home.style";
import heroIllustration from "../assets/illustrations/home-image.svg";

export default function Home() {
    const { activeForm, showForm } = useSelector(homeStateSelector).data;

    const navLinks = [
        { text: "Начало", to: "#", value: "home" },
        { text: "Вход", to: "#entrance", value: "entrance" },
        { text: "ЧЗВ", to: "#faq", value: "faq" },
    ];

    const navBreakpoints = new Map();

    navBreakpoints.set(1800, 3);
    navBreakpoints.set(1751, 2);
    navBreakpoints.set(1035, 3);

    const HeroContent = (props) => {
        return (
            <section {...props}>
                {" "}
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat quibusdam qui adipisci, culpa odio veniam nobis!
                    Corporis vel reprehenderit eos.
                </p>
                <div className="img-holder">
                    <img src={heroIllustration} alt="illustration" />
                </div>
            </section>
        );
    };

    return (
        <HomeEl>
            <div className="gradient-holder">
                <Header heroContent={<HeroContent />}>
                    <Navbar
                        links={navLinks}
                        outCount={1}
                        breakpoints={navBreakpoints}
                    />
                    <HeroContent className="hero container" />
                </Header>
                <AnimatedLine />
                <RolesSection />
                <AnimatedElement
                    isMounted={showForm}
                    inClass={"slide-down-animation"}
                    outClass="slide-up-animation"
                    delayTime={700}
                >
                    {console.log(showForm, activeForm)}
                    {activeForm === "regTeacher" && <RegTeacher />}
                    {activeForm === "regStudent" && <RegStudent />}
                    {activeForm === "logTeacher" && <LogTeacher />}
                    {activeForm === "logStudent" && <LogStudent />}
                </AnimatedElement>

                <Faq />
            </div>
        </HomeEl>
    );
}
