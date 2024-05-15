const randomImageGenerator = async () => {
  try {
    // Fetch random image from Unsplash API
    const response = await fetch(
      "https://source.unsplash.com/random/200x200/?profile"
    );
    const imageURL = response.url;
    return imageURL;
  } catch (error) {
    console.error("Error fetching profile picture:", error);
    res.status(500).send("Error fetching profile picture.");
  }
};

export default randomImageGenerator;
