import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    return (
        <div className='error-page'>
            <h1>Opps</h1>
            <h3>Entered Wrong URL</h3>
            <h4>{err.status} : {err.statusText}</h4>
        </div>
    )
}

export default Error