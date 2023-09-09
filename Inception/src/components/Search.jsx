import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
const Search = () => {
    const [searchItem, setSearchItem] = useState("");
    const handleInputChange = (event) => {
        setSearchItem(event.target.value);
    }
    console.log("Search component is rendered");

    return <div className="searchbar">
            {/* <input type="text" placeholder={<SearchIcon /> + "Search Restaurant"} />
            <SearchIcon /> */}
            <TextField 
                className='search'
                label = "Search Restaurants"
                InputProps={{
                    startAdornment: (<InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>),
                }}
                value={searchItem}
                onChange={handleInputChange}
            />
            <button onClick={()=>{
                //Search the text
                console.log(searchItem)
            }}>
                Go
            </button>
    </div>
}

export default Search;