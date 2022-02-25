import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navbarSelector } from "../store/store";
import { setActive } from "../store/slices/navbarSlice";
import NavbarEl from "./styles/Navbar.style";
import logo from "../assets/logo/logo-short.svg";

export default function Navbar({ links, outCount, breakpoints }) {
    const dispatch = useDispatch();
    const { active } = useSelector(navbarSelector);
    const [outItemCount, setOutItemCount] = useState(outCount);
    const [isSticky, setIsSticky] = useState(false);
    const menuRef = useRef();
    const getActiveClass = (checkFor) => {
        return active === checkFor ? " active" : "";
    };

    useEffect(() => {
        const handleSticky = (e) => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleSticky);

        return () => {
            window.removeEventListener("scroll", handleSticky);
        };
    }, []);

    const checkBreakpoints = () => {
        const currentWidth = window.innerWidth;
        let newCount = outCount;

        for (const pair of breakpoints) {
            if (currentWidth < pair[0]) {
                newCount = pair[1];
                break;
            }
        }

        setOutItemCount(newCount);
    };

    const handleClasses = () => {
        const children = menuRef.current.childNodes;
        for (let i = 0; i < children.length; i++) {
            const item = children[i];
            if (isSticky || i < outItemCount) {
                item.classList.remove("in");
                item.classList.add("out");
            } else {
                item.classList.remove("out");
                item.classList.add("in");
            }
        }
    };

    useEffect(handleClasses);

    useEffect(() => {
        if (!breakpoints) return;
        checkBreakpoints();

        window.addEventListener("resize", checkBreakpoints);

        return () => window.removeEventListener("resize", checkBreakpoints);
    }, [breakpoints]);

    useEffect(() => {
        dispatch(setActive("home"));
    }, []);

    return (
        <NavbarEl className={"main-nav " + (isSticky ? "sticky" : "")}>
            {console.log(isSticky)}
            <div className="container">
                <div className="logo-holder">
                    <img src={logo} alt="logo" />
                </div>

                <ul className="main-menu" ref={menuRef}>
                    {links.map((link) => {
                        const activeClass = getActiveClass(link.value);
                        const className = "menu-item" + activeClass;
                        return (
                            <li
                                className={className}
                                onClick={() => dispatch(setActive(link.value))}
                                key={link.text}
                            >
                                <a href={link.to}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </NavbarEl>
    );
}
