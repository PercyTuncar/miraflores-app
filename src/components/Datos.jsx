import React from 'react'

function Datos (props)
{
    return(
        <>
            <div>
                <p>Name:{ props.name }</p>
                <p>Last Name: {props.lastname}</p>
            </div>
        </>
    );
}

export default Datos