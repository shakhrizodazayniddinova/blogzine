import "bootstrap/dist/css/bootstrap.min.css";
import './Sportsupdate.scss';
import '../../App.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import avatar from './image.png';
import Title from "../SectionTitle/Title";
import { useContext } from "react";
import { Theme } from "../Theme/Theme";

const updateCardData = [
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/16by9/06.jpg',
        category: 'Travel',
        categoryBg: 'danger',
        cardTitle: '8 initial problem of startups and their solution',
        cardAvatar: avatar,
        author: 'Carolyn',
        date: 'Feb 28',
        readTime: '6',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/16by9/01.jpg',
        category: 'Technology',
        categoryBg: 'warning',
        cardTitle: 'Business ideas that will boom in upcoming years',
        cardAvatar: 'https://blogzine.webestica.com/assets/images/avatar/09.jpg',
        author: 'Billy',
        date: 'Jun 19',
        readTime: '2',
    },
]

function Sportsupdate() {
  const {theme} = useContext(Theme);

  return(
    <div className="mt-5 pt-3">
        {/* title */}
        <Title
            titleIcon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill={theme === 'white' ? 'black' : 'white'} class="bi bi-controller" viewBox="0 0 16 16">
                    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
                    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
                </svg>}
            title={"Sports update"}
            discription={"Get the latest sports news and updates from football, tennis, formula one, cricket, NBA, and golf with live scores and stats"}
        />

        {/* card */}
        <div className="d-flex gap-4">
            {updateCardData.map((item) => (
                <div className="newCardImg px-5 mt-5" style={{backgroundImage: `url('${item.cardImg}')`}}>
                    <div className="bg-overlay"></div>

                    <div className="categoryDiv d-flex gap-1">
                        <span className={`category bg-${item.categoryBg} text-white rounded-1 d-flex align-items-center justify-content-center gap-1`}>
                            <FontAwesomeIcon icon={faCircle} style={{fontSize: '10px'}}/> {item.category}
                        </span>
                    </div>

                    <div className="titleAuthor">
                        <p className="cardTitle text-white">{item.cardTitle}</p>

                        <div className="author d-flex gap-3 align-items-center">
                            <img src={item.cardAvatar} alt="" />
                            <span className="m-0 text-white d-flex align-items-center gap-3">by {item.author} <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> {item.date}, 2022 <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> {item.readTime} min read</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sportsupdate;
