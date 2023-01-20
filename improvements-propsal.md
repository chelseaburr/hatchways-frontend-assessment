## Question 1

1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

---

### Answer

If the data for the posts is coming from an API instead of a JSON file, the application would need to make an HTTP request to the API to fetch the data. The useEffect hook would be utilized when fetching the data to allow the application to connect to an external system and update the application's state.

Some things that would need to be considered are - When fetching data there will be a loading state and that should be displayed to the user - Handling errors that may occur when fetching data from the API - There may be a lot of data to return from the API that could impact performance. Limiting the amount of data being fetched and how many times the data is being requested would help improve the application.

To limit the amount of data being fetched we would check to see if the API has a limit and offset parameter. We would then be able to directly control how much data is being requested from the API. To limit the number of requests to the API we could add a variable to the useEffect dependency array. This would depend on how often we needed to update our data. No variable would fetch the data once or it could be set to pageSize or currentPage to ensure the app has current data.

---

## Question 2

2. Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

---

### Answer

The nanoid package generates unique strings which is utilized as keys when iterating over react elements. An issue that might arise from using nanoid is excessive re-rendering of the application. When generating unique strings, the keys will be different on each re-render. React would view this as creating a new element instead of updating an existing element and cause additional re-rendering of the application. Using a stable and unque id from the data (such as the id from the post) would prevent this issue.
