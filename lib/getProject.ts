const URL = process.env.API_URL;

export default async function getProject(projectId: number) {
  try {
    const response = await fetch(`${URL}/projects/${projectId}`);
    if (!response.ok)
      throw new Error(`Unable to fetch project: ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}
