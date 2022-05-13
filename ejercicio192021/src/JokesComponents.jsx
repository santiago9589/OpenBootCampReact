import React, { useEffect, useState } from "react";
import { getJokes } from "./axios";
import ButtonComponent from "./components/ButtonComponent";
import ButtonReaction from "./components/ReactionComponent"
import { Grid} from '@mui/material'


const JokesComponent = () => {

    const [jokes, setJokes] = useState([]);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);


    useEffect(() => {
        createJokeRamdon();

    }, [])


    const createJokeRamdon = () => {

        getJokes().then((response) => {
            setJokes(response.data)
        }).catch((error) => {
            console.log(error)
        })

        setLikes(0)
        setDislikes(0)

    }

    const clickDislike = () => {
        setDislikes(dislikes+1)
    }

    const clickLike = () => {
        setLikes(likes+1)
    }


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h3>Chistes</h3>
                </Grid>
                <Grid item xs={12}>
                    <div><h3>{jokes.value}</h3></div>
                </Grid>
                <Grid item xs={12}>
                    <div><ButtonComponent createJokeRamdon={createJokeRamdon}></ButtonComponent></div>
                </Grid>
                <Grid item xs={8}>
                    <div><ButtonReaction like={clickLike} dislike={clickDislike}></ButtonReaction></div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <p>{likes}</p>
                        <p>{dislikes}</p>

                    </div>
                </Grid>
            </Grid>
        </div>

    )

}

export default JokesComponent;