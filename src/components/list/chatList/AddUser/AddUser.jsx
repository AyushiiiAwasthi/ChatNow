import "./addUser.css";
import React from "react";
const AddUser = () => {
    return (
        <div className="addUser">
            <form>
                <input type="text" placeholder="Username" name="username"></input>
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" />
                    <span>Rebecca</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    );
};
export default AddUser;