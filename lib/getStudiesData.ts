export default async function getStudiesData() {
  try {
    const response = await fetch(`http://localhost:3500/studies`);
    if (!response.ok)
      throw new Error(`Unable to fetch studies data: ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}
