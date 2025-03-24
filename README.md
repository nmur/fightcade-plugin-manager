# fightcade-plugin-manager
This plugin manager provides a framework for loading one or more compatible Fightcade plugins.

## Installation
Download `fightcade-plugin-manager.zip` from the latest [release](https://github.com/nmur/fightcade-plugin-manager/releases) and extract it into your `Fightcade\fc2-electron\resources\app\inject` directory, overwriting the existing `inject.js` file. Backup the existing `inject.js` file if wish, else you can re-obtain it from [here](https://github.com/blueminder/fightcade-joystick-kb-controls/blob/main/inject.js) (it's the script that adds joystick/keyboard navigation to the Fightcade UI).

You can now add supported plugin files to the `\plugins` directory where they will be loaded automatically.

## Supported Plugins
- [fightcade-plugin-ping-filter](https://github.com/nmur/fightcade-plugin-ping-filter): Filters out users from the userlist based on a specified ping
- [fightcade-plugin-enable-devtools](https://github.com/nmur/fightcade-plugin-enable-devtools): Re-enables F12 Chrome DevTools
- [fightcade-plugin-auto-join-channel](https://github.com/nmur/fightcade-plugin-auto-join-channel): Skip the welcome page when launching Fightcade and automatically connect to a game's channel
- [fightcade-plugin-chat-user-info](https://github.com/nmur/fightcade-plugin-chat-user-info): Port of [Ren](https://x.com/rencoding)'s player info code included in their [Fightcade Renhanced Plugins](https://github.com/Arkadyzja/fcade-renhanced)

## Creating Plugins

Make a copy of [pluginTemplate.js](https://github.com/nmur/fightcade-plugin-manager/blob/main/pluginTemplate.js), and add your code in the `runPlugin` function.
```js
module.exports = (FCADE) => { runPlugin(FCADE) };

const runPlugin = (FCADE) => {
    // Plugin code goes here
}
```

## Acknowledgements 

Credits to [Ren](https://x.com/rencoding) for their [Fightcade Renhanced Plugins](https://github.com/Arkadyzja/fcade-renhanced), which this project took most of the functionality and ideas from. 
