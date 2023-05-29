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
            <div className="container">
                <div className="headerSearch__row">
                    <h2>Поиск</h2>
                    <input
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <span onClick={() => setOpen(!open)}>
                x
            </span>
                </div>
                <div>
                    <ul className='headerSearch__menu'>
                        {
                            search.length ?
                                data.map((item) => (
                                    <li className="headerSearch__menu-item">

                                        {item.name}
                                        <br/>
                                        {item.year}
                                    </li>
                                )) : ''

                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default HeaderSearch;