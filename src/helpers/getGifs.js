


export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=kacPQHWS4w7U5uI6oxr0QwxJSsbHUjGr&q=${category}&limit=20`;

  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  console.log(gifs);
  return gifs;
};