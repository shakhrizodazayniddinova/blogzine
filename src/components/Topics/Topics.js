import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.scss';
import './Topics.scss';
import { useContext } from "react";
import { Theme } from "../Theme/Theme";

const topicCardData =[
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/1by1/thumb/01.jpg',
        title: 'Travel',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/1by1/thumb/02.jpg',
        title: 'Business',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/1by1/thumb/03.jpg',
        title: 'Marketing',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg',
        title: 'Photography',
    },
    {
        cardImg: 'https://blogzine.webestica.com/assets/images/blog/1by1/thumb/05.jpg',
        title: 'Sports',
    },
]

function App() {
  const {theme} = useContext(Theme);

  return(
    <div className={`topic rounded-3 p-4 px-5 d-flex flex-column gap-4 bg-${theme === 'white' ? 'light' : 'custom-secondary'}`}>
        <div className="topicTitle d-flex align-items-center justify-content-between">
            <h2 className={`text-${theme === 'white' ? 'dark' : 'white'}`}>Trending topics</h2>
            <a href="#" className={`text-${theme === 'white' ? 'dark' : 'white'}`}>View all categories</a>
        </div>

        <div className="topicCards d-flex gap-4">
            {topicCardData.map((item) => (
                <div className="topicCard d-flex justify-content-center" style={{backgroundImage: `url(${item.cardImg})`}}>
                    <div className="bg-overlay"></div>
                    <p className="text-white fw-bold">{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default App;