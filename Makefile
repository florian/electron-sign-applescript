all: package sign

package:
	electron-packager . eas --platform=mas --arch=x64 --overwrite --asar --ignore=node_modules

sign:
	electron-osx-sign eas-mas-x64/eas.app --entitlements=entitlements.plist
	electron-osx-flat eas-mas-x64/eas.app

# --overwrite sometimes doesn't work so this is needed
remove_old:
	chflags nouchg eas-mas-x64
	rm -rf eas-mas-x64

p: package
s: sign
a: all
