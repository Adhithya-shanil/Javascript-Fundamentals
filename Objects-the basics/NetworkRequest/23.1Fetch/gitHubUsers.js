async function getUsers(usernames) {
    const userPromises = usernames.map(username => {
      // Fetch user data from GitHub API for each username
      return fetch(`https://api.github.com/users/${username}`)
        .then(response => {
          if (!response.ok) {
            return null; // If the response isn't OK, return null
          }
          return response.json(); // Parse the response as JSON
        })
        .then(data => {
          if (data) {
            // Return only the top 5 important details
            return {
              login: data.login,             // Username
              avatar_url: data.avatar_url,   // Avatar URL
              followers: data.followers,     // Number of followers
              following: data.following,     // Number of following
              public_repos: data.public_repos // Number of public repositories
            };
          }
          return null;
        })
        .catch(() => null); // Catch any error (like network issues) and return null
    });
  
    // Wait for all promises to resolve or reject
    const users = await Promise.all(userPromises);
  
    return users; // Return the array of user data (or nulls)
  }
  
  
  const usernames = ['octocat', 'nonexistentuser', 'torvalds'];

getUsers(usernames).then(users => {
  console.log(users); 
  // It will log an array with user data for 'octocat' and 'torvalds', 
  // and 'null' for 'nonexistentuser' if it doesn't exist.
});
