import React from "react";
import MainBackground from "../../Images/MainBackground/MainBackground.jpg";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={MainBackground} alt="Background" width={1000}/>
            </div>
            <div className={s.item}>
                ava + description
            </div>
            <div className={s.item}>
                My posts
                <div className={s.item}>
                    New post
                </div>
                <div>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile