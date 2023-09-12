import React from 'react';

export default function userDetail({match}){
    return(
        <div>Usuario ID: {match.params.id} </div>
    )
}