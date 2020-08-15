import React from "react";
import s from "./Post.module.css";
function Post(props) {
  return (
    <div className={s.item}>
      <img
        src="https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        alt="post-pic"
      />
      {props.message}
      <div>
        <span>{props.likesCount} Likes</span>
      </div>
    </div>
  );
}

export default Post;
