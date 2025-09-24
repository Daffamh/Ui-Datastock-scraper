export const fetchFeedlots = async () => {
  const res = await fetch('http://localhost:3000/api/feedlots');
  if (!res.ok) throw new Error('Feedlots fetch failed');
  const json = await res.json();
  if (!json.success) throw new Error('Invalid feedlots response');
  return json.data;
};