# Ohey

## What is Ohey?
Ohey is a promise-based JavaScript library built on top of XMLHttpRequest. It simplifies making HTTP requests by providing a modern, promise-based API for GET, POST, PUT, and DELETE methods.


## Installation

```javascript
import ohey from 'path/to/ohey.js';
```

## Usage
### Basic Usage
To make a simple GET request:

```javascript
const fetchData = async () => {
  const res = await ohey("https://jsonplaceholder.typicode.com/todos");

	console.log(res);
};
fetchData();
```

### GET Request with Configuration
You can pass an optional configuration object to customize your request:

```javascript
const fetchData = async () => {
	const res = await ohey("https://jsonplaceholder.typicode.com/todos", {
		headers: {
			"Content-Type": "application/json"
		},
		timeout: 5000,
		method: "GET"
	});
	console.log(res);
};

fetchData();
```

### POST Request
To make a POST request with a payload:

```javascript
const postData = async () => {
	const res = await ohey("https://jsonplaceholder.typicode.com/todos", {
		headers: {
			"Content-Type": "application/json"
		},
		timeout: 5000,
		method: "POST",
		body: JSON.stringify({
			title: "foo",
			body: "bar",
			userId: 1
		})
	});
	console.log(res);
};

postData();
```

### PUT Request
To update data using a PUT request:

```javascript
const updateData = async () => {
	const res = await ohey("https://jsonplaceholder.typicode.com/todos/1", {
		headers: {
			"Content-Type": "application/json"
		},
		timeout: 5000,
		method: "PUT",
		body: JSON.stringify({
			id: 1,
			title: "foo",
			body: "bar",
			userId: 1
		})
	});
	console.log(res);
};

updateData();
```

### DELETE Request
To delete data using a DELETE request:

```javascript
const deleteData = async () => {
	const res = await ohey("https://jsonplaceholder.typicode.com/todos/1", {
		headers: {
			"Content-Type": "application/json"
		},
		timeout: 5000,
		method: "DELETE"
	});
	console.log(res);
};

deleteData();
```

## Configuration Options
The configuration object supports the following options:

- headers: An object representing custom headers to be sent with the request.

- timeout: The time in milliseconds before the request times out.

- method: The HTTP method to use (e.g., GET, POST, PUT, DELETE).

- body: The body of the request. Typically used with POST and PUT requests to send data.

## Error Handling
Ohey will reject the promise with an error if the request fails or times out. You can handle errors using a try-catch block:

```javascript
const fetchData = async () => {
	try {
		const res = await ohey("https://jsonplaceholder.typicode.com/todos");
		console.log(res);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

fetchData();
```

## License
Ohey is licensed under the MIT License.