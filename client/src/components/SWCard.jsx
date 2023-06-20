import { useState, useEffect } from 'react';
import { SiStarship } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbBrandPlanetscale } from "react-icons/tb";

import "../styles/SWCard.scss";

export const SWCard = (props) => {
    const [icon, setIcon] = useState(<TbBrandPlanetscale />);
    const data = Object.keys(props).map(prop => props[prop])[0];

    useEffect(() => {
        switch (data.type) {
            case "people":
                setIcon(<BsFillPeopleFill />);
                break;
            case "starships":
                setIcon(<SiStarship />);
                break;
            default:
                break;
        }
    }, [props])

    return (
        <div className="container">
            <div className="subContainer">
                {data && Object.keys(data).map((prop, index) => {
                    return (
                        <div key={`${data[prop]}_${index}`}>
                            <h3>
                                <span className="prop">{prop}</span>
                                : {data[prop]}
                            </h3>
                        </div>
                    )
                })}
            </div>
            {icon}
        </div>
    )
}
