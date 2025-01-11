const API_URL = "http://localhost:5000/information"; // Replace localhost with Docker service name

export const fetchInformation = async (page = 0) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch data: ' + error.message);
  }
};
