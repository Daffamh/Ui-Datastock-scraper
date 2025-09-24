export const fetchAbattoirs = async () => {
  const res = await fetch('http://localhost:3000/api/abattoirs');
  if (!res.ok) throw new Error('Abattoirs fetch failed');
  const json = await res.json();
  if (!json.success) throw new Error('Invalid abattoirs response');
  return json.data;
};