import { useMemo } from "react"

export const DOTS = "..."
const range = (start, end) =>
  Array.from(Array(end - start + 1), (_, index) => index + start)

function usePagination({ currentPage, totalCount, pageSize }) {
  /*

    This custom pagination hook utilizes the useMemo hook to return a pagination 
    range that is dependent on the current page, total count (of blog posts),
    and page size (amount of blog posts to be displayed per page). Conditionals 
    determine the pagination range to be returned based on the dependecy variables.
    
  */
  const paginationRange = useMemo(() => {
    const totalPages = Math.ceil(totalCount / pageSize)

    if (totalPages <= 3) return [...range(1, totalPages)]

    if (currentPage <= 2) return [...range(1, 3), DOTS, totalPages]

    if (currentPage >= totalPages - 1)
      return [1, DOTS, ...range(totalPages - 2, totalPages)]

    return [
      1,
      DOTS,
      ...range(currentPage - 1, currentPage + 1),
      DOTS,
      totalPages,
    ]
  }, [currentPage, totalCount, pageSize])

  return paginationRange
}

export default usePagination
