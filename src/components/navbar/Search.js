import "./Navbar.css"
import React, { useState } from "react";
const Search = (props) => {
    const [input, setInput] = useState("");
    const Submit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <form action="" className="navbar-search d-flex align-items-center" onSubmit={Submit}>
                <i className="bi bi-search h4 position-absolute mt-2 ms-2 text-secondary btn"></i>
                <input
                    className="px-2 text-secondary"
                    type="search"
                    placeholder="Қидириш"
                    onChange={(e) =>
                        localStorage.setItem("search", JSON.stringify(e.target.value))
                    }
                />
            </form>
        </>
    );
}

export default Search;