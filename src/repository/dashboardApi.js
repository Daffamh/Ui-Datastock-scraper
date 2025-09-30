export const fetchDashboard = async () => {
    const res = await fetch("http://localhost:3000/api/dashboard");
    if (!res.ok) throw new Error('Cattle fetch failed');
    const json = await res.json();
    return json.data;
};