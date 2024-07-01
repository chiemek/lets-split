import React from "react";

const Friends = ({ data }) => {
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          <img src={data.image} alt={data.name} />
          <h3>{data.name}</h3>
          <p>{data.balance === 0 && "You are even"}</p>
          <p className={data.balance >= 1 ? "green" : "red"}>
            {data.balance >= 1 && `${data.name} owe you ${data.balance}$`}
          </p>
          <p className={data.balance >= 1 ? "green" : "red"}>
            {data.balance < 0 &&
              `You owe ${data.name} ${Math.abs(data.balance)}$`}
          </p>
          <button className="button">Select</button>
        </li>
      ))}
    </ul>
  );
};

export default Friends;