import  {Component} from "react";
import PropTypes from "prop-types";



/**
 *
 * @param header: [string]
 * @param children: [[string]]
 * @constructor
 */
class Table extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string).isRequired,
            PropTypes.arrayOf(PropTypes.any)
        ]),
        header: PropTypes.arrayOf(PropTypes.string)
    }


    render() {
        const {
            //@ts-ignore
            children: children,
            //@ts-ignore
            header: header
        } = this.props;
        return (
            <table className="m-table">
                <thead>
                <tr>
                    {header.map(function (header, i) {
                        return <th scope="col" key={i} className={"m-table__title"}>{header}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {
                    children.map(function (row, i) {
                        return (
                            <tr className={"m-table__cells--row"} key={i}>
                            {
                                row.map(function (column, j) {
                                    return (
                                        <td key={j} className={"m-table__cells"}>{column}</td>
                                    )
                                })
                            }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }

}

export default Table;