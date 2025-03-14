import { Button, Container } from "react-bootstrap"
import { ListCreationModal } from "../components/ListCreationModal";
import { useState } from "react";
import { CategoryCards } from "../components/CategoryCards";

export const MyLists = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <Container className="list-container">
      <Button onClick={() => setModalOpened(true)} variant="secondary">Create a list</Button>
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