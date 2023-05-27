import React, {useEffect, useState} from 'react';
import instance from "../../../utils/axios";

const HeaderSearch = ({open, setOpen}) => {

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        instance(`/movie?name=${search}`)
            .then(({data}) => setData(data.docs))
            .catch((error) => console.log(error))
    },[search])



    return (
        <div className="headerSearch"
             style={{display: open ? 'flex' : 'none'}}
        >
            <h2>Поиск</h2>
            <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <span onClick={() => setOpen(!open)}>
                x
            </span>
            <div>
                <ul>
                    {
                        search.length ?
                        data.map((item) => (
                            <li>{item.name}</li>
                        )) : ''

                    }
                </ul>
            </div>
        </div>
    );
};

export default HeaderSearch;