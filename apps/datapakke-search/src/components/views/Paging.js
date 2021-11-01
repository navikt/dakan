import * as React from "react";
import { Pagination } from "baseui/pagination";

export function Paging({
  current,
  onChange,
  totalPages,
}) {
  return (
    <React.Fragment>
        <Pagination
          numPages={totalPages}
          currentPage={current}
          onPageChange={({ nextPage }) => {
            onChange(
              Math.min(Math.max(nextPage, 1), totalPages)
            );
          }}
        />
      </React.Fragment>  
    );
}

export default Paging
