export const getVideos = async () => {
  const key = process.env.REACT_APP_API_KEY;
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${key}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};

export const suggest = async (term) => {
  const GOOGLE_AC_URL = "http://suggestqueries.google.com/complete/search";

  const queryParams = new URLSearchParams({
    client: "youtube",
    ds: "yt",
    q: term,
  });

  const url = `${GOOGLE_AC_URL}?${queryParams}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Suggest API error: ${response.status} ${response.statusText}`
      );
    }

    const responseText = await response.text();
    console.log("Raw response:", responseText);

    // Extract the JSON data from the callback function
    const jsonString = responseText.match(/window\.google\.ac\.h\((\[.*\])\)/);
    if (!jsonString || !jsonString[1]) {
      throw new Error("Unable to extract JSON data from response");
    }

    const jsonData = JSON.parse(jsonString[1]);
    console.log(jsonData[1].map((item) => item[0]));
    return jsonData[1].map((item) => item[0]);
  } catch (error) {
    console.error("Error fetching suggestions:", error.message);
    throw error;
  }
};
