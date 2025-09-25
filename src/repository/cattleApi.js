export const fetchCattle = async () => {
    const res = await fetch('http://localhost:3000/api/cattles?page=1&limit=25');
    if (!res.ok) throw new Error('Cattle fetch failed');
    const json = await res.json();
    return json.data;
};