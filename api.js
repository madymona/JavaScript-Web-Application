export const API_URL = 'https://api.disneyapi.dev/character';

export async function fetchCharacters(page = 1) {
    const response = await fetch(`${API_URL}?page=${page}`);
    const data = await response.json();
    return data;
}

export async function searchCharacters(query) {
    const response = await fetch(`${API_URL}?name=${query}`);
    const data = await response.json();
    return data;
}
export const getCharacterById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    const data = await response.json();
    console.log('Received data:', data);
    return data;
}