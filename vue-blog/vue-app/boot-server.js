const prerenderer = require('aspnet-prerendering');
const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname, '../wwwroot/dist/bundle-server.js')

const vueRenderer = require('vue-server-renderer');
const renderOptions = {
    template: fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8')
}

const bundleRenderer = vueRenderer.createBundleRenderer(filePath, renderOptions);

module.exports = prerenderer.createServerRenderer(function (params) {
    const context = {
        url: params.url,
        origin: params.origin
    }

    return new Promise(function (resolve, reject) {
        bundleRenderer.renderToString(context, function (err, html) {
            if (err) {
                reject(err);
            }

            resolve({
                html,
                globals: {
                    __INITIAL_STATE__: context.state
                }
            })
        });
    })
});