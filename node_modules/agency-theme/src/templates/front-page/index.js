import React from 'react';

/* general components */
import Layout from '../../components/layouts';
import Hero from "../../components/home/hero";
import About from "../../components/home/about";
import Approach from "../../components/home/approach";
import Partners from "../../components/home/partners";
import ArticlesHome from "../../components/home/articlesHome";

import Error from "../../components/error";
import { isEmpty } from 'lodash';


const frontPage = ( props ) => {

    console.warn( props );

    const { 
        pageContext: { 
            page: { HomeSection: { heroSection, aboutSection, approachSection, partnersSection } },
            posts
        }
    } = props;

    return(
        <Layout>
            { ! isEmpty( props.pageContext ) ? (
                <>
                    <Hero data={ heroSection } />
                    <About data={ aboutSection } />
                    <Approach data={ approachSection } />
                    <Partners data={ partnersSection } />
                    <ArticlesHome data={ posts } />
                </>
            ) : <Error message="Something went wrong" />}
        </Layout>
    )
};

export default frontPage;
