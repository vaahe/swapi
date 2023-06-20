import { useContext, useState } from "react";

import '../styles/SearchBox.scss';
import { SearchContext } from "../context";

export const SearchBox = () => {
    const [value, setValue] = useState("");
    const { updateContextValue } = useContext(SearchContext);

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateContextValue(value);
    }

    return (
        <form className="form__group field" onSubmit={handleSubmit}>
            <input type="input" className="form__field" value={value} onChange={handleChange} name="name" id='name' />
            <label htmlFor="name" className="form__label">Search Field</label>
            <button type="submit">Search</button>
        </form>
    )
}
