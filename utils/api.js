export const fetchContacts = async (host = '') => {
    const res = await fetch(`${host}/api/post`);
    const data = await res.json();
    return data;
}