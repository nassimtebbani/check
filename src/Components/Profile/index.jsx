import React from "react";
import { UserContext } from "../../Hooks/UserContext";
import { Image, Form } from "react-bootstrap";
export default function Profile() {
  const { user } = React.useContext(UserContext);
  console.log(user);
  return (
    <Form>
      <Image src={user.src} className="rounded logo"></Image>
      <Form.Group>
        <Form.Label className="h3">Name :</Form.Label>
        <Form.Label>{user.fullName}</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label className="h3">Address :</Form.Label>
        <Form.Label>{user.address}</Form.Label>
      </Form.Group>
    </Form>
  );
}
