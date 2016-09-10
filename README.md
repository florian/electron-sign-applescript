## Instructions

1. `git clone https://github.com/florian/electron-sign-applescript && cd electron-sign-applescript`
2. `npm install`
3. `npm start` to run the app

The app should open Spotlight / run an AppleScript for pressing Cmd+Space. If not then something is going wrong.

## Packaging

`make` will package the app and try to sign it. The goal is that executing the signed .app file will open Spotlight. Currently this doesn't work because of missing entitlements.

## Related issue

[https://github.com/electron-userland/electron-osx-sign/issues/61#issuecomment-230172285]
