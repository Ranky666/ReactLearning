import React from 'react';

import s from './Post.module.css';

//let s = {
//  'nav': "Navbar_nav__XrbAI",
//  'item':"Navbar_item__3fuU0"
//}


const Post = (props) => {


    return (<div className={s.item}>
        <img src='https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' ></img>
    {props.message}
        <div>
            <span>Like</span>
        </div>


    </div>
    )

}
export default Post;