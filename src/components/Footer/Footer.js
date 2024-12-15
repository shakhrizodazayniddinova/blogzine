import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareFacebook, faSquareTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { Theme } from "../Theme/Theme";

function Footer() {
    const {theme} = useContext(Theme);
    return(
        <div className={`footer text-${theme === 'white' ? 'black' : 'white'}`}>
            <div className="footerDiv d-flex align-items-center gap-5">
                <div className="d-flex flex-column gap-3 logo">
                    <img src={`${theme==='white' ? "https://blogzine.webestica.com/assets/images/logo.svg" : "https://blogzine.webestica.com/assets/images/logo-light.svg"}`} style={{width: '139px', height: '34px'}} />
                    <p className="text-secondary">The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>

                    <span className="text-secondary">©2024 Webestica. All rights reserved</span>
                </div>

                <div className="navigation d-flex flex-column gap-3 ms-2">
                    <h5>Navigation</h5>

                    <div className="d-flex gap-5 text-secondary navigationLi">
                        <ul className="p-0 m-0 d-flex flex-column gap-2">
                            <li>Features</li>
                            <li>Style Guide</li>
                            <li>Contact us</li>
                            <li>Get Theme</li>
                            <li>Support</li>
                        </ul>
                        <ul className="p-0 m-0 d-flex flex-column gap-2">
                            <li>News</li>
                            <li>Career <span className="badge text-bg-danger">2 Job</span></li>
                            <li>Technology</li>
                            <li>Startups</li>
                            <li>Gadgets</li>
                        </ul>
                    </div>
                </div>

                <div className="ms-3 footerBtn">
                    <h5>Browse by Tag</h5>

                    <div className="mt-3">
                        <button class="btn m-1 btn-travel">Travel</button>
                        <button class="btn m-1 btn-business">Business</button>
                        <button class="btn m-1 btn-tech">Tech</button>
                        <br />
                        <button class="btn m-1 btn-gadgets">Gadgets</button>
                        <button class="btn m-1 btn-lifestyle">Lifestyle</button>
                        <br />
                        <button class="btn m-1 btn-vaccine">Vaccine</button>
                        <button class="btn m-1 btn-marketing">Marketing</button>
                        <br />
                        <button class="btn m-1 btn-sports">Sports</button>
                        <button class="btn m-1 btn-covid">Covid-19</button>
                        <button class="btn m-1 btn-politics">Politics</button>
                    </div>
                </div>

                <div className="social ms-1">
                    <h5>Our Social handles</h5>

                    <div className="d-flex flex-column gap-2 mt-3">
                        <span className="text-secondary"><FontAwesomeIcon icon={faSquareFacebook} className="text-primary"/> Facebook</span>
                        <span className="text-secondary"><FontAwesomeIcon icon={faSquareTwitter} className="text-info"/> Twitter</span>
                        <span className="text-secondary"><FontAwesomeIcon icon={faLinkedin} className="text-primary"/> Linkedin</span>
                        <span className="text-secondary"><FontAwesomeIcon icon={faYoutube} className="text-danger"/> YouTube</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;