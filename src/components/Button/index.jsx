import React from 'react'

export function Button(){
    return(
        <button onClick={() => deleteToast(toast.id)}>X</button>
    )
}