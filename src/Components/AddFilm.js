import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';

const AddFilm=({setMovies, movies})=>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [posterURL,setPosterURL]=useState('')
  const [rating,setRating]=useState(0) 

  const handleAdd=()=>{
    setMovies([...movies,{title,description,posterURL,rating,id:Math.random()}])
    handleClose()
  }

    return(
        <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="Enter titre" onChange={(e)=> setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" onChange={(e)=> setDescription(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" onChange={(e)=> setPosterURL(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating onChange={(e)=> setRating(e.target.value)}/>
        </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default AddFilm