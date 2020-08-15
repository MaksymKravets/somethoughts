const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Viktor" },
    { id: 2, name: "Alexei" },
    { id: 3, name: "Evgenii" },
    { id: 4, name: "Maksym" },
    { id: 5, name: "Oleg" },
    { id: 6, name: "Oksana" },
  ],
  messages: [
    { id: 1, message: "Hello darling..." },
    { id: 2, message: "Where is my money, Lebowski?!" },
    { id: 3, message: "How is your project?" },
    { id: 4, message: "Sup bro" },
    { id: 5, message: "Pathetic decision." },
    { id: 6, message: "You're the best man I ever had!!!" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
