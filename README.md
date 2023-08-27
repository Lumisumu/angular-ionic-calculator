# angular-ionic-calculator

Simple Android calculator, Angular + Ionic

Angular CLI version 16.0.0
Node 16.17.0
Ionic 7.1.1
Cordova Clipboard 1.3.0

#Build it yourself:
Make build into new folder. You can replace android with another platform:

```
ionic build android
```

If you want to use your own icon and splash, replace them in /resources. Install cordova-res and copy icons to build folder:

```
npm install -g cordova-res
cordova-res android --skip-config --copy
```

Build and finish in Android Studio:

```
ionic capacitor build android
```
