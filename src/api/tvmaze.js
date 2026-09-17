const BASE_URL = "https://api.tvmaze.com";

export async function getShows() {
  const response = await fetch(`${BASE_URL}/shows`);

  if (!response.ok) {
    throw new Error("Failed to fetch shows");
  }

  return response.json();
}

export async function searchShows(query) {
  const response = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search shows");
  }

  return response.json();
}