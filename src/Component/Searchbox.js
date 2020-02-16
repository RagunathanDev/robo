import React from 'react';

const Searchbox =({searchchange})=>{
    return(
        <div className='pa2' >
        <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder="Search here"  
        onChange={searchchange}/>
        
        </div>
    );
}
export default Searchbox;