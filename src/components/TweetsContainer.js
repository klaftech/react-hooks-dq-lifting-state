import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(1);

  function handleUserClick(id){
    setSelectedUser(id)
  }
  //console.log("In TweetsContainer, state is", users);
  
  function handleTweetLike(props){
    //determine selected tweet's user 
    const userIndex = users.findIndex((user) => user.handle === props.handle)
    //console.log("userIndex ",userIndex)

    //determine selected tweet's index
    const tweetIndex = users[userIndex]['tweets'].findIndex((tweet) => tweet.id === props.tweet.id)
    //console.log("tweetIndex ",tweetIndex)
    
    //create copy of state data
    const newUsersData = [
      ...users
    ]
    //update tweet favorite count using indexs determined above
    newUsersData[userIndex].tweets[tweetIndex].favorite_count += 1
    
    //update state
    setUsers(newUsersData)
  }

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleUserClick={handleUserClick} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={users.find((user) => user.id === selectedUser)} handleTweetLike={handleTweetLike} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;