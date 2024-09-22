import "./style.css";
import { debounce, throttle, pick, uniq } from "es-toolkit";

/* Debounce Example */

// Function that simulates an API call
function fetchData(query) {
  console.log(`Fetching data for: ${query}`);
}

// Debounced version of the fetchData function
const debouncedFetchData = debounce(fetchData, 1000);

document.getElementById("search-input").addEventListener("input", (event) => {
  const query = event.target.value;
  debouncedFetchData(query);
});

/* Throttle Example */

// Function to fetch posts from an API
async function fetchPosts() {
  console.log("Fetching new posts...");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  console.log("Posts fetched:", posts);
}

// Create a throttled version of fetchPosts
const throttledFetchPosts = throttle(fetchPosts, 2000);

// Set up an event listener on the button
document.getElementById("fetch-more-posts").addEventListener("click", () => {
  console.log("button clicked");
  throttledFetchPosts();
});

/* Pick Example */

// Mock user data
const user = {
  id: 1,
  username: "johndoe",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  phoneNumber: "1234-5678",
};

// Use pick function to select specific properties
const pickedUser = pick(user, ["username", "email", "age"]);

console.log("pickedUser", pickedUser);

/* Uniq Example */
const tags = [
  "javascript",
  "coding",
  "webdev",
  "programming",
  "javascript",
  "react",
  "nodejs",
  "coding",
  "html",
  "css",
  "webdev",
  "frontend",
];

// Use uniq to filter out duplicate tags
const uniqueTags = uniq(tags);

console.log("uniqueTags", uniqueTags);
