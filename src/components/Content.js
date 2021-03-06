import React from 'react';
import { Col } from 'react-bootstrap';

function Content(props) {
  return (
      <div>
        <div className="j-content">
          <Col md={12}>
            { props.children }
          </Col>
        </div>
      </div>
  )
}

export default Content;
