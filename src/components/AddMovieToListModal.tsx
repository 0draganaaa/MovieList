import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Modal, CloseButton, Dropdown, Button, Row } from "react-bootstrap";
import { ListContext } from "../context/ListProvider";

export const AddMovieToListModal: FunctionComponent<{
  movieId: number | null;
  setMovieId: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({ movieId, setMovieId }) => {
  const [selectedListId, setSelectedListId] = useState<number | null>(null)
  const [selectedListName, setSelectedListName] = useState<string>("Select a list");
  
  const listCntx = useContext(ListContext);

  const closeModal = () => {
    setMovieId(null);
  }

  const addMovieToTheList = () => {
    if(selectedListId){
      listCntx?.addMovieToAList(selectedListId, movieId!);
    }
    closeModal();
  }

  useEffect(() => {
    listCntx?.getLists()
  }, [listCntx])

  const lists = listCntx?.lists;

  return (
    <Modal
      show={!!movieId}
      onHide={closeModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="button-container">
        <CloseButton onClick={closeModal} />
      </div>
      <Modal.Header className="header pt-0">
        <div className="fs-1 text-center w-100">Add the movie to one of your lists</div>
      </Modal.Header>
      <Modal.Body className="content mb-4">
        <Dropdown className="mb-2">
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            {selectedListName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {lists?.map((list) => (
              <Dropdown.Item
                key={list.id}
                onClick={() => {
                setSelectedListId(list.id);
                setSelectedListName(list.name);
              }}>
                {list.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Row>
          <Button variant="success" onClick={() => addMovieToTheList()}>Add the movie to a list</Button>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
