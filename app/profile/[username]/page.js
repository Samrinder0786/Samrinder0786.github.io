'use client';
import { use } from 'react'; 
import { useState, useEffect } from 'react';
import { getGitHubProfile } from '@/services/githubApi';
import { getStackExchangeProfile } from '@/services/stackExchangeApi';
import Card from '@/components/ui/Card';
import Skeleton from '@/components/ui/Skeleton';
import Link from 'next/link';

export default function ProfilePage({ params }) {
  const { username } = use(params);
  
  const [githubData, setGithubData] = useState(null);
  const [stackData, setStackData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [github, stack] = await Promise.all([
          getGitHubProfile(username),
          getStackExchangeProfile(username) // Changed from hardcoded ID to username
        ]);
        setGithubData(github);
        setStackData(stack);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (username) { 
      fetchData();
    }
  }, [username]);

  if (isLoading) {
    return (
      <div className="profile-container">
        <Skeleton className="h-8 w-64 mb-6" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <div className="flex items-center mb-4">
              <Skeleton className="w-16 h-16 rounded-full mr-4" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </Card>
          <Card className="p-6">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <div className="grid grid-cols-3 gap-4 mb-6">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="forum-container">
        <h1 className="forum-header">Error loading profile</h1>
        <p className="mb-4 text-red-500">{error}</p>
        <Link href="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="forum-container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="forum-header">@{username}</h1>
        <Link href="/" className="text-sm text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">GitHub Profile</h2>
          {githubData ? (
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src={githubData.avatar} 
                  alt={`${username}'s avatar`} 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium">{githubData.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{githubData.bio}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{githubData.followers}</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{githubData.following}</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{githubData.publicRepos}</div>
                  <div className="text-sm text-gray-500">Repos</div>
                </div>
              </div>
              
              <h3 className="font-medium mb-2">Top Repositories</h3>
              <div className="space-y-3">
                {githubData.repoStats.map(repo => (
                  <div key={repo.name} className="border rounded p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="font-medium">{repo.name}</div>
                    <div className="flex text-sm text-gray-500 mt-1">
                      <span className="mr-3">★ {repo.stars}</span>
                      <span className="mr-3">⎇ {repo.forks}</span>
                      <span>{repo.language}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">
              GitHub data not available
            </div>
          )}
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Stack Overflow Activity</h2>
          {stackData ? (
            <div>
              <div className="mb-6">
                <div className="text-2xl font-bold mb-1">{stackData.reputation}</div>
                <div className="text-sm text-gray-500">Reputation</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{stackData.badgeCounts.gold || 0}</div>
                  <div className="text-sm text-gray-500">Gold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{stackData.badgeCounts.silver || 0}</div>
                  <div className="text-sm text-gray-500">Silver</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{stackData.badgeCounts.bronze || 0}</div>
                  <div className="text-sm text-gray-500">Bronze</div>
                </div>
              </div>
              
              <h3 className="font-medium mb-2">Top Questions</h3>
              <div className="space-y-3">
                {stackData.topQuestions.length > 0 ? (
                  stackData.topQuestions.map(question => (
                    <div 
                      key={question.question_id || question.link || `question-${Math.random().toString(36).substr(2, 9)}`}
                      className="border rounded p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <a 
                        href={question.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {question.title}
                      </a>
                      <div className="flex text-sm text-gray-500 mt-1">
                        <span className="mr-3">▲ {question.score}</span>
                        <span>{question.answer_count || 0} answers</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No questions found
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">
              Stack Overflow data not available
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}