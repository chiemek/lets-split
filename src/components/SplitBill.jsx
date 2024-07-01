import React from "react";
import Button from "./Button";

const SplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>SPLIT BILL WITH X</h2>
      <label htmlFor="">💰 Bill Value</label>
      <input type="text" />
      <label htmlFor="">🧍‍♂️ Your Expense:</label>
      <input type="text" />
      <label htmlFor="">🧑🏼‍🤝‍🧑🏻 X Expense</label>
      <input type="text" disabled />
      <label htmlFor="">🧑🏼 Who is Paying the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="Friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default SplitBill;
