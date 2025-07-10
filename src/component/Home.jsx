import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="mt-3">
          Use API from <b>https://reqres.in</b> to get data
        </div>
        <div>All features:</div>
        <ul>
          <li>1. Login</li>
          <li>2. Create user</li>
          <li>3. Edit user</li>
          <li>4. Delete user</li>
          <li>5. Display list user</li>
          <li>6. Search user by Email</li>
          <li>7. Sort by First name</li>
          <li>8. Import with .csv file</li>
          <li>9. Export with .csv file</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
