
import DiceImage from './dices 1.png';
import './HomePage.css';
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="homepage-container">
        <div className="homepage-frame-container">
          <div className="homepage-frame1">
            <img src={DiceImage} alt="" />
          </div>
          <div className="homepage-frame2">
            <div className="homepage-frame2-child">
              <h1>DICE GAME</h1>
              <button className='homepage-start-button'><Link to="/GamePage">Play Now</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
