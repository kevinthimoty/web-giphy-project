import React, {useEffect, useState} from "react";
import axios from "axios";

const Giphy = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios("https://api.giphy.com/v1/gifs/trending",{
                params: {
                    api_key: '8XSfFaxsjpau64kyGOWNRfhqcYIwH5qp'
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

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const result = await axios("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: '8XSfFaxsjpau64kyGOWNRfhqcYIwH5qp',
                q: search
            }
        });
        setData(result.data.data);
    }

    return (
        <div className="m-2">
            <form className="form-inline justify-content-center m-2 searchbox">
                <input value={search} onChange={handleSearchChange} type="text" placeholder="Search Giphy" className="form-control"/>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary mx-2">Search</button>
            </form>
            <div className="container gifs">{renderGifs()}</div>
        </div>
        );
}

export default Giphy