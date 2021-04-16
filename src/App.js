import "./styles.scss";
import "semantic-ui-css/semantic.min.css";
import React, {useState} from "react";
import {useSwipeable} from "react-swipeable";
import TextArea from "./components/TextArea";
import Messages from "./components/Messages";
import Timer from "./components/Timer";

function App() {
    const [toggle, setToggle] = useState("hide");
    const handlers = useSwipeable({
        onSwipedLeft: () => setToggle("active"),
        onSwipedRight: () => setToggle("hide"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });


  return (
    <div className="App">
        <div {...handlers} className="startPage">
            <TextArea />
            <Messages />
            <Timer className={toggle} />
        </div>
    </div>
  );
}

export default App;
