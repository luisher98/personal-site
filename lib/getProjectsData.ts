export default async function getProjectsData() {
  try {
    const response = await fetch(`http://localhost:3500/projects`);
    if (!response.ok)
      throw new Error(`Unable to fetch projects data: ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}
