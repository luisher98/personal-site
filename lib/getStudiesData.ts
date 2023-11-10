const URL = process.env.API_URL;
export default async function getStudies() {
  try {
    const response = await fetch(`${URL}/studies`);
    if (!response.ok)
      throw new Error(`Unable to fetch studies data: ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}
