// cattleApi.js
export const fetchCattle = async (page = 1, limit = 1000) => {
    const res = await fetch(`http://localhost:3000/api/cattles?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error('Cattle fetch failed');
    const json = await res.json();
    return json.data;
};