import React from 'react';
import Robot from './Robot';

const Cardlist=({ robo })=>{
    return(
        <div>
         {
            robo.map((user,i)=>{
                return(
                    <Robot
                    key={i}
                    id={robo[i].id}
                    name={robo[i].name}
                    email={robo[i].email}
                    />

                );
            })
        }
        </div>
    );
}


export default Cardlist;