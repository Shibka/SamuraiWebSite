import React from "react";
import MainBackground from "../../../../Images/MainBackground/MainBackground.jpg"
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={MainBackground} alt="Background" width={1000}/>
            </div>
            <div className={'descriptionBlock'}>
                ava + description
            </div>

        </div>
    )
}
export default ProfileInfo