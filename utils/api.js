export const fetchContacts = async (host = '') => {
    const res = await fetch(`${host}/api/post`);
    const data = await res.json();
    return data;
}

export const fetchContactById = async (host = '', id) => {
    const res = await fetch(`${host}/api/post/${id}`);
    const data = await res.json();
    return data;
}