const URL = process.env.API_URL;

export default async function getExperience() {
  try {
    const response = await fetch(`${URL}/experience`);
    if (!response.ok)
      throw new Error(
        `Unable to fetch experience data: ${response.statusText}`
      );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}