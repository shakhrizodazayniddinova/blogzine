import "bootstrap/dist/css/bootstrap.min.css";
import './Highlights.scss';
import '../../App.scss';

import { Card } from "react-bootstrap";
import { useContext } from "react";
import { Theme } from "../Theme/Theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Title from "../SectionTitle/Title";

const cardCarousel = [
    {
        categoryTitle: 'Marketing',
        categoryBg: 'bg-primary',
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/07.jpg',
        title: '7 common mistakes everyone makes while traveling',
        authorImg: 'https://blogzine.webestica.com/assets/images/avatar/07.jpg',
        authorName: 'Lori',
        date: 'Mar 07, 2022',
        categoryPadding: 'px-1',
    },
    {
        categoryTitle: 'Sports',
        categoryBg: 'bg-danger',
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/08.jpg',
        title: 'Skill that you can learn from business',
        authorImg: 'https://blogzine.webestica.com/assets/images/avatar/08.jpg',
        authorName: 'Joan',
        date: 'Aug 15, 2022',
        categoryPadding: 'px-1',
    },
    {
        categoryTitle: 'Marketing',
        categoryBg: 'bg-success',
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/09.jpg',
        title: '10 tell-tale signs you need to get a new startup.',
        authorImg: 'https://blogzine.webestica.com/assets/images/avatar/09.jpg',
        authorName: 'Bryan',
        date: 'Jun 01, 2022',
        categoryPadding: 'px-1',
    },
    {
        categoryTitle: 'Photography',
        categoryBg: 'bg-primary',
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/4by3/10.jpg',
        title: 'This is why this year qill be the year of startups',
        authorImg: 'https://blogzine.webestica.com/assets/images/avatar/10.jpg',
        authorName: 'Samuel',
        date: 'Dec 07, 2022',
        categoryPadding: 'px-2',
    }
]

function Highlights() {
  const {theme} = useContext(Theme);
  return( 
    <>
      <div className="highlights">
        {/* Div title text */}
        <Title 
            titleIcon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill={theme === 'white' ? 'black' : 'white'} class="bi bi-megaphone" viewBox="0 0 16 16"><path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/></svg>}
            title={"Today's top highlights"}
            discription={"Latest breaking news, pictures, videos, and special reports"}
        />

        {/* Carousel */}
        <div className="cards d-flex gap-3">
            {cardCarousel.map((item) => (
                <Card style={{ width: '18rem', border: 'none' }} className="d-flex flex-column gap-2 bg-transparent highlightsCard">
                    <span className={`category ${item.categoryBg} ${item.categoryPadding} text-white rounded-1 d-flex align-items-center justify-content-center gap-1`}>
                        <FontAwesomeIcon icon={faCircle} style={{fontSize: '10px'}}/> {item.categoryTitle}
                    </span>
                    <Card.Img variant="top" src={item.cardImg} className="cardImg w-100 h-100 rounded"/>

                    <Card.Body className="p-0 d-flex flex-column gap-2">
                        <Card.Title className={`cardTitle text-${theme === 'white' ? 'dark' : 'white'}`}>{item.title}</Card.Title>

                        <div className="author d-flex align-items-center gap-3">
                            <img src={item.authorImg} />
                            <p className="m-0 text-secondary d-flex align-items-center gap-3">by {item.authorName} <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> {item.date}</p>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>

        {/* Advertisement */}
        <div className="advertisement">
            <div className="advertisementBg"></div>
            <p className="advertisementText text-secondary">Advertisement</p>
        </div>
      </div>
    </>
  )
}

export default Highlights;