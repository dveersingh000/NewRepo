// script.js

$(document).ready(function() {
    // Fetch news content from Flipboard API
    fetchNewsContent();

    function fetchNewsContent() {
        // Make AJAX request to Flipboard's RSS feed API
        $.ajax({
            url: 'FLIPBOARD_API_URL',
            method: 'GET',
            success: function(response) {
                // Parse response and populate news sections
                populateNewsSections(response);
            },
            error: function(xhr, status, error) {
                console.error('Failed to fetch news content:', error);
            }
        });
    }

    function populateNewsSections(data) {
        // Example: Populating technology news section
        let technologyNews = $('#technology-news');
        // Extract relevant data from the API response and iterate through articles
        data.technology.articles.forEach(article => {
            // Create HTML elements for each article
            let articleHtml = `
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description}</p>
                        <a href="${article.url}" class="btn btn-primary" target="_blank">Read More</a>
                    </div>
                </div>
            `;
            // Append the HTML to the technologyNews section
            technologyNews.append(articleHtml);
        });
    }
});
