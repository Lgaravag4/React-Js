import { Spinner } from "react-bootstrap";

const BsSpinner = () =>{
    return(
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default BsSpinner