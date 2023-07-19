import React, {useEffect, useState} from "react";
import axios from "axios";

const GiphyIronMan = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios("https://api.giphy.com/v1/gifs/search",{
                params: {
                    api_key: '8XSfFaxsjpau64kyGOWNRfhqcYIwH5qp',
                    q: 'iron man'
                }
            });

            setData(result.data.data);
        }

        fetchData()
    }, [])

    const renderGifs = () => {
        return data.map(el => {
            return(
                <div key={el.id} className="gif">
                    <img width = "300" height = "300" src={el.images.fixed_height.url}/>
                </div>
            )
        })
    }

    return (
        <div className="m-2">
            <div className="container gifs">{renderGifs()}</div>
        </div>
        );
}

export default GiphyIronMan