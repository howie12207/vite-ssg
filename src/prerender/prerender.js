// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.

const fs = require('fs');
const path = require('path');

const toAbsolute = p => path.resolve(__dirname, p);

const manifest = require('../../dist/ssr-manifest.json');
const template = fs.readFileSync(toAbsolute('../../dist/index.html'), 'utf-8');
const { render } = require('../../dist/server/entry-server.js');

// determine routes to pre-render from src/pages
const routesToPrerender = fs.readdirSync(toAbsolute('../views')).map(file => {
    const name = file.replace(/\.vue$/, '').toLowerCase();
    return name === 'home' ? '/' : `/${name}`;
});

(async () => {
    // pre-render each route...
    for (const url of routesToPrerender) {
        const [appHtml, preloadLinks] = await render(url, manifest);

        const html = template
            .replace('<!--preload-links-->', preloadLinks)
            .replace('<!--app-html-->', appHtml);

        const filePath = url === '/' ? '../../dist/' : `../../dist${url}`;
        if (url !== '/') fs.mkdirSync(toAbsolute(filePath));

        fs.writeFileSync(toAbsolute(`${filePath}/index.html`), html);
    }

    // done, delete ssr manifest
    fs.unlinkSync(toAbsolute('../../dist/ssr-manifest.json'));
    fs.unlinkSync(toAbsolute('../../dist/server/entry-server.js'));
    fs.unlinkSync(toAbsolute('../../dist/server/favicon.ico'));
    fs.rmdirSync(toAbsolute('../../dist/server'));
})();
