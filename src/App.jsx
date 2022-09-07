import "@rocket.chat/icons/dist/rocketchat.css";
import { RCComponent } from "embeddedchat";

function App() {
  return (
    <div className="App">
      <h1>Hello! Welcome to <span style={{
        color: "#F5455C",
      }}>EmbeddedChat</span> demo.</h1>
      <RCComponent
        moreOpts={true}
        width="100%"
        height="35vh"
        GOOGLE_CLIENT_ID={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        host={import.meta.env.VITE_ROCKETCHAT_HOST}
        roomId={import.meta.env.VITE_ROCKETCHAT_ROOM_ID}
        channelName="general"
        anonymousMode={true}
        headerColor='#F5455C'
      />
    </div>
  );
}

export default App;
