import {useContext, useEffect, useState} from "react";
import {SearchContext} from "../context";
import axios from 'axios';
import {SWCard} from "./SWCard";
import "../styles/SearchList.scss";

export const SearchList = () => {
    const [data, setData] = useState([]);
    const [extractedData, setExtractedData] = useState([]);
    const {contextValue} = useContext(SearchContext);

    useEffect(() => {
        const searchSWData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/search?query=${contextValue}`);
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        contextValue && searchSWData();

        return () => setData([]);
    }, [contextValue]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        for (const property in data) {
            if (Object.prototype.hasOwnProperty.call(data, property)) {
                const arr = data[property];
                console.log(property);
                for (let i = 0; i < arr.length; ++i) {
                    const type = property.toString();
                    arr[i]['type'] = type;
                    setExtractedData(prevState => [...prevState, arr[i]]);
                }
            }
        }

        return () => setExtractedData([]);
    }, [data]);

    useEffect(() => {
        console.log(extractedData);
    }, [extractedData]);

    return (
        <div className="itemsContainer">
            {extractedData.length && extractedData.map((item, index) =>
                <SWCard data={item} key={`${item.name}_${index}`}/>
            )}
        </div>
    )
}
