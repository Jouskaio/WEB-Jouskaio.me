import { Component } from "react";
import PropTypes from "prop-types";
import Highlight from "react-highlight";

class Code extends Component {
    static propTypes = {
        children: PropTypes.any,
        language: PropTypes.string,
        classname: PropTypes.string,
    }

    render() {
        // @ts-ignore
        const { classname, language, children, size } = this.props;

        return (
            <>
                <Highlight className={`a-code ${classname} ${language}`}>
                    {children}
                </Highlight>
            </>
        );
    }
}

export default Code;
