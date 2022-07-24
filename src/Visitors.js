import {useState, useEffect} from 'react';
import axios from 'axios';


const Visitors = ()=>{
    const [data, setData] = useState({
        magnus: 0,
        template: 0
    });
    useEffect(()=>{
        console.log("data update:", data)
    },[data])

    useEffect(()=>{
        let magnusLink = 'https://api.countapi.xyz/get/magnus-team.com/awesomeclick'
        axios.get(magnusLink)
        .then((resp)=>{
            console.log("resp:", resp)
            setData((prev)=>{
                let copy = {...prev}
                copy['magnus'] = resp.data.value
                return copy
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    useEffect(()=>{
        let templateLink = 'https://api.countapi.xyz/get/magnus-template-1.com/awesomeclick'
        axios.get(templateLink)
        .then((resp)=>{
            console.log("resp:", resp)
            setData((prev)=>{
                let copy = {...prev}
                copy['template'] = resp.data.value
                return copy
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <>
        <p>Magnus: {data.magnus}</p>
        <p>Template: {data.template}</p>
        </>
    )
}

export default Visitors;
