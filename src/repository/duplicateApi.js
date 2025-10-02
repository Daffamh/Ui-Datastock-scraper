export const fetchDuplicate = async () => {
    const res = await fetch("http://localhost:3000/api/dashboard/duplicate_cattle");
    if (!res.ok) throw new Error('duplicate fetch failed');
    const json = await res.json();
    return json.data;
};