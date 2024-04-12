import { FaPencilAlt } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import './index.css'
const Home = () => {
    return(
        <div className="create-container">
            <div className="logoooo">
                <FaPencilAlt  className="pencile"/>
            </div>
            <b>Character name</b>
            <div className="lll">
                <input className="kk" type="text" placeholder="e.g.Albert Einstein" />
                <p className="ppppp">0/20</p>
            </div>
            <b>Tagline</b>
            <div>
                <input className="kk" type="text" placeholder="Add a short tagline of your Character" />
                <p className="ppppp">0/50</p>
            </div>
            <b>Description</b>
            <div>
                <textarea name="" id="" cols="150" rows="5" placeholder="How would Character describe themselves"></textarea>
                <p className="ppppp">0/500</p>
            </div>
            <b>Greeting</b>
            <div>
                <textarea cols="150" rows='3' placeholder="e.g. Hello, I am Albert. Ask me anything about my scientific contributions."></textarea>
                <p className="ppppp">0/2040</p>
            </div>
            <select>
                <option>More options</option>
                <option>Any options</option>
            </select><br />
            <b>Visibility</b>
            <br />
            <select>
            <IoGlobeOutline />
                <option>Public</option>
            </select>
        </div>
    )
}

export default Home