import React, { useState } from "react";
import BackButton, { MenuButton } from "../BackButton";
import Menu from "../Menu";

const AppNavigation = ({ showBackButton, user }) => {
  const [open, setOpen] = useState(false);

  if (!user) return null;
  return (
    <div className="app-navigation">
      <Menu
        userName={user.email}
        userEmail={user.phoneNumbers[0]}
        userImg={user.avatar}
        open={open}
        handleClose={() => setOpen(false)}
      />
      {showBackButton ? (
        <BackButton />
      ) : (
        <MenuButton onClick={() => setOpen(true)} />
      )}
    </div>
  );
};

export default AppNavigation;
