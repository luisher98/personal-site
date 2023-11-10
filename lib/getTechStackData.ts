const URL = process.env.API_URL;

export default async function getTechStack() {
  try {
    const response = await fetch(`${URL}/tech-stack`);
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
