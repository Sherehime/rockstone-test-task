import React, {useState} from "react";
import {useDispatch} from "react-redux";

export default function TextArea() {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" onChange={(event) => setMessage(event.target.value)}/>

            <button onClick={() => dispatch({
                type: "SEND_MESSAGE",
                value: message
            })}>
                SEND
            </button>
        </div>
    );
}
