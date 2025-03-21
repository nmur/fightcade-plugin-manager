# fightcade-plugin-manager
This plugin manager provides a framework for loading one or more compatible Fightcade plugins.

## Installation
1. Download `fightcade-plugin-manager.zip` from the latest [release](https://github.com/nmur/fightcade-plugin-manager/releases) and extract it into your `Fightcade\fc2-electron\resources\app\inject` directory, overwriting the existing `inject.js` file.  
   - (optional) Backup the existing `inject.js` file if wish, else you can re-obtain it from [here](https://github.com/blueminder/fightcade-joystick-kb-controls/blob/main/inject.js) (it's the script that adds joystick/keyboard navigation to the Fightcade UI).
2. Add supported plugin files to the `/plugins` directory.

## Supported Plugins
- [fightcade-plugin-ping-filter](https://github.com/nmur/fightcade-plugin-ping-filter/tree/main): Filters out users from the userlist based on a specified ping
- fightcade-plugin-enable-devtools: Re-enables F12 Chrome DevTools
- fightcade-plugin-show-user-network-info(?): (Port of x) Shows the country flag and ping next to usernames in the chat panel
