import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Animate from 'react-smooth';
import './App.css';
import Header from './components/header';
import BadgeList from './components/badgeList';
import Badges from './constants/badges';
import BadgeDisplay from './components/badgeDisplay';
import Footer from './components/footer';

function App() {
  const [badges, setBadges] = useState(Badges);
  const [selectedBadge, setSelectedBadge] = useState(badges[0]);
  const updateAllBadges = (bs) => {
    setBadges(bs);
    let aBadge = badges[badges.findIndex((x) => x.isActive === true)];
    setSelectedBadge(aBadge);
  };
  return (
    <div className='App'>
      <Header />
      <Animate to='1' from='0' attributeName='opacity'>
        <Container className='' fluid={true}>
          <Row className='contained'>
            <Col className='App-left' sm={12} xl={5}>
              <BadgeList updatedBadges={updateAllBadges} />
            </Col>
            <Col xl={7} sm={0} className='App-right d-none d-xl-block'>
              <BadgeDisplay badge={selectedBadge} />
            </Col>
          </Row>
          <Row className='App-footer'>
            <Footer />
          </Row>
        </Container>
      </Animate>
    </div>
  );
}

export default App;
