import React from 'react';
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';

/*css*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const Approach = ( props ) => {

    const { homeApproachOne, homeApproachOneBolded, homeApproachTwo } = props.data;


    return (
        <div className="whiteBg">
            <Container className="approachComponent">
                <Row>
                    <Col>
                        <div className="approachHeader">
                            <h1>Approach<span>*</span></h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 9, offset: 1 }}>
                        <div className="approachContent">
                            <p>{ homeApproachOne } <span>{ homeApproachOneBolded }</span> </p>
                            <p>{ homeApproachTwo }</p>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 9, offset: 1 }}>
                        <Link className="mainButtonBlack" to="/approach/">
                           View all
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Approach;