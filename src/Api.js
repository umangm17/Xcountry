async function fetchData() {
  try {
    let result = await fetch(
      "https://xcountries-backend.azurewebsites.net/all"
    );
    return result;
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
  }
}
export default fetchData;
