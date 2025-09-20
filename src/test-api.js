// Test script to verify API connection
import { contactAPI, applicationsAPI, statusAPI } from './services/api.js';

const testAPI = async () => {
  try {
    console.log('Testing API connection...');

    // Test server status
    const status = await statusAPI.getStatus();
    console.log('Server Status:', status);

    // Test contact API
    const contactResponse = await contactAPI.submitContact({
      fullName: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message'
    });
    console.log('Contact API Response:', contactResponse);

    console.log('All API tests passed!');
  } catch (error) {
    console.error('API test failed:', error);
  }
};

// Run test if this file is executed directly
if (typeof window !== 'undefined') {
  window.testAPI = testAPI;
}

export default testAPI;
