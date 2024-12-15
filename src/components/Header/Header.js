import "bootstrap/dist/css/bootstrap.min.css";
import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke, faEllipsis, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from "react";
import { Theme } from "../Theme/Theme";

const dropItemsData = [
  {
    title: 'Home',
    dropItems: ['Home Default', 'Home Lazy Load', 'Magazine Classic', 'Magazine', 'Home Cards']
  },
  {
    title: 'Pages',
    dropItems: ['About', 'Contact', 'Shop', 'Other Archives', 'Error 404']
  },
  {
    title: 'Post',
    dropItems: ['Post Grid', 'Post List', 'Post List 2', 'Post Card', 'Post Overlay']
  },
  {
    title: 'Lifestyle',
    dropItems: ['Post Grid', 'Post List', 'Post List 2', 'Post Card', 'Post Overlay']
  },
]

function Header() {
  const {theme, toggleTheme} = useContext(Theme);

  // const appStyle = {
  //   background: theme === 'white' ? 'white' : 'dark',
  // }

  return(
    <header className={`position-sticky bg-${theme}`} id="header">
      <Navbar>
        <Container fluid>
            {/* logo */}
            <Navbar.Brand href="#">
                <img src={`${theme === 'white' ? 'https://blogzine.webestica.com/assets/images/logo.svg' : 'https://blogzine.webestica.com/assets/images/logo-light.svg'}`} className="brandLogo"/>
            </Navbar.Brand>

            <nav>
              <ul className={`d-flex align-items-center justify-content-center fw-semibold text-${theme === 'white' ? 'secondary' : 'white'} m-0`}>
                {dropItemsData.map((section) => (
                  <li>
                    <NavDropdown title={section.title} id="navbarScrollingDropdown" className={`${theme==='white' ? 'bg-white' : 'dropDark'}`}>
                      {section.dropItems.map(item => (
                        <NavDropdown.Item href="#action3" className={`dropDark text-${theme === 'dark' ? 'white' : 'dark'} mt-1 px-4 bg-${theme === 'white' ? 'white' : 'dark'}`}>{item}</NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  </li>
                ))}

                <li><p className="m-0">Dashboard</p></li>
                <li><button className="rounded-5 border-0 bg-warning text-white px-1" onClick={toggleTheme}><FontAwesomeIcon icon={faCircleHalfStroke}/></button></li>
                <li><button className={`border-0 bg-transparent text-${theme === 'white' ? 'secondary' : 'white'}`}><FontAwesomeIcon icon={faEllipsis} className="fs-4 ellipsSearch"/></button></li>
                <li><Button variant="danger" className="fw-semibold py-1 rounded-1">Subscribe!</Button></li>
                <li><button className={`border-0 bg-transparent text-${theme === 'white' ? 'secondary' : 'white'}`}><FontAwesomeIcon icon={faMagnifyingGlass} className="fs-4 ellipsSearch"/></button></li>
              </ul>
            </nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;