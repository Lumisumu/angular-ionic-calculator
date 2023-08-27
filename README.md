# angular-ionic-calculator

Simple mobile platform calculator.

# Install:

Angular CLI version 16.0.0

Node 16.17.0

Ionic 7.1.1

Cordova Clipboard 1.3.0

Cordova-res (global install required)

```
npm install -g cordova-res
```

# Build it yourself:

Make build into new folder. You can replace android with another platform:

```
ionic build android
```

If you want to use your own icon and splash, replace them in /resources.

Install cordova-res and copy icons to build folder:

```
cordova-res android --skip-config --copy
```

Build and finish in Android Studio:

```
ionic capacitor build android
```
