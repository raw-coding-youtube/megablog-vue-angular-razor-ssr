import { createApp } from "./main";

export default function (context) {
    const { app, router, store } = createApp();

    return new Promise((resolve, reject) => {
        const { url, origin } = context;

        router.push(url);

        router.onReady(() => {
            const components = router.getMatchedComponents();

            Promise.all(components.map(async component => {
                if (component.loadAsync) {
                    const params = router.app.$route.params;

                    await component.loadAsync({ store, origin, params });
                }
                if (component.meta) {
                    const { title, description, keywords } = component.meta instanceof Function
                        ? component.meta(store.state)
                        : component.meta;

                    context.title = title;
                    context.meta = `<meta decription="description" content="${description}" />
<meta decription="keywords" content="${keywords}" />`
                }
            }))
                .then(() => {
                    context.state = store.state;

                    resolve(app);
                })
        })
    })
}