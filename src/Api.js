async function fetchData() {
  try {
    let result = await fetch(
      "https://xcountries-backend.azurewebsites.net/all"
    );
    return result;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
}
export default fetchData;
