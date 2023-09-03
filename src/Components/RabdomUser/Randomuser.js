import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://randomuser.me/api"
const Randomuser = () => {
  const [userData, setUserData] = useState(null);
  const generator_user = () => {
    axios.get(API_URL).then((res) => {
      if (res) {
        setUserData(res.data.results[0]);
      }
    });
  };
  useEffect(() => {
    console.log("USEEFFECT AGAIN");
    generator_user();
  }, []);
  return (
    <>
      <div className="wrp">
        <div className="user_ran">
      <h1>Random User Generator</h1>
          {userData ? (
            <div>
              <h1>User Information</h1>
              <img src={userData?.picture?.large} alt="User" />
              <p>
                Name: {userData?.name?.title} {userData?.name?.first}{" "}
                {userData?.name?.last}
              </p>
              <p>Email: {userData?.email}</p>
              <p>Gender: {userData?.gender}</p>
              <p>
                Location: {userData?.location?.city},{" "}
                {userData?.location?.state}, {userData?.location?.country}
              </p>
              <p>Phone: {userData?.phone}</p>
              <p>
                Date of Birth:{" "}
                {new Date(userData?.dob?.date).toLocaleDateString()}
              </p>
              <p>
               Age:{" "}
               {userData?.registered?.age}
              </p>
              <button onClick={generator_user}>Generate User</button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Randomuser;
