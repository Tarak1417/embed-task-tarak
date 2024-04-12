// SideBar.js
import { useNavigate } from "react-router-dom";


import { FaAngleRight } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { TiPlus, TiCompass } from "react-icons/ti";

import rockAvatar from "../../assets/rock.jpg";
import spidermanAvatar from "../../assets/spiderman.jpg";
import supermanAvatar from "../../assets/superman.jpg";
import ironmanAvatar from "../../assets/ironman.jpg";
import hulkAvatar from "../../assets/hulk.jpg";

import "./index.css";



const SideBar = () => {
  const userName = "Achanta Tarak";

  const navigate = useNavigate()

  const chatitem=()=>{
    navigate("/ChatPage")
  }

  const HomeRoute=()=>{
    navigate("/create")
  }

  const createButton=()=>{
    navigate("/Home")
  }

  const chatsList = [
    { id: 1, name: "rock", avatar: rockAvatar },
    { id: 2, name: "superman", avatar: supermanAvatar },
    { id: 3, name: "spiderman", avatar: spidermanAvatar },
    { id: 4, name: "ironman", avatar: ironmanAvatar },
    { id: 5, name: "hulk", avatar: hulkAvatar },
  ];

  return (
    <div className="home-page">
      <div className="left-bar-bg">
        <div className="d-flex justify-content-between align-items-center p-1">
          <p className="logo-name" onClick={HomeRoute}>character.ai</p>
          <button type="button" className="right-arrow-btn">
            <FaAngleRight size={12} color={"inherit"} />
          </button>
        </div>
      
          <button type="button" className="create-character-btn" onClick={createButton}>
            <TiPlus className="plus-icon" />
            Create
          </button>
      
        
          <button type="button" className="discover-btn">
            <TiCompass className="compass-icon" />
            Discover
          </button>
       
        <p className="chats-p">Chats</p>
        <p className="today-p">Today</p>

        <ul className="chats-list">
          {chatsList.map((chat, index) => (
            <li
              key={index}
              className="chat-item"
              onClick={chatitem}
            >
              <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
              <p className="chat-name">{chat.name}</p>
            </li>
          ))}
        </ul>

        <hr className="hr-line" />
        <button type="button" className="try-btn">
          Try c.ai
          <TiPlus className="golden-plus-icon" />
        </button>

        <div className="btn-group dropup mt-4">
          <div
            className="drop-up"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <p className="user-profile-p">{userName[0]}</p>
              <p className="user-name-p">{userName}</p>
            </div>
            <FiChevronDown color={"#7c7c87"} />
          </div>
          <div className="dropdown-menu w-100">
         
          </div>
        </div>
      </div>

  
     
    </div>
  );
};

export default SideBar;
