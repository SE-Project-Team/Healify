import React from 'react';
// import liststyles from "./ContactList.module.css";
import {Heading } from "./Heading";
import {UserList } from "./UserList";
export const ContactHome = ({ setOpenModal }) => {
    return (
      <div>
        <Heading />
        <UserList />
        
      
      </div>
    
    )
};
export default ContactHome;