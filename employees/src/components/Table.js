import React from "react";
import TableBody from "./TableBody";

// Functional component table
function Table({ headings, users, handleSort }) {
  return (
    <div className="mt-3">
      <table id="table" className="table table-striped">
        
        {/* Table heading */}
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th className="col" key={name} style={{ width }} onClick={() => { handleSort(name.toLowerCase()); }} >
                  {name}
                  {name === "Name" ? <i class="fa fa-fw fa-sort"></i> : ""}              
                </th>
              );
            })}
          </tr>
        </thead>

        {/* Table body */}
        <TableBody users={users} />
      </table>
    </div>
  );
}

export default Table;