import React from 'react';
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';

/*css*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

const Partners = ( props ) => {

    const { partnersHeading, partnersHeadingBold, partnersList } = props.data;


    return (
        <div className="whiteBg">
            <Container className="partnersComponent">
                <Row>
                    <Col>
                        <div className="partnersHeader">
                            <h1>The Partners<span>*</span></h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 9, offset: 1 }}>
                        <div className="partnersContent">
                            <p>{ partnersHeading } <span>{ partnersHeadingBold }</span> </p>
                        </div>
                    </Col>
                    {
                        partnersList.map( (a, index) => {
                            return (
                                <Col key={index} md={{ span: 9, offset: 1 }}>
                                    <div className="rowPartners" >
                                        <p className="partnerName">{ a.partners.partnerCpt.partnerName }</p>
                                        <p className="partnerField">{ a.partners.partnerCpt.partnerField } </p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Partners;