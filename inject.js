const fs = require('fs');
const path = require('path');

const loadPlugins = async (FCADE) => {
    const pluginsDir = path.join(__dirname, 'plugins');
    const pluginFiles = fs.readdirSync(pluginsDir).filter(file => file.endsWith('.js'));

    for (const file of pluginFiles) {
        try {
            require(path.join(pluginsDir, file))(FCADE);
        } catch (error) {
            console.error(`Error loading plugin \"${file}\":`, error);
        }
    }
};

const waitForVue = (callback) => {
    const appElement = document.querySelector('#app');
    if (appElement?.__vue__?._data?.global?.setTheme) {
        callback(appElement.__vue__);
    } else {
        setTimeout(() => waitForVue(callback), 300);
    }
};

const fightcadePlugins = (fcWindow) => {
    fcWindow.currentChannel = 0;
    waitForVue((FCADE) => loadPlugins(FCADE));
};

fightcadePlugins(window);
