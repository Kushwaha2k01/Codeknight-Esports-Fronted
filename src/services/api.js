// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Generic API function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const finalOptions = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, finalOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Contact API
export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData) => {
    return await apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },

  // Get all contact messages (admin)
  getContacts: async () => {
    return await apiRequest('/contact', {
      method: 'GET',
    });
  },
};

// Job Applications API
export const applicationsAPI = {
  // Submit job application
  submitApplication: async (applicationData) => {
    const formData = new FormData();

    // Add all text fields
    Object.keys(applicationData).forEach(key => {
      if (key === 'resume' && applicationData[key]) {
        formData.append(key, applicationData[key]);
      } else if (applicationData[key] !== null && applicationData[key] !== undefined) {
        formData.append(key, applicationData[key]);
      }
    });

    return await apiRequest('/applications', {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  },

  // Get all applications (admin)
  getApplications: async () => {
    return await apiRequest('/applications', {
      method: 'GET',
    });
  },
};

// Status API
export const statusAPI = {
  // Get server status
  getStatus: async () => {
    return await apiRequest('/status', {
      method: 'GET',
    });
  },
};

export default apiRequest;
