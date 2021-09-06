import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
import Posts from '../services/Posts';
import { useCookies } from 'react-cookie';

const AddComment = ({link}) => {
    const [comment , setComment] = React.useState("");
    const [cookies , setCookies] = useCookies(['user'])
    const [statue , setStatue] = React.useState("");
    return(
        <div>
            <h1>Commentez sous la publication N°{link}</h1>
            <br/>
            <TextareaAutosize aria-label="minimum height" minRows={2} placeholder="Commentaire" onChange = {e => setComment(e.target.value)} />
            <br/><br/>
            {(comment.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => {
                Posts.addComment(cookies.username , link , comment , setStatue)
                setComment("");
            }}>Poster</Button> :<Button variant = "contained" color = "primary" disabled>Poster</Button> } 
            <p>{statue}</p>
        </div>
    )
}

export default AddComment
