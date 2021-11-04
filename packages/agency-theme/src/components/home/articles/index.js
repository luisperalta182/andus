import React, { useRef, useEffect, useState, Component  } from "react";
import config from '../../../../client-config';
// import Link from 'gatsby-link';
import Link from 'gatsby-plugin-transition-link'
import { after, isEmpty } from 'lodash';
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
	const [currentData, setCurrentData] = useState([]);

	const scrollRef = useRef(true);
		
	useEffect(() => {
		setCurrentData(data);
	}, [])

	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger); 
	}

	// useEffect(() => {
	// 	if(currentData.length > 0 && scrollRef.current){
	// 		scrollRef.current = false;

	// 		const sections = gsap.utils.toArray(".horizontal")

	// 		gsap.to(sections, {
	// 			xPercent: -100 * (sections.length - 1),
	// 			ease: "none",
	// 			scrollTrigger: {
	// 				trigger: ".horizontal-area",
	// 				pin: true,
	// 				scrub: 1,

	// 				end: () => "+=" + document.querySelector(".horizontal-area").offsetWidth
	// 			}
	// 		})	
	// 	}
	// }, [currentData])


	const filterByCategory = (categoryName) =>{
		if (categoryName === "All"){
			setCurrentData(data);
			return;
		}

		const newData = data.filter(item => item.categories.edges.some(category => category.node.name === categoryName));
		setCurrentData(newData);
	}


	// console.log(this.state.categories)

	return (
		<>
		{ currentData.length > 0 && 
			<div className="">
				<ProgressBar height="9px"
					ContainerStyle={{backgroundColor:'#000',bottom:'0',top:'none'}} 
					ProgressBarStyle={{backgroundColor:'#F9DA49'}} />

						<section className="headingPost">
							<div className="">
								<h1>They say sharing is caring, right? We create articles to help give you insight and inspiration.</h1>
								<div className="divider" />
								<p>As a Digital Creative Agency, we help our partners take their next step through our capabilities — structured step-by-step engagements.</p>
							
								<div className="filters">
									<button onClick={()=> filterByCategory("Insights")}>Insights</button>								
									<button onClick={()=> filterByCategory("Inspiration")}>Inspirations</button>
									<button onClick={()=> filterByCategory("Uncategorized")}>Uncategorized</button>

									<button onClick={()=> filterByCategory("All")}>All</button>
								</div>	
							</div>							
						</section>

						<section className="postSection">
							<div className="flexContainer">
								{
									currentData.map( (article, index) => (
											<section className="horizontal" key={index} >	
												<AniLink to={ article.uri } cover direction="left" bg="rebeccapurple">	
														<div className="horizontalPost" >
															<div>
																<Image src={ article.featuredImage.node.sourceUrl } fluid />
																<div className="infoPost">
																	<ul>
																	{ 
																		article.categories.edges.map( category => (
																			<li key={category.node.id}>{ category.node.name }</li>
																	))}
																	</ul>	
																	<p className="">{ article.title }</p>
																</div>
															</div>
														</div>
													</AniLink>
											</section>
										)
									)
								}
							</div>	
						</section>
			</div>
		}
		</>
	);
};

export default LatestPosts;