import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button ({ size, children }) {
    return createElement("button", {
        className: classNames("bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors",{
            "px-4 h-9": size == "Normal",
            "px-4 h-[52px] w-full text-[17px]": size == "Large",
        })
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['Normal', 'Large'])
}

Button.defaultProps = {
    size: 'Normal'
}