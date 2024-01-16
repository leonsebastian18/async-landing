
const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL-z1rENcADnswDt79m0k0pI_k2AukPjEr&part=snippet&maxResults=50';

const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f81931c338msh04ffbffdb281adbp101ec0jsncd02bef9d5ea',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};



async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
	const data = await response.json(); 
    return data;
}

(async () => {
    try {debugger;
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => ` 
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }