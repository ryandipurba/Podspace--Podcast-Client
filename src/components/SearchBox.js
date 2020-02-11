import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const SearchBox = (props) => {
    return (
        <div className="search-bar">
            <form>
                <Row>
                    <Col md={11}>
                        <input type="text" className="form-control" placeholder="search" onChange={props.handleSearchInput} />
                    </Col>
                    <Button onClick={props.handleButtonSearch} type="button" variant="outline-success" >Search</Button>
                </Row>
            </form>
        </div>
    );
};

export default SearchBox;