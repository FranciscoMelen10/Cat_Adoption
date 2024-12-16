export const fetchCats = async () => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "live_2GVd79Dx5EW1mPcIs6YyASPh6wWvndvsuHWUPUvL2ioluygaQhM0G3cK1RDvTQG4",
  });

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=50",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error", error);
  }
};
