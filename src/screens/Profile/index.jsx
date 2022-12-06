import React from "react";
import { useContext } from "react";
import { Avatar } from "../../components/Avatar";
import BackButton from "../../components/BackButton";
import Heading from "../../components/Heading";
import { AuthContext } from "../../context/Auth";

import AppLayout from "../../layouts/AppLayout";

export const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <AppLayout>
      <section className="profile">
        <BackButton />
        <Heading size="big">Your profile</Heading>
        <div className="profile__content">
          <Avatar src={user.avatar} modifier="mb-6" />
          <div className="profile__content__group">
            <Heading>First name</Heading>
            <Heading size="small">{user.firstName}</Heading>
          </div>
          <div className="profile__content__group">
            <Heading>Last name</Heading>
            <Heading size="small">{user.lastName}</Heading>
          </div>
          <div className="profile__content__group">
            <Heading>Email</Heading>
            <Heading size="small">{user.email}</Heading>
          </div>
          <div className="profile__content__group">
            <Heading>Phone numbers</Heading>
            {user.phoneNumbers.map((number) => (
              <Heading size="small" key={number}>
                {number}
              </Heading>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};
