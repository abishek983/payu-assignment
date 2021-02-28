import { React, useState, useEffect } from 'react';

const Search = ({ data, updatedValue }) => {
    const [searchValue, setSearchValue] = useState('')
    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        const filter = data.filter(val => {
            if (val.key.includes(searchValue.toLocaleLowerCase()))
                return val
        })
        updatedValue(filter)
    }, [searchValue])

    return (
        <input type="text" value={searchValue} placeholder="Search" onChange={(e) => updateSearchValue(e) }/>
    );
}

export default Search;
