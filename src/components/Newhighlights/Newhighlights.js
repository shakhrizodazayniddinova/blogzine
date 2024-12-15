import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Newhighlights.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import avatar from './image.png';
import Title from "../SectionTitle/Title";
import { Theme } from "../Theme/Theme";

const cardData = [
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg',
        categoryBg: 'bg-danger',
        categoryText: 'text-danger',
        categoryPadding: 'px-1',
        category: 'Lifestyle',
        cardTitle: 'The pros and cons of business agency',
        cardAvatar: avatar,
        authorName: 'Samuel',
        date: 'Jan 22',
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
]

function Newhighlights() {
  const {theme} = useContext(Theme);

  return(
    <>
      <div className="newhighlights mt-5 d-flex flex-column gap-4">
        {/* title texts */}
        <Title
            titleIcon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill={theme === 'white' ? 'black' : 'white'} class="bi bi-bookmark-star" viewBox="0 0 16 16">
                <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg>}
            title={"Last week top highlights"}
            discription={"Check last weeks top highlights, news, stories and headline news"}
        />

        <div className="d-flex gap-4">
            <div className="newCardImg px-5">
                <div className="bg-overlay"></div>

                <div className="categoryDiv d-flex gap-1">
                    <span className={`category bg-primary px-2 text-white rounded-1 d-flex align-items-center justify-content-center gap-1`}>
                        <FontAwesomeIcon icon={faCircle} style={{fontSize: '10px'}}/> Business
                    </span>
                    <span className="categoryInfo bg-dark px-2 text-white rounded-1 d-flex gap-1 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        Sponsored
                    </span>
                </div>

                <div className="titleAuthor">
                    <p className="cardTitle text-white">Never underestimate the influence of social media</p>

                    <div className="author d-flex gap-3 align-items-center">
                        <img src="https://blogzine.webestica.com/assets/images/avatar/01.jpg" alt="" />
                        <span className="m-0 text-white d-flex align-items-center gap-3">by Carolyn <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> Jan 26, 2022 <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> 3 min read</span>
                    </div>
                </div>
            </div>
            
            {/* cards */}
            <div className="d-flex flex-column gap-4">
                {cardData.map((item) => (
                    <div className="cardsDiv d-flex gap-3">
                        <div>
                            <img src={item.cardImg} className="cardImg" style={{width: '146px', height: '115px', borderRadius: '10px'}}/>
                        </div>

                        <div className="d-flex flex-column card gap-2 bg-transparent">
                            <div className="cardBody d-flex flex-column gap-2">
                                <span className={`category ${item.categoryBg} bg-opacity-10 ${item.categoryText} ${item.categoryPadding} rounded-1 d-flex align-items-center justify-content-center gap-1`}>
                                    <FontAwesomeIcon icon={faCircle} style={{fontSize: '10px'}}/>{item.category}
                                </span>
                                <p className={`m-0 text-${theme === 'white' ? 'dark' : 'white'}`}>{item.cardTitle}</p>
                            </div>

                            <div className="d-flex align-items-center gap-3 cardAuthor">
                                <img src={item.cardAvatar} alt="" className="avatar"/>
                                <p className="m-0 text-secondary d-flex align-items-center gap-3">by {item.authorName} <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> {item.date}, 2022</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default Newhighlights;