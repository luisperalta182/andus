import React from 'react';
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';

/*css*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

const Capabilities = ( props ) => {

    const { capabilitiesHeading, capabilitiesText } = props.data;


    return (
        <div className="whiteBg">
            <Container className="capabilitiesSection">
                <Row>
                    <Col>
                        <div className="capabilitiesHeader">
                            <h1>Capabilities<span>*</span></h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="capabilitiesContent">
                            <p className="headingCapabilitiesContent">{ capabilitiesHeading }</p>
                            <div className="divider" />
                            <p>{ capabilitiesText }</p>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="capabilitiesTable">
                            <p className="capabilitiesTableHeader">Strategy</p>
                            <div className="divider" />
                            <div className="capabilitiesTableContent">
                                <ul>
                                    <li><p>Research & Discovery</p></li>
                                    <li><p>Site & Product Architecture</p></li>
                                    <li><p>Consultation</p></li>
                                </ul>
                                <ul>
                                    <li><p>UI / UX Strategy </p></li>
                                    <li><p>Customer Journey Mapping</p></li>
                                    <li><p>User Testing</p></li>
                                </ul>
                                <ul>
                                    <li><p>Competitor Analysis</p></li>
                                    <li><p>Platform SEO & Analytics</p></li>
                                    <li><p>Platform Migration</p></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="capabilitiesTable">
                            <p className="capabilitiesTableHeader">Design</p>
                            <div className="divider" />
                            <div className="capabilitiesTableContent">
                                <ul>
                                    <li><p>UI/UX Design</p></li>
                                    <li><p>Web Design</p></li>
                                    <li><p>Visual Design</p></li>
                                </ul>
                                <ul>
                                    <li><p>Moodboards</p></li>
                                    <li><p>Wireframing </p></li>
                                    <li><p>Prototyping</p></li>
                                </ul>
                                <ul>
                                    <li><p>Identity & Branding</p></li>
                                    <li><p>App Design</p></li>
                                    <li><p>Design Systems</p></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="capabilitiesTable">
                            <p className="capabilitiesTableHeader">Development</p>
                            <div className="divider" />
                            <div className="capabilitiesTableContent">
                                <ul>
                                    <li><p>Website / Web App Development</p></li>
                                    <li><p>Platform-specific Development</p></li>
                                    <li><p>E-commerce Development</p></li>
                                </ul>
                                <ul>
                                    <li><p>Headless Development</p></li>
                                    <li><p>Template / Theme Customization</p></li>
                                    <li><p>Custom / Static Websites</p></li>
                                </ul>
                                <ul>
                                    <li><p>Native App Development</p></li>
                                    <li><p>Hybrid App Development</p></li>
                                    <li><p>Admins & Dashboards</p></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="capabilitiesTable">
                            <p className="capabilitiesTableHeader">Marketing</p>
                            <div className="divider" />
                            <div className="capabilitiesTableContent">
                                <ul>
                                    <li><p>Growth Strategy</p></li>
                                    <li><p>PPC Campaigns</p></li>
                                    <li><p>Email Marketing</p></li>
                                </ul>
                                <ul>
                                    <li><p>Social Media Marketing</p></li>
                                    <li><p>Launch Strategies</p></li>
                                    <li><p>SEO</p></li>
                                </ul>
                                <ul>
                                    <li><p>SEM </p></li>
                                    <li><p>Copy Writing</p></li>
                                    <li><p>Campaigns</p></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Capabilities;