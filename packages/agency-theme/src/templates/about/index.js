import React from 'react';

/* general components */
import Layout from '../../components/layouts';
import HeroAbout from "../../components/about/hero";
import AboutComponent from "../../components/about/about";
import CoreValues from "../../components/about/coreValues";
import Team from "../../components/about/team";

import Error from "../../components/error";
import { isEmpty } from 'lodash';


const aboutPage = ( props ) => {

    console.warn( props );

    const { 
        pageContext: { 
            page: { AboutSection: { heroSection, aboutSection, memberSection } }
        }
    } = props;

    return(
        <Layout>
            { ! isEmpty( props.pageContext ) ? (
                <>
                    <HeroAbout data={ heroSection } />
                    <AboutComponent data={ aboutSection } />
                    <CoreValues />
                    <Team data={ memberSection } />
                </>
            ) : <Error message="Something went wrong" />}
        </Layout>
    )
};

export default aboutPage;
