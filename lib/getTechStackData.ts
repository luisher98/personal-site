export default async function getTechStackData() {
  try {
    const response = await fetch(`http://localhost:3500/techstack`);
    if (!response.ok)
      throw new Error(
        `Unable to fetch tech stack data: ${response.statusText}`
      );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}
