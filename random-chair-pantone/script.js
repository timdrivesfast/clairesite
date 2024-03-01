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
    setDailyQuote(dayOfYear); // Added to set the daily quote
}

function fetchDailyChairImage(dayOfYear) {
    const apiKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Ensure to use your actual API key
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
            // Fallback or error handling
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
        '#808000', '#6B8E23', '#FFA500', '#FF4500', '#DA70D6',
        '#F0F8FF', '#FAEBD7', '#00FFFF', '#7FFFD4', '#F0FFFF', 
    ];
    const selectedColor = colors[dayOfYear % colors.length];
    document.getElementById('colorBackground').style.backgroundColor = selectedColor;
}

function setDailyQuote(dayOfYear) {
    const quotes = [
        "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
        "It’s not what you look at that matters, it’s what you see. – Henry David Thoreau",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "An unexamined life is not worth living. – Socrates",
        "Happiness is not something readymade. It comes from your own actions. – Dalai Lama",
        "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. – Henry Ford",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. – James Cameron",
        "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
        "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
        "In order to write about life first you must live it. – Ernest Hemingway",
        "The big lesson in life, baby, is never be scared of anyone or anything. – Frank Sinatra",
        "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. – Leo Burnett",
        "Life is not a problem to be solved, but a reality to be experienced. – Søren Kierkegaard",
        "The unexamined life is not worth living. – Socrates",
        "Turn your wounds into wisdom. – Oprah Winfrey",
        "The way to get started is to quit talking and begin doing. – Walt Disney",
        "The purpose of our lives is to be happy. – Dalai Lama",
        "Life is what happens when you’re busy making other plans. – John Lennon",
        "Get busy living or get busy dying. – Stephen King",
        "You only live once, but if you do it right, once is enough. – Mae West",
        "Many of life’s failures are people who did not realize how close they were to success when they gave up. – Thomas A. Edison",
        "If you want to live a happy life, tie it to a goal, not to people or things. – Albert Einstein",
        "Never let the fear of striking out keep you from playing the game. – Babe Ruth",
        "Money and success don’t change people; they merely amplify what is already there. – Will Smith",
        "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs",
        "Not how long, but how well you have lived is the main thing. – Seneca",
        "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt",
        "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. – Henry Ford",
        "In order to write about life first you must live it. – Ernest Hemingway",
        "The big lesson in life, baby, is never be scared of anyone or anything. – Frank Sinatra",
        "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth. – (Attributed to various sources)",
        "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. – Leo Burnett",
        "Life is not a problem to be solved, but a reality to be experienced. – Søren Kierkegaard",
        "The unexamined life is not worth living. – Socrates",
        "Turn your wounds into wisdom. – Oprah Winfrey",
        "The purpose of our lives is to be happy. – Dalai Lama",
        "Life is what happens when you’re busy making other plans. – John Lennon",
        "You only live once, but if you do it right, once is enough. – Mae West",
        "Never let the fear of striking out keep you from playing the game. – Babe Ruth",
        "Money and success don’t change people; they merely amplify what is already there. – Will Smith",
        "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
        "Not how long, but how well you have lived is the main thing. – Seneca",
        "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt",
        // Add more quotes as desired
    ];
    const selectedQuote = quotes[dayOfYear % quotes.length];
    document.getElementById('quoteContainer').innerText = selectedQuote;
}

