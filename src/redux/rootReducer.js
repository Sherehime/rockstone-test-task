const initialState = {
    messages: [],
};

export const sendMessage = {type: "SEND_MESSAGE"};

export default function rootReducer(state = initialState, action) {
    if (action.type === "SEND_MESSAGE") {
        return {
            messages: [...state.messages, action.value]
        };
    }
    return state
}
