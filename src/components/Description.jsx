import React from 'react';
import "./description.css";

import { HiArrowSmDown } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import { BiHappy } from "react-icons/bi"
import { MdCompress, MdFastRewind, MdOutlineWaterDrop } from "react-icons/md"

const Description = ({ weather, units }) => {

    const tempUnit = units === 'metric' ? '°C' : '°F'
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'
    const cards = [
        {
            id: 1,
            icon: <HiArrowSmDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <HiArrowSmUp />,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: weather.pressure,
            unit: "hPa",
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 1,
            icon: <MdFastRewind />,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ]

    return (
        <div className="section section_description">
            {cards.map(({ id, icon, title, data, unit }) => (
                <div kex={id} className="card">
                    <div className="description_card-icon">
                        {icon}
                        <small>{title}</small>
                    </div>
                    <h2>{`${data} ${unit} `}</h2>
                </div>
            ))}

        </div>

    );
};

export default Description;