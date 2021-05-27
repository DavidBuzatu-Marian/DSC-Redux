import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Octokit } from '@octokit/core';
import { AUTH } from '../constants/default';
const octokit = new Octokit({
  auth: AUTH,
});
const ReadMe = () => {
  const [currState, setState] = useState({
    content: null,
  });

  const { content } = currState;

  useEffect(() => {
    const fetchGit = async () => {
      const res = await octokit.request('GET /repos/{user}/{repo}/readme', {
        user: 'davidbuzatu-marian',
        repo: 'Python_Cheatsheet',
      });
      setState({ content: atob(res.data.content) });
    };

    fetchGit();
  }, []);

  return <ReactMarkdown children={content} />;
};

export default ReadMe;
