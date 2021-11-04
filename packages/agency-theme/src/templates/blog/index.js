import React from 'react';

/* general components */
import Layout from '../../components/layouts';
import Articles from "../../components/home/articles";

import Error from "../../components/error";
import { isEmpty } from 'lodash';


const blogPage = ( props ) => {

    console.warn( props );

    const { 
        pageContext: { 
            posts
        }
    } = props;

    return(
        <Layout>
            { ! isEmpty( props.pageContext ) ? (
                <>
                    <Articles data={ posts } />
                </>
            ) : <Error message="Something went wrong" />}
        </Layout>
    )
};

export default blogPage;
