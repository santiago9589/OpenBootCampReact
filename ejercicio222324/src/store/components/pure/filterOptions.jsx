import React from "react"
import FilterContainer from "../container/filterContainer";

const FilterOptions = () =>{
    return (
        <div>
            <FilterContainer filter="SHOW_ALL">
                ALL
            </FilterContainer>
            <FilterContainer filter="SHOW_ACTIVE">
               ACTIVE
            </FilterContainer>
            <FilterContainer filter="SHOW_COMPLETED">
                COMPLETED
            </FilterContainer>
        </div>
    )
}

export default FilterOptions;