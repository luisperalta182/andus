import React from 'react';
import { isEmpty } from 'lodash';

const Error = ( { message } ) => !isEmpty( mmessage ) ? <div className="error-message"> { message } </div> : null;


export default Error;