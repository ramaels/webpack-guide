function getComponent() {
    //const element = document.createElement('div');

    return import('lodash')
        .then(({ default: _ }) => {
            const element = document.createElement('div');

            element.innerHTML = _.join(['Hello', 'webpack'], ' ');

            return element;
        })
        .catch((error) => 'An error occurred while loading the component');
}

function addButton() {
    //const btn = document.createElement('button');

    return import('./print.js')
        .then(({ default: printMe }) => {
            const btn = document.createElement('button');

            btn.innerHTML = 'Click me and check the console!';
            btn.onclick = printMe;
            return btn;
        })
        .catch((error) => 'An error occurred while loading the button');
}

getComponent().then((component) => {
    addButton().then((btn) => {
        component.appendChild(btn);
    });
    document.body.appendChild(component);
})

