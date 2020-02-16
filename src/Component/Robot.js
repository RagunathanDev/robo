import  React from 'react';
//import { render } from '@testing-library/react';

const Robot = ({name,id,email}) => {
     
        return(
            <div className="bg-light-green dib br8 pa3 ma2 grow bw1 shadow-3">
            <img alt='robots' src={`https://robohash.org/${id}&100X100`} />
            <div>
            <p>{name}</p>
            <p>{email}</p>
            </div>
            </div>
        );
 
}
export default Robot;