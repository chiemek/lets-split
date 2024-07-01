import React from "react";
import Button from "./Button";

const AddFriend = () => {
  return (
    <form className="form-add-friend">
      <label htmlFor="">🧑🏼‍🤝‍🧑🏻FriendName</label>
      <input type="text" name="" id="" />
      <label htmlFor="">🧮Image Url</label>
      <input type="text" name="" id="" />
      <Button>Add</Button>
    </form>
  );
};

export default AddFriend;
