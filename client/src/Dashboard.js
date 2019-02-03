import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

class Dashboard extends Component {
  componentDidMount () {
    document.title = 'Dashboard | Bryce St. Pierre';
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Dashboard</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;