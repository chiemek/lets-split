import React, { useState } from "react";
import Button from "./Button";

const AddFriend = () => {
  const [addFriend, setAddFriend] = useState("");
  const [addImg, setAddImg] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriends = {
      addFriend,
      addImg,
      id: crypto.randomUUID,
      balance: 1,
    };

    console.log(newFriends);
    console.log("i");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">🧑🏼‍🤝‍🧑🏻FriendName</label>
      <input
        type="text"
        value={addFriend}
        onChange={(e) => setAddFriend(e.target.value)}
      />
      <label htmlFor="">🧮Image Url</label>
      <input
        type="text"
        value={addImg}
        onChange={(e) => setAddImg(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default AddFriend;
