const initState = {
  posts: [
    { id: "1", title: "title1", text: "text1 text2 text2 " },
    { id: "2", title: "title2", text: "text2 text2 text2 " },
    { id: "3", title: "title3", text: "text3 text3 text2 " },
    { id: "4", title: "title4", text: "text4 text4 text4 " },
    { id: "5", title: "title4", text: "text4 text4 text4 " }
  ]
};

const postReducer = function(state = initState, action) {
  console.log("reducer>>", action);
  if (action.type === "INIT_POSTS") {
    return {
      ...state,
      posts: initState.posts
    };
  }
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, action.post]
    };
  }
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }

  return state;
};

export default postReducer;
