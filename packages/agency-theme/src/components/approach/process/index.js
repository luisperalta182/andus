import React, { useRef, useEffect, Component  } from "react";
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';

/* animation libraries */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/*css*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const Process = ( props ) => {

    
    const { processHeader } = props.data;

    gsap.registerPlugin(ScrollTrigger );

    
    useEffect(() => {
        
        var points = gsap.utils.toArray('.point');
        var indicators = gsap.utils.toArray('.indicator');
        
        var height = 100 * points.length;
        
        gsap.set('.indicators', {display: "flex"});
        
        var tl = gsap.timeline({
          duration: points.length,
          scrollTrigger: {
            trigger: ".philosophie",
            start: "top center",
            end: "+="+height+"%",
            scrub: true,
            id: "points",
          }
        })
        
        var pinner = gsap.timeline({
          scrollTrigger: {
            trigger: ".philosophie .wrapper",
            start: "top top",
            end: "+="+height+"%",
            scrub: true,
            pin: ".philosophie .wrapper",
            pinSpacing: true,
            id: "pinning",
            markers: true
          }
        })
        
        
        
        points.forEach(function(elem, i) {
          gsap.set(elem, {position: "absolute", top: 0});
        
          tl.to(indicators[i], {backgroundColor: "#000", duration: 0.25}, i)
          tl.from(elem.querySelector('.numberScrolling'), {autoAlpha:0}, i)
          tl.from(elem.querySelector('.contentScrolling'), {autoAlpha:0, translateY: 100}, i)
          
          if (i != points.length-1) {
            tl.to(indicators[i], {backgroundColor: "#000", duration: 0.25}, i+0.75)
            tl.to(elem.querySelector('.contentScrolling'), {autoAlpha:0, translateY: -100}, i + 0.75)
            tl.to(elem.querySelector('.numberScrolling'), {autoAlpha:0}, i + 0.75)
          }
          
        });        

	})


    return (
        <div className="processComponent">
            <Container className="processSection">
                <Row>
                    <Col>
                        <div className="processHeaderDiv">
                            <h1>Process<span>*</span></h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="processContent">
                            <p className="processHeaderContent">
                                { processHeader }
                            </p>
                            <div className="divider" />
                        </div>
                    </Col>        
                </Row>
            </Container>
            <Container fluid>
                <div className="processImage" /> 
            </Container>
            <Container>
                <section className="philosophie">
                    <div className="wrapper">
                        <div className="indicators">
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                            <div className="indicator"></div>
                        </div>
                        <div className="point">
                            <div className="numberScrolling">
                                    <span className="whiteColor">01</span> <span>04</span>
                             </div>
                            <div className="contentScrolling">
                                <p>
                                    As a team, we’re design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution.
                                </p>
                            </div>
                        </div>
                        <div className="point">
                            <div className="numberScrolling">
                                    <span className="whiteColor">02</span> <span>04</span>
                             </div>
                            <div className="contentScrolling">
                                <p>
                                    As a team, we’re design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution.
                                </p>
                            </div>
                        </div>
                        <div className="point">
                            <div className="numberScrolling">
                                    <span className="whiteColor">03</span> <span>04</span>
                             </div>
                            <div className="contentScrolling">
                                <p>
                                    As a team, we’re design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution.
                                </p>
                            </div>
                        </div>
                        <div className="point">
                            <div className="numberScrolling">
                                    <span className="whiteColor">04</span> <span>04</span>
                             </div>
                             <div className="contentScrolling">
                                <p>
                                    As a team, we’re design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
};

export default Process;