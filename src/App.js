
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Create from './components/Create';
import SideBar from './components/SideBar';
import ChatPage from "./components/ChatPage"
import Home  from "./components/Home"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path='/create' element = {<Create />} />
            <Route path="/ChatPage" element={<ChatPage/>}/>

           <Route path="/Home" element={<Home/>}/>
           
          </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
