document.getElementById('fetch').addEventListener('click', async () => {
      const username = document.getElementById('username').value;
      const resultDiv = document.getElementById('result');
      
      resultDiv.innerHTML = "<p>Loading...</p>";
      
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        
        const user = response.data;
        resultDiv.innerHTML = `
          <h2>${user.name || user.login}</h2>
          <img src="${user.avatar_url}" width="100" style="border-radius: 50%">
          <p>${user.bio || 'No bio'}</p>
          <p>📍 ${user.location || 'Unknown'}</p>
          <p>📦 Repositories: ${user.public_repos}</p>
          <p>👥 Followers: ${user.followers}</p>
          <a href="${user.html_url}" target="_blank">View Profile</a>
        `;
      } catch (error) {
        if (error.response?.status === 404) {
          resultDiv.innerHTML = `<p style="color: red;">User not found</p>`;
        } else {
          resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
      }
    });