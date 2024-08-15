// Function to get the number of stars for a GitHub repository
export async function getRepoStars(owner: string, repo: string) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;

  try {
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(
        `GitHub API request failed with status ${response.status}`
      );
    }

    const data = await response.json();

    // Get the number of stars from the response data
    const stars: number = data.stargazers_count;

    return stars;
  } catch (error) {
    console.error("Error fetching the repository data:", error);
  }
}
