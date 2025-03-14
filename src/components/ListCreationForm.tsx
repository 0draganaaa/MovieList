import { Button, Form } from "react-bootstrap"
import { ListContext } from "../context/ListProvider";
import { FunctionComponent, useContext, useState } from "react";
import { IListDetails } from "../types/lists";

export const ListCreationForm: FunctionComponent<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const [listDetails, setListDetails] = useState<IListDetails>({
    name: "",
    description: ""
  });

  const listCntx = useContext(ListContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setListDetails({ ...listDetails, [e.target.name]: e.target.value });
  };

  const createNewList = () => {
    if (!listDetails.name.trim()) {
      alert("List name is required");
      return;
    }

    listCntx?.createList(listDetails);
    setListDetails({ name: "", description: "" });
    closeModal();
  }

  return (
    <Form className="list-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>List name</Form.Label>
        <Form.Control
          type="input"
          name="name"
          placeholder="ex. Action movies"
          value={listDetails.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>List description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          rows={3}
          value={listDetails.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button onClick={() => createNewList()} variant="secondary">Create a list</Button>
    </Form>
  )
}