import React from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../Hooks/UserContext";
import image from "../../assets/photo.jpg";

export default function MyForm() {
  const { setUser } = React.useContext(UserContext);
  const addMe = (e) => {
    console.log("sub");
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.src = image;
    setUser(data);
  };
  return (
    <Form onSubmit={(e) => addMe(e)}>
      <Form.Control type="file" name="src"></Form.Control>
      <Form.Group>
        <Form.Control
          type="text"
          name="fullName"
          placeholder="Full Name"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="address"
          placeholder="Address"
        ></Form.Control>
      </Form.Group>
      <Button type="submit">submit</Button>
    </Form>
  );
}
