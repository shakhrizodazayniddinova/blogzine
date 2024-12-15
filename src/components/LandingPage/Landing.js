import "bootstrap/dist/css/bootstrap.min.css";
import './Landing.scss';
import '../../App.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

const carouselItem = [
  {
    imgSrc: "https://blogzine.webestica.com/assets/images/blog/16by9/big/02.jpg",
    category: "Lifestyle",
    bgColor: "bg-danger",
    categotyPadding: 'px-3',
    title: "10 tell-tale signs you need to get a new startup.",
    description: "No visited raising gravity outward subject my cottage Mr be. Hold to at tore in park feet near my case.",
    authorImg: "https://blogzine.webestica.com/assets/images/avatar/11.jpg",
    author: "Louis",
    date: "Jan 01, 2022",
    readTime: "5 min read"
  },
  {
    imgSrc: "https://blogzine.webestica.com/assets/images/blog/16by9/big/01.jpg",
    category: "Travel",
    bgColor: "bg-warning",
    categotyPadding: 'px-3',
    title: "7 common mistakes everyone makes while traveling",
    description: "Particular way thoroughly unaffected projection favorable Mrs can be projecting own.",
    authorImg: "https://blogzine.webestica.com/assets/images/avatar/11.jpg",
    author: "Larry",
    date: "Feb 22, 2022",
    readTime: "2 min read"
  },
  {
    imgSrc: "https://blogzine.webestica.com/assets/images/blog/16by9/big/03.jpg",
    category: "Covid-19",
    bgColor: "bg-primary",
    categotyPadding: 'px-1',
    title: "Initial problem of startups and their solution",
    description: "Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic.",
    authorImg: "https://blogzine.webestica.com/assets/images/avatar/08.jpg",
    author: "Dennis",
    date: "Jun 17, 2022",
    readTime: "10 min read"
  }
];

function Landing() {
  const [currentImg, setCurrentImg] = useState(carouselItem[0].imgSrc);

  return(
    <>
      <div className="landing mb-5">
        <Carousel fade onSelect={(selectedIndex) => setCurrentImg(carouselItem[selectedIndex].imgSrc)}>
          {/* carousel items */}
          {carouselItem.map((item) => (
            <Carousel.Item>
              <div className="bg-overlay"></div>
              <img className="d-block w-100" src={item.imgSrc} />

              <Carousel.Caption>
                <div className="d-flex flex-column gap-2 leftContent">
                  <span className={`category ${item.bgColor} ${item.categotyPadding} rounded-1 d-flex align-items-center justify-content-center gap-1`}><FontAwesomeIcon icon={faCircle} style={{fontSize: '10px'}}/>{item.category}</span>

                  <div className="texts">
                    <p className="title">{item.title}</p>
                    <p className="description">{item.description}</p>
                  </div>

                  <div className="d-flex align-items-center gap-3 author">
                    <img src={item.authorImg}/>
                    <p className="d-flex align-items-center gap-3 m-0">{item.author} <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> {item.date} <FontAwesomeIcon icon={faCircle} style={{fontSize: '3px'}}/> {item.readTime}</p>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="carouseRowItems d-flex flex-column gap-4">
          {carouselItem.map((item) => (
            <div className={`rowItem d-flex gap-2`} style={{ opacity: item.imgSrc === currentImg ? 1 : 0.5 }}>
              <img src={item.imgSrc}/>

              <div className="rowTexts text-white">
                <p className="m-0">{item.title}</p>
                <p className="m-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Landing;