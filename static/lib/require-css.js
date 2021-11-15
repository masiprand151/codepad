define(function(require) {
    return async (path) => {
        const css = document.createElement('link');
        css.setAttribute('rel','stylesheet');
        css.setAttribute('href',`./app/${path}.css`);

        await document.head.appendChild(css);
    }
});