import React, { Dispatch, SetStateAction } from 'react'
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import './navigation.css';

function NavigationBar(props: { theme: string, setTheme: Dispatch<SetStateAction<string>>}) {
    const icon = props.theme === "light" ? <BsMoonStars size="30" className="themeIcons"/> : <BsSun size="30" className="themeIcons"/>;
    function toggleTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    return (
        <header className="primary-header flex">
            <nav className="mainNavigation flex">
                <ul className="navigationList flex">
                    <li>
                        <a>
                            Home
                        </a>
                    </li>
                    <li>
                        <a>
                            Experiences
                        </a>
                    </li>
                    <li>
                        <a>
                            Self
                        </a>
                    </li>
                </ul>
            </nav>
            <button onClick={toggleTheme} className="themeButton">
                {icon}
            </button>
        </header>
    );
}

export default NavigationBar;