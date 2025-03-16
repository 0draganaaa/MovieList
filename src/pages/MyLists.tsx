import { Button, Container } from "react-bootstrap"
import { ListCreationModal } from "../components/ListCreationModal";
import { useState } from "react";
import { CategoryCards } from "../components/CategoryCards";

export const MyLists = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <Container className="list-container">
      <Container className="create-new-list-container">
        <Button onClick={() => setModalOpened(true)} variant="success">Create a new list</Button>
      </Container>
      <CategoryCards />
      <ListCreationModal
        modalOpened={modalOpened}
        closeModal={() => {
          setModalOpened(false);
        }}
      />
    </Container>
  )
}