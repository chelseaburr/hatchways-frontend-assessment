import BlogPost from "./BlogPost"
import Pagination from "./Pagination"
import React, { useState, useMemo } from "react"
import blogs from "../data/blogs.json"

const PAGE_SIZES = [15, 25, 50, 100]

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(15)

  const currentPaginationData = useMemo(() => {
      const startIndex = (currentPage - 1) * pageSize
      const endIndex = startIndex + pageSize
      return blogs.posts.slice(startIndex, endIndex)
    }, [currentPage, pageSize]);

  function updateRowsPerPage(newPageSize) {
    setPageSize(newPageSize)
    setCurrentPage(1)
  }

  const updatePage = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
