import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function App() {
  const [isMenuClicked, setMenuClicked] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const history = useHistory();

  const movePage = (list) => {
    const url = list.name ? `/${list.name.toLowerCase()}` : `/`;
    history.push(url);
    list.name ? setMenuClicked(!isMenuClicked) : setMenuClicked(false);
  }

  useEffect(() => {
    fetch('/data/menuList.json')
    .then(res => res.json())
    .then(res => setMenuItems(res.menuItems))
  }, [])
  
  const clickMenu = () => {
    setMenuClicked(!isMenuClicked);
  }

  const menuList = isMenuClicked ? menuItems.map(list => {
    return <li className="menu-list" key={list.id} onClick={() => movePage(list)}>{list.name}</li>
  }) : null;

  return (
    <div>
      <nav className="nav-container">
        <div className="logo" onClick={movePage}>Home</div>
        <div className="dropdown-container" onClick={clickMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <ul className="menu-list-container">
        {menuList}
      </ul>
    </div>
  );
}

export default App;
