'use client';
import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { getDiscussions, getDiscussionById, addDiscussion, addComment } from '@/services/ForumAPI';
import { getGitHubProfile } from '@/services/githubApi';
import { getStackExchangeProfile } from '@/services/stackExchangeApi';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme Management
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('codehive-theme');
    const prefersDark = typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.body.classList.toggle('dark', initial === 'dark');
  }, []);
  
  const toggleTheme = () => {
    setTheme(t => {
      const next = t === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('codehive-theme', next);
        document.body.classList.toggle('dark', next === 'dark');
      }
      return next;
    });
  };

  // Code Snippets State
  const [snippets, setSnippets] = useState([
    { id: 's1', language: 'javascript', code: 'console.log("Hello CodeHive");', createdAt: '2024-08-01' }
  ]);
  
  const addSnippet = (snippet) => {
    const newItem = { 
      ...snippet, 
      id: `s${Date.now()}`, 
      createdAt: new Date().toISOString().slice(0,10) 
    };
    setSnippets(prev => [newItem, ...prev]);
    return newItem;
  };

  // Forum Discussions State
  const [discussions, setDiscussions] = useState([]);
  const [isLoadingDiscussions, setIsLoadingDiscussions] = useState(false);
  const [discussionsError, setDiscussionsError] = useState(null);

  const fetchDiscussions = async () => {
    setIsLoadingDiscussions(true);
    setDiscussionsError(null);
    try {
      const data = await getDiscussions();
      setDiscussions(data);
    } catch (error) {
      setDiscussionsError(error.message);
    } finally {
      setIsLoadingDiscussions(false);
    }
  };

  const fetchDiscussion = async (id) => {
    try {
      return await getDiscussionById(id);
    } catch (error) {
      console.error('Failed to fetch discussion:', error);
      throw error;
    }
  };

  const createDiscussion = async (newDiscussion) => {
    try {
      const discussion = await addDiscussion({
        ...newDiscussion,
        replies: 0,
        views: 0,
        comments: []
      });
      setDiscussions(prev => [discussion, ...prev]);
      return discussion;
    } catch (error) {
      console.error('Failed to create discussion:', error);
      throw error;
    }
  };

  const createComment = async (discussionId, comment) => {
    try {
      const newComment = await addComment(discussionId, {
        ...comment,
        date: new Date().toISOString().slice(0,10)
      });
      setDiscussions(prev => prev.map(d => 
        d.id === discussionId 
          ? { 
              ...d, 
              comments: [...(d.comments || []), newComment], 
              replies: (d.replies || 0) + 1 
            }
          : d
      ));
      return newComment;
    } catch (error) {
      console.error('Failed to add comment:', error);
      throw error;
    }
  };

  // Profile Data State
  const [profileData, setProfileData] = useState(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [profileError, setProfileError] = useState(null);

  const fetchProfileData = async (username) => {
    setIsLoadingProfile(true);
    setProfileError(null);
    try {
      const [githubData, stackData] = await Promise.all([
        getGitHubProfile(username),
        getStackExchangeProfile(username) // Assuming username maps to StackExchange ID
      ]);
      setProfileData({ githubData, stackData });
    } catch (error) {
      setProfileError(error.message);
    } finally {
      setIsLoadingProfile(false);
    }
  };

  // Initial Data Fetch
  useEffect(() => {
    fetchDiscussions();
  }, []);

  const value = useMemo(() => ({
    // Theme
    theme, toggleTheme,
    
    // Snippets
    snippets, addSnippet,
    
    // Forum
    discussions, 
    isLoadingDiscussions, 
    discussionsError,
    fetchDiscussion, 
    createDiscussion, 
    createComment,
    
    // Profile
    profileData,
    isLoadingProfile,
    profileError,
    fetchProfileData
    
  }), [
    theme, 
    snippets, 
    discussions, 
    isLoadingDiscussions, 
    discussionsError,
    profileData,
    isLoadingProfile,
    profileError
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);