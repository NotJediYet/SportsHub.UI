import React, {useState} from "react"
import "./AdminSearchContentArea.scss"
import {BiSearch} from "react-icons/bi";

function AdminSearchContentArea()  {
    const [value, setValue] = useState('');
    const handleChange = (event) => { setValue(event.target.value)}

    return (
        <div>
            <div className="search">
                <div className="search-content">
                    <div className="search-icon"><BiSearch size="25px" color="#7F8899" />
                 </div>
            <input className="input-style" type="text" value={value} onChange={handleChange} placeholder="Type here to search "/>
        </div>
        </div>
         {value}
        </div>
    );
};

export default AdminSearchContentArea;