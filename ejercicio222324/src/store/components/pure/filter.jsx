import React from "react";

const FilterOne = ({ active, onClick, children }) => {
    if (active) {
        return (<span className="active">{children} </span>)
    }

    return (
        <div>
            <button
                className="filter"
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}>
                {children}
            </button>

        </div>

    )
}

export default FilterOne;