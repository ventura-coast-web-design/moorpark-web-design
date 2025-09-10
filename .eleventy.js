module.exports = function(eleventyConfig) {
    // Copy assets to _site
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("sitemap.xml");
    
    // Set input and output directories
    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
}; 