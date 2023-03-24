import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
                <p className="text-lg mb-4">Sorry, the page you're looking for could not be found.</p>
                <Link to="/" className="text-blue-500 hover:underline">Go back to the homepage</Link>
            </div>
        </>
    )
}

export default NotFound