import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = () => {
    const newUser = {
      name,
      email,
    };
    addUser(newUser);
    history.push("/Mailer");
  };
  const onChange = (e) => {
    setName(e.target.value);
  };
  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Name"
        ></Input>
        <Label>Email</Label>
        <Input
          type="text"
          value={email}
          onChange={ChangeEmail}
          placeholder="Email"
        ></Input>
      </FormGroup>
      <Button onClick={onSubmit}>Submit</Button>
      <Link to="/Mailer" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
