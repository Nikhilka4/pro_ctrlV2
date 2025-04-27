export const fetchProjectDetail = async (projectId: string) => {
  const res = await fetch(`/api/projects/${projectId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch project details');
  }

  return res.json();
};
// Export the fetchProjects function
export const fetchProjects = async () => {
  // Mock implementation or actual API call
  return [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
  ];
};