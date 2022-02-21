import React, { useState, useEffect } from "react";

const User = ({ id }) => {
  const [user, setUser] = useState(null);

  async function fetchUserData(id) {
    const response = await fetch("/" + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years ago
      <br />
      lives in {user.address}
    </details>
  );
};

export default User;