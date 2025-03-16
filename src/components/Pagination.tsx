import { useContext, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { MovieContext } from "../context/MovieProvider";

export const PaginationComponent = () => {
  const moviesCntx = useContext(MovieContext);
  if (!moviesCntx) return null;

  const { currentPage, setCurrentPage, totalPages } = moviesCntx;
  
  return (
    <Pagination className="justify-content-center mt-4">
      <Pagination.Prev
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      />
      <Pagination.First 
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        1
      </Pagination.First>

      <Pagination.Ellipsis />

      <Pagination.Item
        active={currentPage === Math.floor(totalPages/2)}
        onClick={() => setCurrentPage(Math.floor(totalPages/2))}
      >
        {Math.floor(totalPages/2)}
      </Pagination.Item>

      <Pagination.Ellipsis />

      <Pagination.Last
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {totalPages}
      </Pagination.Last>
      <Pagination.Next
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  )
}