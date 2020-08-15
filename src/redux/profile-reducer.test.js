import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 18 },
  ],
};

it("length of posts shoud be incremented", () => {
    //1.test data
  let action = addPostActionCreator("jakakagogog");
    //2. action
  let newState = profileReducer(state, action);
    //3. expectations
  expect(newState.posts.length).toBe(3);
});

it("message of new post should be", () => {
  let action = addPostActionCreator("jakakagogog");
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe("jakakagogog");
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
 let newState = profileReducer(state,action);
 expect(newState.posts.length).toBe(1);
})
