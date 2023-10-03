export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Fo2fM7ZqJiesuxpcydN9yT1d2a7M79LE	&q=${category}&limit=10`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));    
    return gifs;
}
