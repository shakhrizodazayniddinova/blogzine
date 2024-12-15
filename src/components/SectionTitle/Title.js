import "bootstrap/dist/css/bootstrap.min.css";
import './Title.scss';
import { useContext } from "react";
import { Theme } from "../Theme/Theme";

function Title({titleIcon, title, discription}){
      const {theme} = useContext(Theme);
    return(
        <div className="divTitle">
            <div className="title d-flex align-items-center gap-2">
                {titleIcon}
                <p className={`m-0 fs-3 text-${theme === 'white' ? 'dark' : 'white'}`}>{title}</p>
            </div>

            <div className="discription">
                <p className="text-secondary">{discription}</p>
            </div>
        </div>
    )
}

export default Title;
