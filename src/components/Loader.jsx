import { useEffect, useState } from "react";
import Logo from "../assets/images/nav-icon.png";
import "../styles/loader.css";

function Loader() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setProgress((prev) => {

                if (prev >= 100) {

                    clearInterval(interval);

                    return 100;

                }

                return prev + 2;

            });

        }, 40);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="loader">

            <div className="loader-content">

                <div className="loader-ring"></div>

                <div className="loader-light"></div>

               

                <img
                    src={Logo}
                    alt="Elvorin"
                    className="loader-logo"
                />

                <h2>Elvorin Technologies</h2>

                <p>Initializing Premium Experience...</p>

                <div className="progress">

                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>

                </div>

                <span>{progress}%</span>

            </div>

        </div>

    );

}

export default Loader;