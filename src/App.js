import React, { useState } from "react";
import "./index.css";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import SplitBill from "./components/SplitBill";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [AddFriend, setAddFriend] = useState("");
  const handleToggle = () => {
    setToggleAdd(() => !toggleAdd);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <Friends data={initialFriends} />
        {toggleAdd && <AddFriend />}
        <Button onClick={handleToggle}>
          {toggleAdd ? "CLose" : "Add Friend"}
        </Button>
      </div>
      <SplitBill />
    </div>
  );
};

export default App;
