document.addEventListener('DOMContentLoaded', () => {
    setDailyContent();
});

function setDailyContent() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    fetchDailyChairImage(dayOfYear);
    setDailyPantoneColor(dayOfYear);
}

function fetchDailyChairImage(dayOfYear) {
    const apiKey = 'vWTC7Hd2emQZMPuhuLArr6l1EG4E7RMNRcJcx2MFXUw';
    const url = `https://api.unsplash.com/photos/random?query=chair&client_id=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const chairImage = document.getElementById('chairImage');
            chairImage.src = data.urls.regular;
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            // Implement fallback image or error handling
        });
}

function setDailyPantoneColor(dayOfYear) {
    const colors = [
        '#F0F8FF', '#FAEBD7', '#00FFFF', '#7FFFD4', '#F0FFFF', 
        '#F5F5DC', '#FFE4C4', '#000000', '#FFEBCD', '#0000FF', 
        '#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', '#7FFF00', 
        '#D2691E', '#FF7F50', '#6495ED', '#FFF8DC', '#DC143C', 
        '#00FFFF', '#00008B', '#008B8B', '#B8860B', '#A9A9A9', 
        '#006400', '#BDB76B', '#8B008B', '#556B2F', '#FF8C00', 
        '#9932CC', '#8B0000', '#E9967A', '#8FBC8F', '#483D8B', 
        '#2F4F4F', '#00CED1', '#9400D3', '#FF1493', '#00BFFF', 
        '#696969', '#1E90FF', '#B22222', '#FFFAF0', '#228B22', 
        // ... additional 50 colors
        '#ADFF2F', '#F0FFF0', '#FF69B4', '#CD5C5C', '#4B0082', 
        '#FFFFF0', '#F0E68C', '#E6E6FA', '#FFF0F5', '#7CFC00', 
        '#FFFACD', '#ADD8E6', '#F08080', '#E0FFFF', '#FAFAD2', 
        '#D3D3D3', '#90EE90', '#FFB6C1', '#FFA07A', '#20B2AA', 
        '#87CEFA', '#778899', '#B0C4DE', '#FFFFE0', '#00FF00', 
        '#32CD32', '#FAF0E6', '#FF00FF', '#800000', '#66CDAA', 
        '#0000CD', '#BA55D3', '#9370DB', '#3CB371', '#7B68EE', 
        '#00FA9A', '#48D1CC', '#C71585', '#191970', '#F5FFFA', 
        '#FFE4E1', '#FFE4B5', '#FFDEAD', '#000080', '#FDF5E6', 
        '#808000', '#6B8E23', '#FFA500', '#FF4500', '#DA70D6'
    ];
    const selectedColor = colors[dayOfYear % colors.length];
    document.getElementById('colorBackground').style.backgroundColor = selectedColor;
}
