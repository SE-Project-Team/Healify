import React from "react";
// import liststyles from "./ContactList.module.css";
import { Heading } from "./Heading";
import { UserList } from "./UserList";
import styles from "./Email.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
export const ContactHome = ({ setOpenModal }) => {
  return (
    <div className={`${styles.contactsWrapper}`}>
      <Heading />
      <UserList />
    </div>
  );
};
export default ContactHome;
