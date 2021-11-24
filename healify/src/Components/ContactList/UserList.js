import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
export const UserList = () => {
    const { users , removeUser } = useContext(GlobalContext);
    
    return (
        
            <ListGroup className="mt-5"> 
        
                {users.length > 0 ? (
                    <div>
                     {users.map(users => (
                    <ListGroupItem className="d-flex" style={{"border":"0.25px solid black"}} >
                       {/* <div style={{"flexDirection":"row"}}>
                        <div style={{"flexDirection":"column"}}> */}
                    <strong>{users.name}</strong>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                     
                    <h6>{users.email}</h6>
                    
                     {/* <p>bukkeroopa@gmail.com</p>  */}
                    <div className="ml-auto">
               
            <Button onClick={() =>removeUser(users.id)} color="danger">Delete</Button>
           
             </div>
             
            
                </ListGroupItem>
               
                 
                 ))}
                
                    </div>
                ) : (
                    <h3 className="text-center">No Contacts</h3>
                )}
               
            </ListGroup>
        
    )
}
