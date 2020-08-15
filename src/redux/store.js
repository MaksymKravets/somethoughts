import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 18 },
      ],
      newPostText: "Chimichanga",
    },
    dialogsPage: {
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
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //наблюдатель обсервер паттерн
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
