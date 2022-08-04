const API_KEY = 'zdMn7Lz5amIwCfpM45SsnaFXBtgn4Aui';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&Q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(({ id, title, images }) => ({
        id: id,
        title: title,
        url: images.downsized_large.url
    }));
    
    return gifs;
}