import React from "react";

const Paginations = ({ products, Pagination, ChangePage, page }) => {
  let items = [];
  let totalPage = products.total_page;
  let currentPage = products.current_page;
  if (totalPage <= 5) {
    for (let number = 1; number <= totalPage; number++) {
      items.push(number);
    }
  } else if (totalPage > 5 && currentPage <= 3 && totalPage - currentPage > 2) {
    items = ["1", "2", "3", "4", "...", totalPage];
  } else if (totalPage > 5 && currentPage > 3 && totalPage - currentPage > 2) {
    items = [currentPage - 1, currentPage, currentPage + 1, "...", totalPage];
  } else if (totalPage > 5 && currentPage > 3 && totalPage - currentPage <= 2) {
    items = [
      "1",
      "...",
      totalPage - 3,
      totalPage - 2,
      totalPage - 1,
      totalPage,
    ];
  }
  let active = page;
  return (
    <div className="d-flex justify-content-center">
      <Pagination>
        {items.map((value) => {
          return (
            <Pagination.Item
              key={value}
              active={value === active}
              onClick={() => ChangePage(value)}
            >
              {value}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};

export default Paginations;
