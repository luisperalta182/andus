import React from 'react';
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import Marquee from 'react-double-marquee';

/*images*/
import  logo from '../../../images/logo-pages.png';

/*css*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const AboutHero = ( props ) => {

    const { heroTaglineOne, heroTaglineTwo, heroTaglineYellow} = props.data;


    return (
        <div>
            <Container className="heroComponent">
                <Row>
                    <Col>
                        <div className="heroHeader">
                            <div className="heroLogoContainer">
                                <img className="heroLogo" src={logo} alt="&US" />   
                            </div>
                            <h1>Digital Creative Agency<span>*</span> </h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} >
                        <div className="Tagline">
                            <h2>{ heroTaglineOne }</h2>
                            <h2><strong>{ heroTaglineTwo }</strong> <span>{ heroTaglineYellow }</span></h2> 
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="no-pad">
                <div className="heroImages about">
                    <div className="heroMarquee"
                        style={{
                            width: '100%',
                            whiteSpace: 'nowrap',
                        }}
                        >
                        <Marquee direction="left" speed={0.2}>
                            SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY 
                        </Marquee>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default AboutHero;