import React from "react";
import UserCard from "./UserCard";

function UserList(props) {
  return (
    <div className="ui cards">
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={(id) => props.handleUserClick(id)}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;