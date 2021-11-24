# Cordova sample

## 必裝環境
###### cordova cli:
  **Mac/Linux: sudo npm install -g cordova**
  
  **Windows: npm install -g cordova**

######  node_modules cli:
  **npm install**

## 專案產出防護版ipa/apk順序
  **1.webpack bundle: npm run build**
  **3.Cordova build (android/ios/browser)**  
---

## Webpack bundle指令
###### cordova cli:
  **npm run build**
  
  **webpack設定檔可參考webpack.config.js**
  **webpack run build設定檔可參考package.json**  

## 產生ipa/apk/browser

###### **產生ios**
**cordova build ios**

###### **產生android**
**cordova build android**

###### **產生browser**
**cordova build browser**

###### **產生所有平台**
**cordova build**

## 運行app

###### **運行ios**
**cordova run ios**

###### **運行android**
**cordova run android**

###### **運行browser**
**cordova run browser**

## 平台建立
###### **增加 Platforms cli**
  **cd 專案**  
  **cordova platform add ios**  
  **cordova platform add android**  
  **cordova platform add browser**  

  **檢查有哪些platforms**  
  **cordova platform ls**
  

