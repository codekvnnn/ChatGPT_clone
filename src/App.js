import logo from './logo.svg';
import './App.css';
import gtpLogo from './assets/chatgpt.svg';
import addBtb from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';



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
                <div className="chat">
                    <img className='chatImg' src={userIcon} alt=""/><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non cum nostrum officia omnis officiis optio, suscipit consequuntur nobis iste.</p>
                </div>
                <div className="chat bot">
                    <img className='chatImg' src={gptImgLogo} alt=""/><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro iure voluptates labore, libero quasi illum! Quas nulla natus quidem. Fugit molestiae at harum illo veniam reprehenderit quisquam ea consectetur, ipsam itaque dolorem ducimus quia vitae delectus velit explicabo eum consequuntur debitis, ad labore odit. Maxime quo vitae eius quod. Velit ducimus officia dolores dolore nobis molestiae suscipit sed qui perferendis iste dolor alias, harum maiores, repellat temporibus dignissimos magnam fuga consequatur. Molestiae quo ex laborum velit vitae repudiandae non quidem suscipit odit autem similique iure deleniti, error officiis at atque. Unde natus eius doloremque beatae facere expedita, tempore quis?</p>
                </div>
                <div className="chatFooter">
                    <div className="inp">
                      <input type="text" placeholder='Send a message' /> <button className="send"><img src={sendBtn} alt="Send"/></button>
                      </div> 
                      <p>ChatGPT may produce incorrect results.</p>
                </div>
      </div>
    </div>
  );
}

export default App;
