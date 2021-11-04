import React, { useRef, useEffect, Component  } from "react";
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { after, isEmpty } from 'lodash';

/* animation libraries */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProgressBar } from 'scrolling-based-progressbar';

/*css*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = ( props ) => {

    const { team } = props.data;

	const {useEffect} = React

	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger); 
	}

	useEffect(() => {
		let sections = gsap.utils.toArray(".horizontal")

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".horizontal-area-team",
				pin: true,
				scrub: 1,

				end: () => "+=" + document.querySelector(".horizontal-area-team").offsetWidth
			}
		})
	})


	return (
		<div className="horizontal-area-team">
			<ProgressBar height="9px"
				ContainerStyle={{backgroundColor:'#000',bottom:'0',top:'none'}} 
				ProgressBarStyle={{backgroundColor:'#F9DA49'}} />
	
					<section className="horizontal headingPost">
						<div className="horizontalPost">
							<h1>We’re an international body of people led by a remote lifestyle with an agency approach.</h1>
							<div className="divider" />
							<p>Meet some of the leadership and team leads, that run the day-to-day. We also have fancy zoom pics for you to enjoy. Cheers!</p>
						</div>
					</section>


				{			
					team.map( (a, index) => {
						return (
							<section className="horizontal" key={index} >	
							{
								<div className="horizontalPost" >
									<div>
										<img src={ a.teamMember.teamMember.photo.sourceUrl } />
										<div className="infoPost">
											<p className="name">{ a.teamMember.teamMember.name }</p>
											<p className="position">{ a.teamMember.teamMember.position }</p>
										</div>
									</div>
								</div>
							}
							</section>
						)
					})
				}
		</div>
	);
};

export default teamMembers;