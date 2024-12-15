import "bootstrap/dist/css/bootstrap.min.css";
import './Sponsored.scss';
import '../../App.scss';

import Title from "../SectionTitle/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Theme } from "../Theme/Theme";

const cardData = [
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
        categoryBg: 'bg-danger',
        categoryText: 'text-danger',
        categoryPadding: 'px-1',
        category: 'Lifestyle',
        cardTitle: 'The pros and cons of business agency',
        cardAvatar: avatar1,
        authorName: 'Samuel',
        date: 'Jan 22',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg',
        categoryBg: 'bg-warning',
        categoryText: 'text-warning',
        categoryPadding: 'px-3',
        category: 'Technology',
        cardTitle: "Around the web: 20 fabulous infographics about business",
        cardAvatar: 'https://blogzine.webestica.com/assets/images/avatar/05.jpg',
        authorName: 'Jacqueline',
        date: 'Nov 11',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg',
        categoryBg: 'bg-primary',
        categoryText: 'text-primary',
        categoryPadding: 'px-1',
        category: 'Sports',
        cardTitle: "5 reasons why you shouldn't startup",
        cardAvatar: 'https://blogzine.webestica.com/assets/images/avatar/02.jpg',
        authorName: 'Dennis',
        date: 'Mar 07',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/05.jpg',
        categoryBg: 'bg-primary',
        categoryText: 'text-primary',
        categoryPadding: 'px-1',
        category: 'Marketing',
        cardTitle: "7 common mistakes everyone makes while traveling",
        cardAvatar: avatar2,
        authorName: 'Samuel',
        date: 'Jun 22',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg',
        categoryBg: 'bg-success',
        categoryText: 'text-success',
        categoryPadding: 'px-1',
        category: 'Business',
        cardTitle: "Five unbelievable facts about money",
        cardAvatar: 'https://blogzine.webestica.com/assets/images/avatar/03.jpg',
        authorName: 'Bryan',
        date: 'Jun 17',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/06.jpg',
        categoryBg: 'bg-danger',
        categoryText: 'text-danger',
        categoryPadding: 'px-3',
        category: 'Photography',
        cardTitle: "5 investment doubts you should clarify",
        cardAvatar: 'https://blogzine.webestica.com/assets/images/avatar/07.jpg',
        authorName: 'Judy',
        date: 'Sep 30',
    },
]

function Sponsored() {
  const {theme} = useContext(Theme);

  return(
    <div className="sponsored mt-5 pt-4">
        {/* Div title text */}
        <div className="d-flex align-items-center justify-content-between titleDiv">
            <Title
                titleIcon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill={theme === 'white' ? 'black' : 'white'} class="bi bi-megaphone" viewBox="0 0 16 16">
                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/>
                    </svg>}
                title={"Sponsored news"}
            />
            <a href="#" className="text-secondary mb-3">Content by: Bootstrap</a>
        </div>
        
        {/* cards */}
        <div className="card-container mt-4">
            {cardData.map((item) => (
                <div className="cardsDiv d-flex gap-3">
                    <>
                        <div>
                            <img src={item.cardImg} className="cardImg" style={{width: '179px', height: '134px', borderRadius: '10px'}}/>
                        </div>

                        <div className="card d-flex flex-column gap-3">
                            <div className="cardBody d-flex flex-column gap-2">
                                <span className={`category ${item.categoryBg} bg-opacity-10 ${item.categoryText} ${item.categoryPadding} rounded-1 d-flex align-items-center justify-content-center gap-1`}>
                                    <FontAwesomeIcon icon={faCircle} style={{fontSize: '10px'}}/>{item.category}
                                </span>
                                <p className={`m-0 text-${theme === 'white' ? 'black' : 'white'}`}>{item.cardTitle}</p>
                            </div>

                            <div className="d-flex align-items-center gap-3 cardAuthor">
                                <img src={item.cardAvatar} alt="" className="avatar"/>
                                <p className="m-0 text-secondary d-flex align-items-center gap-3">by {item.authorName} <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> {item.date}, 2022</p>
                            </div>
                        </div>
                    </>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sponsored;