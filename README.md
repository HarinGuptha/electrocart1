# Electronic Components Store

A React application for an electronic components store.

## Features

- Browse electronic components by category
- Search for products
- Add products to cart
- User authentication (login/register)
- Responsive design

## Running the Application

### Start the React Application

```bash
npm start
```

This will start the React application on port 3000.

### Using the Application Without JSON Server

The application has been configured to work without requiring the JSON Server. It uses hardcoded data for demonstration purposes.

- You can log in with any username and password
- All product data is loaded from the application itself
- No backend server is required

### If You Want to Use JSON Server (Optional)

If you want to use the JSON Server for data persistence, you can run:

```bash
node server.js
```

This will start a custom JSON Server on port 3000 with better error handling.

## Troubleshooting

If you encounter a "URI malformed" error with JSON Server, try using the application without the server as described above.

## Technologies Used

- React
- React Router
- Bootstrap
- React Hook Form
