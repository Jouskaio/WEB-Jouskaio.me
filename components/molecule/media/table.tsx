import React from "react";

function Table({items}) {
    return (
        <table className="m-table">
            <thead>
            <tr>
                <th scope="col" className={"m-table__title"}>Years</th>
                <th scope="col" className={"m-table__title"}>Name</th>
            </tr>
            </thead>
            <tbody>
            <tr className={"m-table__cells--row"}>
                <td className={"m-table__cells"}>2021</td>
                <td className={"m-table__cells"}>James Yates</td>
            </tr>
            <tr className={"m-table__cells--row"}>
                <td className={"m-table__cells"}>2022</td>
                <td className={"m-table__cells"}>Matthew Wasil</td>
            </tr>
            </tbody>
        </table>
    )

}

export default Table