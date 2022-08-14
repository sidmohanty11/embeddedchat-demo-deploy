import "@rocket.chat/icons/dist/rocketchat.css";
import { RCComponent } from "embeddedchat";

function App() {
  return (
    <div className="App">
      <RCComponent
        moreOpts={true}
        width="100%"
        height="40vh"
        GOOGLE_CLIENT_ID={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        host={"http://localhost:3000"}
        roomId={"GENERAL"}
        channelName="GENERAL"
        anonymousMode={false}
        isFullScreenFromStart={false}
      />
    </div>
  );
}

export default App;
