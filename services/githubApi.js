export async function getGitHubProfile(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('User not found');
    const data = await response.json();
    
    // Get repo stats (using the first few repos)
    const reposResponse = await fetch(data.repos_url);
    const reposData = await reposResponse.json();
    const repoStats = reposData.slice(0, 3).map(repo => ({
      name: repo.name,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language
    }));

    return {
      avatar: data.avatar_url,
      name: data.name || username,
      bio: data.bio || 'No bio available',
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos,
      repoStats
    };
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
}