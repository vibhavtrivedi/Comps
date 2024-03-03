import { useState } from "react";
import Table from "./Table";

function SorttableTable(props) {
    const { config } = props;
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
        console.log(label);
    }
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column, 
            header: () => <th onClick={() => handleClick(column.label)}>{column.label}is sortatble</th>
        }
    })
    return (
        <div>
            {sortBy} - {sortOrder}
            <Table {...props} config={updatedConfig} />
        </div>
    )
}

export default SorttableTable;