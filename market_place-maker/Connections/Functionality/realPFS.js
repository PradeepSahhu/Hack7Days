async function IpfsToArray(urls) {
  // Define the URLs to fetch data from
  console.log(urls);
  try {
    // Use Promise.all to fetch all URLs concurrently
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    // Wait for all fetch operations to complete
    const results = await Promise.all(fetchPromises);

    // Combine the results into a single JSON object
    // const combinedData = results.reduce((acc, data, index) => {
    //   acc[`data${index + 1}`] = data;
    //   return acc;
    // }, {});

    // Log the combined JSON object
    console.log(results);

    return results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data
export default IpfsToArray;
