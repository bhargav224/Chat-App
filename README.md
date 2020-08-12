# Cook-it Mobile App
  <h2>React-Native Installation using React-Native cli <a href="https://reactnative.dev/docs/0.61/getting-started" target="_blank">https://reactnative.dev/docs/0.61/getting-started</a></h2>

##To run App on IOS/Android follow below steps inside Project Folder

 1. npm install
 2. react-native link
 3. react-native run-ios (for IOS)
 4. react-native run-android (for Android)

 ## Common error comes during installation  
 ### 1. Error code 65 in ios xcodeproject
      ###Follow below steps for solution
         1) rm -rf ios/build
         2) rm -rf /tmp/metro-bundler-cache-*
         3) rm -rf /tmp/haste-map-react-native-packager-*
         4) rm -rf node_modules/ iOS/ android/
         5) npm install 
         6) react-native eject  // for generate iOS and android
         7) react-native link
         8) react-native run-ios
         
 ### 2. Unrecognized font family 'xyz'
 
       #### IOS
             1) open xcodeproject in Xcode
             2) Darg and Drop Fonts folder from node_modules/react-native-vector-iocns to xocdeproject root folder
             3) Add entry for missing fonts into info.plist. 
  [a link](https://www.quora.com)<a href="https://github.com/oblador/react-native-vector-icons/issues/965#issuecomment-548042586">https://github.com/oblador/react-native-vector-icons/issues/965#issuecomment-548042586</a></h1>
