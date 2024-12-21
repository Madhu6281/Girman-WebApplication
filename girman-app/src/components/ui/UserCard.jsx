import React, { useState } from "react";
import UserDialog from "./dialog"; // Ensure the path is correct
import "./UserCard.css"; // Import CSS


const UserCard = ({ user }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="user-card">
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{user.city}</p>
      <p>{user.contact_number}</p>
      <button onClick={() => setOpenDialog(true)}>Fetch Details</button>     
      
      {openDialog && (
        <UserDialog user={user} onClose={() => setOpenDialog(false)} />
      )}
    </div>
  );
};

export default UserCard;
