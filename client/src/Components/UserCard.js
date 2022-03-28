import React from 'react';
import "./UserCard.css";

const userData = {
    name: "Devi Kumari",
    grade: 10,
    stars: 155,
    level: 15
};
function UserCard(props) {
    console.log("Props ", props)
    // console.log(name);
    return (

        // <>
        //     {props}
        // </>
        <div className="card user-card">
            <div className="card_title">{userData.name}</div>
            <div className="card_body">
                <p><i class="fas fa-star"></i>{userData.stars}</p>
                <p>Level {userData.level}</p>
                <p>Grade {userData.grade}</p>
            </div>
        </div>
    )
}
export default UserCard