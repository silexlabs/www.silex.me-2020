const MarkdownIt = require("markdown-it")
const md = new MarkdownIt()

module.exports = function(eleventyConfig) {

  // sitemap
  const sitemap = require("@quasibit/eleventy-plugin-sitemap")
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://www.silex.me",
    },
  })

  // slideshow
  eleventyConfig.addPassthroughCopy({
    'node_modules/@splidejs/splide/dist/js': 'js',
    'node_modules/@splidejs/splide/dist/css': 'css',
  })

  // copy folders
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('uploads')
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css/*.css')
  eleventyConfig.addPassthroughCopy('css/*.jpg') // favicon
  eleventyConfig.addPassthroughCopy('css/*.png') // favicon
  eleventyConfig.addPassthroughCopy('css/*.ico') // favicon
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('CNAME')
 
  eleventyConfig.addFilter('getCollectionItemByFileSlug', function(collection, name) {
    return collection.find(item => item.fileSlug === name)
  })

  eleventyConfig.addFilter('markdown', function(m) {
    return md.render(m)
  })

  // other config
  return {
    dir: {
      layouts: '_layouts',
      includes: '_includes',
    },
  }
}
