import React from 'react';

export const UpdateDate = () => {
    let currentDate = new Date()

    let fromatedDate = currentDate.toLocaleDateString("en-us",
        {
            weekday: "long",
            hour12: false,
            hour: "2-digit",
            minute: "2-digit"
        })
    return (
        <>
            {fromatedDate} 
        </>
    )
}

export const ConvertDate = (date) => {
    let day = new Date(date * 1000)
    day = day.toLocaleDateString('en-us' ,{weekday: "short"}).split(' ')[0]
    return (
        <>
            {day}
        </>
    )
}