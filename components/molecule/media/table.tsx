import React from "react";

/**
 *
 * @param items : [{year: number, name : string, link: string}]
 * @constructor
 */
function Table({items}) {
    return (
        <table className="m-table">
            <thead>
            <tr>
                <th scope="col" className={"m-table__title"}>YEARS</th>
                <th scope="col" className={"m-table__title"}>NAME</th>
            </tr>
            </thead>
            <tbody>
            {
                items.map(function (cell, i) {
                    return (
                        <tr className={"m-table__cells--row"} key={i}>
                            <td className={"m-table__cells"}><a href={cell.link} >{cell.year}</a></td>
                            <td className={"m-table__cells"}><a href={cell.link}>{cell.name}</a></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )

}

export default Table