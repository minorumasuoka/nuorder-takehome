import axios from 'axios';

const getIssues = async () => {
  const { data: issues } = await axios('https://api.github.com/repos/facebook/react/issues');
  
  return issues;
};

export default {
  getIssues
};