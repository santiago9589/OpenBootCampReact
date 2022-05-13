import axios from "./axios.config"



export const getJokes = () =>{

    return axios.get("/")
}

