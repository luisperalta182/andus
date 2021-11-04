import Link from 'gatsby-link';
import { normalizePath, sanitize } from "../../utils/functions";
import PropTypes from "prop-types";
import React from "react";

/*images*/
import  logo from '../../images/logo-pages-black.png';


import { Container, Row, Col } from 'react-bootstrap';

const Footer = ( { data } ) => {
	const { footer: { copyrightText, socialLinks, sidebarOne }, footerMenuItems } = data.HWGraphQL;

	return (
		<footer className="footer whiteBg">
            <Container className="heroComponent">
                <Row>
                    <Col>
                        <div className="heroHeader">
                            <div className="heroLogoContainer">
                                <img className="heroLogo" src={logo} alt="&US" />   
                            </div>
                            <h1>Contact Us<span>*</span> </h1>
                        </div>
                    </Col>        
                </Row>
            </Container>

			<Container>
				<Row>
					<Col md={{ span: 9, offset: 1 }}>
						<div className="widgetFooter">
							<div  dangerouslySetInnerHTML={ { __html: ( sidebarOne ) } } className="footer__sidebar-one footer-widget"/> 
						</div>
					</Col>
				</Row>	
                <Row>
                    <Col md={{ span: 9, offset: 1 }}>
                        <Link className="mainButtonBlack" to="/approach/">
                           Plan a project
                        </Link>
                    </Col>
                </Row>
				<Row>
					<Col md={{ span: 10, offset: 1 }}>
						<div className="footerNavigation">
							<div className="footerCol one">
								<Link className="footerLink" to="mailto:partner@andus.agency">
									partner@andus.agency
								</Link>
								<Link className="footerLink" to="tel:209-59-8291">
									209-59-8291
								</Link>
							</div>
							<div className="footerCol two">
								<ul>
									{ footerMenuItems.edges.map( menu  => (
										<li key={ menu.node.menuItemId }>
											<Link
												className="header-nav__menu-link"
												to={( menu.node.url )  }
											>
												{ menu.node.label }
											</Link>
										</li>
									)) }
								</ul>
								<ul className="social-links">
									{ socialLinks.map( socialLink => (
										<li key={ socialLink.iconName }>
											<a href={ socialLink.iconUrl } target="_blank" rel="noreferrer">
												Facebook
											</a>
										</li>
									) ) }
								</ul>
								<div className="copyright-text">{ copyrightText }</div>
							</div>		
						</div>
					</Col>
				</Row>	
			</Container>
		</footer>
	);
};

Footer.propTypes = {
	copyrightText: PropTypes.string,
};

Footer.defaultProps = {
	copyrightText: `&US Agency ${ new Date().getFullYear() }`,
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export {
	Footer
};