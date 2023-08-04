const version = "5.0.20";
const buildNumber = 324;

export default () => ({
  "expo": {
    "owner": "ribon-app",
    "name": "Ribon",
    "slug": "app",
    "version": version,
    "orientation": "portrait",
    "icon": "./src/assets/images/icon.png",
    "scheme": "ribon",
    "jsEngine": "hermes",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./src/assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "hooks": {
      "postPublish": [
        {
          "file": "sentry-expo/upload-sourcemaps",
          "config": {
            "organization": "ribon",
            "project": "app",
            "authToken": "4957af0e317f490ab4c702c5a88a881d3233f518f2764481879932cb51a278d0"
          }
        }
      ]
    },
    "updates": {
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/5f34ae47-0c00-49ae-9893-125f3bea2960"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist",
      "infoPlist": {
         "UIBackgroundModes": [
           "fetch",
           "remote-notification"
         ],
         "NSCameraUsageDescription": "This app requires access to your phone's camera."
      },
      "supportsTablet": true,
      "bundleIdentifier": "org.reactjs.native.example.Ribon",
      "buildNumber": buildNumber.toString(),
    },
    "android": {
      "googleServicesFile": "./google-services.json",
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/images/adaptive-icon.png",
        "backgroundColor": "#00DA93"
      },
      "package": "com.app.ribon",
      "versionCode": buildNumber,
    },
    "web": {
      "favicon": "./src/assets/images/favicon.png"
    },
    "plugins": [
      [
        "expo-build-properties",
        {
          "android": {
            "compileSdkVersion": 33,
            "targetSdkVersion": 33,
            "buildToolsVersion": "33.0.0"
          },
          "ios": {
            "useFrameworks": "static"
          }
        }
      ],
      "sentry-expo",
      "@react-native-firebase/app",
      "@react-native-firebase/perf",
      "@react-native-firebase/crashlytics",
      [
        "@config-plugins/react-native-branch",
        {
          "apiKey": "key_live_psjoynwxXPk14LioRerHjhggEvgKd6Bh",
          "iosAppDomain": "donation.app.link"
        }
      ],
      [
        "@stripe/stripe-react-native",
        {
          "merchantIdentifier": "merchant.ribon.app",
          "enableGooglePay": true
        }
      ],
    ],
    "extra": {
      "eas": {
        "projectId": "5f34ae47-0c00-49ae-9893-125f3bea2960"
      },
      "REACT_APP_RIBON_API": process.env.REACT_APP_RIBON_API,
      "REACT_APP_RIBON_INTEGRATION_ID": process.env.REACT_APP_RIBON_INTEGRATION_ID,
      "REACT_APP_MIXPANEL_TOKEN": process.env.REACT_APP_MIXPANEL_TOKEN,
      "REACT_APP_STRIPE_GLOBAL_PUBLISHABLE_KEY": process.env.REACT_APP_STRIPE_GLOBAL_PUBLISHABLE_KEY,
      "REACT_APP_STRIPE_PUBLISHABLE_KEY": process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    },
    "runtimeVersion": {
      "policy": "appVersion"
    }
  }
});
