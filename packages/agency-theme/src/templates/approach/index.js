import React from 'react';

/* general components */
import Layout from '../../components/layouts';
import HeroApproach from "../../components/approach/hero";
import AboutApproach from "../../components/approach/about";
import CapabilitiesApproach from '../../components/approach/capabilities';
import Process from '../../components/approach/process';

import Error from "../../components/error";
import { isEmpty } from 'lodash';


const approachPage = ( props ) => {

    console.warn( props );

    const { 
        pageContext: { 
            page: { ApproachSection: { approachSection, heroSection, capabilitiesSection, processSection } }
        }
    } = props;

    return(
        <Layout>
            { ! isEmpty( props.pageContext ) ? (
                <>
                    <HeroApproach data={ heroSection } />
                    <AboutApproach data={ approachSection } />
                    <CapabilitiesApproach data={ capabilitiesSection } />
                    <Process data={ processSection } />
                </>
            ) : <Error message="Something went wrong" />}
        </Layout>
    )
};

export default approachPage;
