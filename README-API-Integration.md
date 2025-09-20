# API Integration Guide

## Overview
This guide explains how to test the frontend-backend API integration for the CodeKnight Esports application.

## Prerequisites
1. Backend server must be running on `http://localhost:5000`
2. MongoDB must be connected and running
3. Frontend React app must be running

## Testing the Integration

### 1. Start the Backend Server
```bash
cd Backend
npm run dev
```
The server should start on `http://localhost:5000`

### 2. Start the Frontend React App
```bash
cd Frontend
npm start
```
The app should open in your browser at `http://localhost:3000`

### 3. Test API Connection
Open the browser console and run:
```javascript
// Test the API connection
window.testAPI && window.testAPI();
```

### 4. Test Contact Form
1. Navigate to the Contact section on the website
2. Fill out the contact form with:
   - Full Name: "Test User"
   - Email: "test@example.com"
   - Message: "This is a test message"
3. Click "Send Message"
4. You should see a success message if the API is working

### 5. Test Job Application Form
1. Navigate to `/apply` route
2. Fill out the application form
3. Upload a test file (PDF, DOC, or DOCX)
4. Submit the form
5. You should see a success message if the API is working

## API Endpoints

### Contact API
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Get all contact messages (admin)

### Applications API
- **POST** `/api/applications` - Submit job application
- **GET** `/api/applications` - Get all applications (admin)

### Status API
- **GET** `/api/status` - Get server status

## Environment Configuration

### Frontend Environment Variables
Create `.env` file in the Frontend directory:
```
REACT_APP_API_URL=http://localhost:5000/api
NODE_ENV=development
```

### Backend Environment Variables
Create `.env` file in the Backend directory:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/codeknight-esports
```

## Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure CORS is enabled in the backend
2. **API URL Error**: Check that `REACT_APP_API_URL` is set correctly
3. **MongoDB Connection Error**: Ensure MongoDB is running and connection string is correct
4. **File Upload Error**: Check that multer is configured correctly for file uploads

### Debug Steps:
1. Check browser console for JavaScript errors
2. Check backend console for server errors
3. Verify API endpoints are accessible via browser or Postman
4. Check MongoDB connection status

## Deployment

### For Production:
1. Update `REACT_APP_API_URL` to your production API URL
2. Set up environment variables on your hosting platform
3. Ensure MongoDB is accessible from production server
4. Configure file upload storage for production

## Next Steps
- Add authentication endpoints
- Implement admin dashboard
- Add blog/content management APIs
- Set up production deployment
