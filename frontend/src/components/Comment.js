import React from 'react'

const Comment = ({username , texte }) => {
    return (
        <div>
            <h1>{username}</h1>
            <br/>
            <p>{texte}</p>
        </div>
    )
}

export default Comment
