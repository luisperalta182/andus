import React, { useRef, useEffect, useState, Component  } from "react";
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { after, isEmpty } from 'lodash';
import { useStaticQuery, graphql } from "gatsby";

/* animation libraries */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProgressBar } from 'scrolling-based-progressbar';


/*css*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style.scss';


gsap.registerPlugin(ScrollTrigger);

const LatestPosts = ( props ) => {

	const { data } = props;

	useEffect(() => {

        const sections = gsap.utils.toArray(".horizontal")

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-area",
                pin: true,
                scrub: 1,
                end: () => "+=" + document.querySelector(".horizontal-area").offsetWidth
            }
        })	
	}, [])

	// console.log(this.state.categories)

	return (
        <>
            <ProgressBar height="9px"
                ContainerStyle={{backgroundColor:'#000',bottom:'0',top:'none'}} 
                ProgressBarStyle={{backgroundColor:'#F9DA49'}} />

                <div className="horizontal-area homeArticles">
                    <section className="horizontal headingPost">
                        <div className="">
                            <h1>They say sharing is caring, right? We create articles to help give you insight and inspiration.</h1>
                            <div className="divider" />
                            <p>As a Digital Creative Agency, we help our partners take their next step through our capabilities — structured step-by-step engagements.</p>	
                        </div>							
                    </section>
                    {
                        data.map( (post, index) => (
                                <section className="horizontal" key={index} >	
                                        <Link to={ post.uri }>
                                            <div className="horizontalPost" >
                                                <div>
                                                    <Image src={ post.featuredImage.node.sourceUrl } fluid />
                                                    <div className="infoPost">
                                                        <ul>
                                                        { 
                                                            post.categories.edges.map( category => (
                                                                <li key={category.node.id}>{ category.node.name }</li>
                                                        ))}
                                                        </ul>	
                                                        <p className="">{ post.title }</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                </section>
                            )
                        )
                    }
                </div>
         </>       
	);
};

export default LatestPosts;