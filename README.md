# TVVN - E-commerce Platform

## Getting Started with TVVN

This project is a full-stack e-commerce platform built with React and Node.js.

## Quick Start Guide

### Step 1: Clone the repository
```bash
git clone https://github.com/your-username/tvvn.git
cd tvvn
```

### Step 2: Install Dependencies

#### Backend Setup
```bash
cd server
npm install
```

#### Frontend Setup
```bash
cd client
npm install
```

### Step 3: Environment Configuration

#### Backend (.env)
Create a `.env` file in the server directory with:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### Frontend (.env)
Create a `.env` file in the client directory with:
```
REACT_APP_API_URL=http://localhost:5000
```

### Step 4: Start the Application

1. Start the backend server:
```bash
cd server
npm start
```
The server will run on http://localhost:5000

2. In a new terminal, start the frontend:
```bash
cd client
npm start
```
The application will open in your browser at http://localhost:3000

## Available Scripts

In the project directory, you can run:

### Frontend (Client Directory)
```bash
cd client
```

#### `npm start`
Runs the frontend app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`
Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Backend (Server Directory)
```bash
cd server
```

#### `npm start`
Runs the backend server in development mode.\
The server will start on [http://localhost:5000](http://localhost:5000).

## Project Structure
```
tvvn/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/              # Source code
│   ├── package.json      # Frontend dependencies
│   └── Dockerfile        # Frontend container configuration
│
├── server/                # Backend Node.js application
│   ├── src/              # Source code
│   ├── package.json      # Backend dependencies
│   └── Dockerfile        # Backend container configuration
│
└── .prettierrc           # Code formatting configuration
```

## Tech Stack

### Frontend
- React.js 18.3.1
- Material-UI (@mui/material)
- Bootstrap 5.3.3
- Redux for state management
- React Router for navigation
- Socket.IO for real-time features
- Chart.js for data visualization
- TinyMCE for rich text editing
- SASS for styling
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Socket.IO for real-time communication
- Google AI integration (@google/generative-ai)
- Nodemailer for email functionality
- Multer for file uploads
- Bcrypt for password hashing

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Environment Setup

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## Features
- User authentication and authorization
- Product management
- Shopping cart functionality
- Real-time notifications
- Order processing
- Admin dashboard
- Data visualization
- Email notifications
- File uploads
- Google AI integration

## Docker Support
Both frontend and backend include Dockerfile for containerization. To build and run:

```bash
# Build frontend
cd client
docker build -t tvvn-client .
docker run -p 3000:3000 tvvn-client

# Build backend
cd server
docker build -t tvvn-server .
docker run -p 5000:5000 tvvn-server
```

## Learn More

You can learn more about the technologies used in this project:

- [React Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [Material-UI Documentation](https://mui.com/)

## Deployment

This section has moved here: [Deployment Guide](https://facebook.github.io/create-react-app/docs/deployment)

## Troubleshooting

### Common Issues
- If `npm start` fails, ensure all dependencies are installed
- If MongoDB connection fails, check your connection string
- If build fails, ensure you have the correct Node.js version

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the ISC License.

## Contact
For any queries or support, please open an issue in the repository. 