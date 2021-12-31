import React from 'react';
import './cards.css';

const Cards = (props) => {

    return (
        <div>
            {props.data.map((re)=>
              <p className='pTag'>
                <div style={{padding: '35px 35px 0px 35px', fontWeight: 600}}>{re.key}</div>
                <p style={{ padding: '0px 35px 10px' }} dangerouslySetInnerHTML={{__html:re.description }}></p>
              </p>
            )}
        </div>
    )

}

export default Cards;