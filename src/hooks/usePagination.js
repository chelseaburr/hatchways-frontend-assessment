import { useMemo } from 'react'

export const DOTS = '...'

function usePagination({ 
    currentPage, 
    totalCount, 
    pageSize 
}) {
    /*

    This custom pagination hook utilizes the useMemo hook to return a pagination 
    range that is dependent on the current page, total count (of blog posts),
    and page size (amount of blog posts to be displayed per page). Conditionals 
    determine the pagination range to be returned based on the dependecy variables.
    
  */
    const paginationRange = useMemo(() => {
        const totalPages = Math.ceil(totalCount / pageSize)

        if (totalCount === pageSize) return [1]
        if (totalPages === 3) return [1, 2, 3]
        if (currentPage <= 2) return [1, 2, 3, DOTS, totalPages]
        if (currentPage >= totalPages - 1)
            return [1, DOTS, totalPages - 2, totalPages - 1, totalPages]

        return [
            1,
            DOTS,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            DOTS,
            totalPages,
        ]
    }, [currentPage, totalCount, pageSize])

    return paginationRange
}

export default usePagination
