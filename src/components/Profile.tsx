import React from "react";
import MainBackground from "../Images/MainBackground/MainBackground.jpg";

const Profile = () =>{
    return (
        <div className='content'>
            <div>
                <img src={MainBackground} alt="Background" width={1000}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile