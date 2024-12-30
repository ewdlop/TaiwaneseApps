/**
 * Fetch data from a Taiwanese API endpoint.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise} - A promise that resolves to the fetched data.
 */
async function fetchTaiwanData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export { fetchTaiwanData };
