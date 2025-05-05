async function getUser() {
    const username = document.getElementById('username').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Loading...";
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
  
      if (!response.ok) {
        resultDiv.innerHTML = `❌ User not found (status: ${response.status})`;
        return;
      }
  
      const data = await response.json();
  
      resultDiv.innerHTML = `
        <h3>${data.name} (@${data.login})</h3>
        <img src="${data.avatar_url}" width="100">
        <p>Followers: ${data.followers} | Following: ${data.following}</p>
        <p>Public Repos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
      `;
    } catch (error) {
      resultDiv.innerHTML = "⚠️ Network error. Try again later.";
      console.error(error);
    }
  }
  