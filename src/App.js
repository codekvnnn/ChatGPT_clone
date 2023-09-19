import logo from './logo.svg';
import './App.css';
import gtpLogo from './assets/chatgpt.svg'
import addBtb from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
          <div className="sideBar">
              <div className="upperSide">
                  <div className="upperSideTop"><img src={gtpLogo} alt="logo" className="logo" /><span className="brand">ChatGPT </span>
                  <button className="midBtn"><img src={addBtb} alt="new chat" className="addBtn"/>New Chat</button>
                  <div className="upperSideBottom">
                      <button className="query"><img src={msgIcon} alt="Query" />What is Programming ?</button>
                      <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
                  </div>
              </div>
              <div className="lowerSide">
                  <div className="listItems"><img src={home} alt="home" className="listItemsImg"/>Home</div>
                  <div className="listItems"><img src={saved} alt="saved" className="listItemsImg"/>Saved</div>
                  <div className="listItems"><img src={rocket} alt="upgrade" className="listItemsImg"/>Upgrade to Pro</div>
              </div>
          </div>
          <div className='main'></div>
    </div>
  );
}

export default App;
