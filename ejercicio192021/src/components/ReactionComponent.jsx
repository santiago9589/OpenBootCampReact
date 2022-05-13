import React from 'react';
import { Button,ButtonGroup } from '@mui/material'



const ButtonReaction = ({like,dislike}) => {
    return (
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={()=>like()}>Like</Button>
                <Button onClick={()=>dislike()}>Dislike</Button>  
            </ButtonGroup>
        </div>

    )
}

export default ButtonReaction;