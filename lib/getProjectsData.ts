const URL = process.env.API_URL;
export default async function getProjects() {
  try {
    const response = await fetch(`${URL}/projects`);
    if (!response.ok)
      throw new Error(`Unable to fetch projects data: ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}
