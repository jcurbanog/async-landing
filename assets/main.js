const API = 'https://spotify23.p.rapidapi.com/user_profile/?id=12148786148&playlistLimit=10&artistLimit=10'

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '016f8a9b48msh81550fd4de6c715p1e5742jsne681ff3b97f6',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const songs = await fetchData(API)
        let view = `
        ${songs.recently_played_artists.map(song => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${song?.image_url}" alt="${song.name}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${song.name}.
                    </h3>
                </div>
            </div>      
        `)}
        `
        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
})();