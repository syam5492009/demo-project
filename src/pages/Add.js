import { useContext, useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ColorContext } from "../App";
import { postAPI } from "../constants";

const Add = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  // Create a DOM reference Object

  const idRef = useRef();

  const color = useContext(ColorContext);

  const history = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch(postAPI, {
      method: "POST",

      body: JSON.stringify({ id: id, name: name }),
      headers: {
        "Content-type": "application/json",
      },
    });

    history("/");
  };

  console.log(color);

  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <div style={{ background: color, height: "100%" }}>
      <Form className="d-grid gap-2" onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <Form.Group className="mb-10">
          <Form.Control
            type="text"
            placeholder="Enter id"
            required
            onChange={handleIdChange}
            value={id}
            ref={idRef}
          />

          {/* <input type='text' name='' value="10" onChange=/> */}

          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            onChange={handleNameChange}
            value={name}
          />
          <Form.Control type="submit" />
        </Form.Group>
      </Form>
    </div>
  );
};
export default Add;
