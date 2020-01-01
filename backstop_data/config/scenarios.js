const baseUrl = "http://localhost:3000";

let scenarios = [
    {
        "label": "index",
        "url": baseUrl + "/index.html",
        "selectors": [
            ".top-bar",
            ".callout",
            ".blog-post",
            ".sticky-container",
            ".pagination"
        ]
    },
    {
        "label": "agency",
        "url": baseUrl + "/agency.html"
    },
    {
        "label": "news-magazine",
        "url": baseUrl + "/news-magazine.html"
    },
    {
        "label": "ecommerce",
        "url": baseUrl + "/ecommerce.html"
    },
    {
        "label": "blog",
        "url": baseUrl + "/blog.html"
    },
    {
        "label": "blog-simple",
        "url": baseUrl + "/blog-simple.html"
    },
    {
        "label": "portfolio",
        "url": baseUrl + "/portfolio.html"
    },
    {
        "label": "product-page",
        "url": baseUrl + "/product-page.html",
        "selectors": [
            ".row:not(.medium-up-3)"
        ]
    },
    {
        "label": "real-estate",
        "url": baseUrl + "/real-estate.html"
    },
    {
        "label": "marketing-site",
        "url": baseUrl + "/marketing-site.html"
    }
];
module.exports = scenarios;
