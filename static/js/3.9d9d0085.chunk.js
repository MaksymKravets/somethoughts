(this.webpackJsonpzanovobliyat=this.webpackJsonpzanovobliyat||[]).push([[3],{287:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(93);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(u){r=!0,o=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},290:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1S4nt"}},291:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__8ZUCv",posts:"MyPosts_posts__2nV9A"}},292:function(e,t,a){e.exports={item:"Post_item__3E_yq"}},297:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a(51),o=a(53),s=a(52),l=a(0),u=a.n(l),i=a(290),c=a.n(i),p=a(62),m=a(287),f=function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(l.useState)(e.status),s=Object(m.a)(o,2),i=s[0],c=s[1];Object(l.useEffect)((function(){c(e.status)}),[e.status]);return u.a.createElement("div",null,!n&&u.a.createElement("div",null,u.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"No Status")),n&&u.a.createElement("div",null,u.a.createElement("input",{onChange:function(t){c(t.currentTarget.value),e.updateStatus(i)},onBlur:function(){r(!1)},value:i,autoFocus:!0})))},d=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?u.a.createElement("div",null,u.a.createElement("div",{className:c.a.descriptionBlock},u.a.createElement("img",{src:t.photos.large,alt:"profile"}),u.a.createElement(f,{status:a,updateStatus:n}),u.a.createElement("div",null,u.a.createElement("p",null,t.fullName)),u.a.createElement("div",null,u.a.createElement("p",null,t.aboutMe)),u.a.createElement("div",null,u.a.createElement("p",null,"contacts")),u.a.createElement("div",null,u.a.createElement("p",null,"Looking For a Job:",t.lookingForAJob)),u.a.createElement("div",null,u.a.createElement("p",null,"Looking For a Job Description: ",t.lookingForAJobDescription," ")))):u.a.createElement(p.a,null)},b=a(92),v=a(291),E=a.n(v),h=a(292),g=a.n(h);var y=function(e){return u.a.createElement("div",{className:g.a.item},u.a.createElement("img",{src:"https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale",alt:"post-pic"}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,e.likesCount," Likes")))},S=a(84),j=a(126),k=a(81),P=a(32),O=void 0,_=Object(k.a)(10),w=function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",null,u.a.createElement(S.a,{name:"newPostText",component:P.b,placeholder:"Post message",validate:[k.b,_]})),u.a.createElement("div",null,u.a.createElement("button",null,"Add post")))};w=Object(j.a)({form:"ProfileAddNewPostForm"})(w);var x=u.a.memo((function(e){var t=e.posts.map((function(e){return u.a.createElement(y,{message:e.message,likesCount:e.likesCount})}));return u.a.createElement("div",{className:E.a.postsBlock},u.a.createElement("h3",null,"My posts"),u.a.createElement(w,{onSubmit:function(e){O.props.addPost(e.newPostText)}}),u.a.createElement("div",{className:E.a.posts},t))})),A=a(21),B=Object(A.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(b.a)())}}}))(x),C=function(e){return u.a.createElement("div",null,u.a.createElement(d,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),u.a.createElement(B,null))},I=a(10),N=a(9),T=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),setTimeout((function(){e.props.getStatus(t)}),1e3)}},{key:"render",value:function(){return u.a.createElement(C,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(u.a.Component);t.default=Object(N.d)(Object(A.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:b.d,getStatus:b.c,updateStatus:b.e}),I.f)(T)}}]);
//# sourceMappingURL=3.9d9d0085.chunk.js.map