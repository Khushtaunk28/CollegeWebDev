import React from "react";
const UserProfile = ({user}) => {
    if(!user || !user.name){
        throw new Error("User name is required");
    }
    return (
        <div>
            <h1>User Profile</h1>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};
export default UserProfile;