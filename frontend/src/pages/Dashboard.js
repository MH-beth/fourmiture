import React from 'react'
import RegisterRec from '../components/RegisterRec'
import Allposts from "../components/Allposts";
import Search from '../components/Search'
import { CONNECTED } from '../constants'

const Dashboard = () => {
    return (
        <div>
            {(CONNECTED === "Connected") ? null:<RegisterRec/>}
            <Search/>
            <h1>Les Annonce à ne pas rater</h1>
            <br/>
            <Allposts/>
        </div>
    )
}

export default Dashboard
