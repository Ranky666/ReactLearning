import React from 'react';

import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

//let s = {
//  'nav': "Navbar_nav__XrbAI",
//  'item':"Navbar_item__3fuU0"
//}


const Profile = () => {
    return (
        <div >
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIcuFqvwB3T40TUx9Dompas6AFhSksRLPcZw&usqp=CAU' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;