import React, { Component } from 'react';
import DirectMessage from './app/index';
//import DirectMessage from '@vixlet/react-native-direct-message'
import {
  AppRegistry,
} from 'react-native';

const domain = {
  "domainId": 9,
  "clientId": "mlb_league",
  "clientSecret": "quddPRV67ePxxqK",
  "parentDomains": [],
  "childDomains": [
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    31,
    32,
    33,
    34,
    30,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    43,
    44,
    45,
    42,
    46,
    47,
    48,
    49
  ],
  "names": {
    "abbreviation": "MLB",
    "fullName": "Major League Baseball",
    "name": "Major League Baseball",
    "shortFullName": "MLB",
    "urlScheme": "mlb",
    "androidPackageName": "com.vixlet.mlb",
    "applicationName": "MLB Fans",
    "officialPulseName": "Official",
    "fanPulseName": "Fan"
  },
  "statuses": {
    "updated": 1500658242592
  },
  "shareHost": "mlb.webapp.vixletinternal.com",
  "tos": {
    "version": "1.0.2",
    "url": "http://www.vixlet.com/legal/9"
  },
  "logo": {
    "png": "https://d2pezauyuknwi1.cloudfront.net/static/domain/9/logo_1489605024756.png",
    "svg": "https://d2pezauyuknwi1.cloudfront.net/static/domain/9/logo_1489605024756.svg"
  },
  "personalizePulseLists": [
    {
      "name": "Celebrity - MLB",
      "tag": "banana1"
    },
    {
      "name": "All Stars",
      "tag": "PYP"
    }
  ],
  "users": {
    "official": {},
    "regular": {}
  },
  "suggestedCapsules": [
    "597238b21e6a6f1100d162d4"
  ],
  "mobileCode": "ggg",
  "autoSubCapsules": [
    "591a382495308a0f00b7793c",
    "56e9f1268ee38f9d0f50bacb"
  ],
  "capsuleIds": [
    "58a205cc59564b0f00f34b1b"
  ],
  "isLive": true,
  "suggestedUserGroups": [
    "58da9ea7bf553c1f00d34edd"
  ],
  "colors": {
    "temp6Argb": "FFFFFFFF",
    "temp5Argb": "FF002E5B",
    "temp4Argb": "FF1282C7",
    "temp3Argb": "4D000000",
    "temp2Argb": "FF0D3F71",
    "temp1Argb": "FFFAFAFA",
    "brand6Argb": "FF002E5B",
    "brand5Argb": "FF00264D",
    "brand4Argb": "FF1D61A3",
    "brand3Argb": "FFCC0000",
    "brand2Argb": "FF0D3F71",
    "brand1Argb": "FF002E5B"
  },
  "id": "556902cc57f2d9ff8d9e0155",
  "featuredCapsuleLists": [
    {
      "id": "57c61ac6ad7fdd0e00fb4bed",
      "name": "default",
      "domainId": 9,
      "displayName": "Explore",
      "statuses": {
        "created": 1472600774600,
        "activated": 1478124921820,
        "updated": 1499880266322
      }
    },
    {
      "id": "5807f780c896932400994e57",
      "name": "oct19a",
      "domainId": 9,
      "displayName": "oct19a",
      "statuses": {
        "created": 1476917120897,
        "activated": 1478124956277,
        "updated": 1490735912170
      }
    },
    {
      "id": "580fd94231bed81f001f9b37",
      "name": "rekt",
      "domainId": 9,
      "displayName": "rekt",
      "statuses": {
        "created": 1477433666928,
        "activated": 1478124958963,
        "updated": 1490735906148
      }
    }
  ],
  "assets": {
    "avatar-default.vector": "/avatar-default-005ac45c99.svg",
    "button__store_apple.vector": "/button__store_apple-c3c4a308f4.svg",
    "button__store_google.vector": "/button__store_google-12c2fa6f39.svg",
    "button__store_apple.raster": "/button__store_apple-591d54d245.png",
    "button__store_google.raster": "/button__store_google-9e50eaf05f.png",
    "logo__now_on_vixlet--ondark.vector": "/logo__now_on_vixlet--ondark-e132b6c13f.svg",
    "logo__simple.ico": "/logo__simple-5c646d1947.ico",
    "logo__simple.vector": "/logo__simple-5d841697f8.svg",
    "logo__simple_404--ondark.vector": "/logo__simple_404--ondark-94a370da13.svg",
    "logo__vixlet_v_white.vector": "/logo__vixlet_v_white-8e024ea7a5.svg",
    "icon__social.vector": "/icon__social-9550127aaf.svg",
    "button__social_facebook.raster": "/button__social_facebook-1a293974ae.png",
    "button__social_googleplus.raster": "/button__social_googleplus-459179808d.png",
    "button__social_tumblr.raster": "/button__social_tumblr-061cbd99c4.png",
    "button__social_twitter.raster": "/button__social_twitter-cb6b3ddfbf.png",
    "logo__legal.vector": "/9/logo__legal-ed7f4cce64.svg",
    "logo__detailed--ondark.vector": "/9/logo__detailed--ondark-6a1d398a48.svg",
    "logo__detailed--ontheme.vector": "/9/logo__detailed--ontheme-0fd6ccbe77.svg",
    "logo__lockup_now_on_vixlet--ondark.vector": "/9/logo__lockup_now_on_vixlet--ondark-e1abae5dde.svg",
    "logo__lockup--ondark.raster": "/9/logo__lockup--ondark-33c8d93bc1.png",
    "logo__lockup--onlight.raster": "/9/logo__lockup--onlight-e771363741.png",
    "logo__lockup--ondark.vector": "/9/logo__lockup--ondark-24f422d535.svg",
    "logo__lockup--onlight.vector": "/9/logo__lockup--onlight-1f37a0d653.svg",
    "logo__simple_wide--ondark.vector": "/9/logo__simple_wide--ondark-d92b0a27af.svg",
    "logo__simple_wide--ontheme.vector": "/9/logo__simple_wide--ontheme-8da63c8e05.svg",
    "logo__app_header.raster": "/9/logo__app_header-583bb1fdb5.png",
    "logo__newsletter_header.raster": "/9/logo__newsletter_header-04503037d4.png",
    "logo__newsletter_footer.raster": "/9/logo__newsletter_footer-dc340e11fc.png",
    "logo__app_icon.raster": "/9/logo__app_icon-9692d23ec7.png",
    "logo__social__link__header.vector": "/9/logo__social__link__header-2fce257d06.svg",
    "graphic__widgets_auth_intro.raster": "/9/graphic__widgets_auth_intro-73c3f93a5e.jpg",
    "graphic__widgets_auth_intro@2x.raster": "/9/graphic__widgets_auth_intro@2x-419a0e28e9.jpg",
    "graphic__widgets_auth_intro@3x.raster": "/9/graphic__widgets_auth_intro@3x-4fe0842a55.jpg",
    "bg__app_brand_menu_header.raster": "/9/bg__app_brand_menu_header-26186abb44.png",
    "bg__app_preview.raster": "/9/bg__app_preview-4261163785.png",
    "bg__web_404.raster": "/9/bg__web_404-46fe46838b.jpg",
    "bg__web_activation.raster": "/9/bg__web_activation-ed7e5e6107.jpg",
    "bg__web_ken_burns--1.raster": "/9/bg__web_ken_burns--1-46fe46838b.jpg",
    "bg__web_ken_burns--2.raster": "/9/bg__web_ken_burns--2-303e7b1cee.jpg",
    "bg__web_ken_burns--3.raster": "/9/bg__web_ken_burns--3-5d81d1ec5c.jpg",
    "bg__web_ken_burns--4.raster": "/9/bg__web_ken_burns--4-7188662184.jpg",
    "bg__web_orient_step1.vector": "/9/bg__web_orient_step1-d91c011bcf.svg",
    "bg__web_orient_step2.vector": "/9/bg__web_orient_step2-3bd836b341.svg",
    "bg__web_orient_step3.vector": "/9/bg__web_orient_step3-e957d01d34.svg",
    "bg__web_orient_step4.vector": "/9/bg__web_orient_step4-e330736c2c.svg",
    "bg__web_splash_mobile.raster": "/9/bg__web_splash_mobile-a0320cc222.jpg",
    "button__brand_login.vector": "/9/button__brand_login-1ddeadaa0f.svg",
    "logo__splash_brand_slogan.vector": "/9/logo__splash_brand_slogan-1e5dc0d57f.svg",
    "vixletlogo__newsletter.raster": "/9/vixletlogo__newsletter-1d11931072.png",
    "logo__small.raster": "/9/logo__small-00929d10f7.png",
    "logo__header.raster": "/9/logo__header-130405a7a4.png"
  },
  "assetsOriginCdn": "https://p8v2z3a6.map2.ssl.hwcdn.net",
  "userGroups": [
    {
      "domainId": 9,
      "name": "abcd_1490722470523",
      "displayName": "abcd",
      "statuses": {
        "created": 1490722471131,
        "updated": 1500490552010,
        "activated": 1500490550692
      },
      "id": "58da9ea7bf553c1f00d34edd"
    },
    {
      "domainId": 9,
      "name": "mlb_baseball_super_fans_1500490961354",
      "displayName": "MLB Baseball Super Fans",
      "statuses": {
        "created": 1500490961462,
        "activated": 1500490984789,
        "updated": 1500490986237
      },
      "id": "596facd1d954533300a6bc8b"
    }
  ]
}
const user = {"id":"554d3013f6e581ed0cc33ce2","username":"gregisreal","firstName":"John","lastName":"Test","avatar":{"original":"https://vixletmedia.imgix.net/9/images/554d3013f6e581ed0cc33ce2/67b65553bba64692a744e22edeeec9e6/og.png","large":"https://vixletmedia.imgix.net/9/images/554d3013f6e581ed0cc33ce2/67b65553bba64692a744e22edeeec9e6/og.png?fit=max&w=640&h=640","medium":"https://vixletmedia.imgix.net/9/images/554d3013f6e581ed0cc33ce2/67b65553bba64692a744e22edeeec9e6/og.png?fit=max&w=320&h=320","small":"https://vixletmedia.imgix.net/9/images/554d3013f6e581ed0cc33ce2/67b65553bba64692a744e22edeeec9e6/og.png?fit=max&w=128&h=128"},"email":"omggreg@vixletdev.com","contactPrefs":{},"statuses":{"updated":1500660414823,"loggedIn":1500660414731,"created":1440443962728,"lastSeen":{"9":1500497968100}},"birthDate":90835200000,"address":{"streetNumber":"","streetName":"","city":"Los Angeles","stateProvince":"CA","zipPostalCode":"","country":"USA"},"gender":"M","bio":"OMG IT WORKED GUIZ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e www.google.com dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","preferences":{"10":{"showNewsletters":false}},"loggedDomains":[1,10,108888,12,14,6,9,52,53,66,58,64],"registeredDomain":10,"metadata":{"tag":{},"tags":[{"name":"only on vixlet","messages":[],"resources":[]},{"name":"keith_16","messages":[],"resources":[]},{"name":"verified","messages":[],"resources":[]}]},"domainId":9,"domainIds":[9,82],"shareProviders":{"facebook":true,"twitter":true},"favSubDomains":[23,44],"createdInDomains":{"capsules":[10,6,9,12,22,21,1,52],"posts":[10,9,6,1,22,14,12,20,58,52]},"pushNotificationTypes":{},"urbanAirShipToken":{},"counts":{"likes":102,"shares":39,"comments":191,"following":58,"followers":47,"capsules":45,"publishedCapsules":45,"createdCapsules":51,"publishedMedia":535,"createdMedia":870,"subscriptions":260}}

const appData = {
  domain,
  originApi: 'https://api.vixletinternal.com/',
  token: '6LzN2t7RHF62ipNzL7kR5v9Rj8XZaJ27CH8AFd2GGZWKV9WgQQTKVYxX3tDifmh55CSyr5pRfbwpBNgMqhaPDCSitjscUr6BuotHAuLYjaJTEq1tgJBWTk7dnA7d56BxeVYmBvfgkzPEa9aKSeHigeyNAbSawiHAhVrewSA7AkDom5SAH3ACrdKPjsRC9VoxAbMD1nPi3AkBpwG2dXXZ6vci1MpQ6sngcxV3sJhT5nhV2iw688W88y6CkADdqtU62HoHvXpradiD4fCH6tDHQfdWyYxNRVGo3WLTN2FXhrgbjYzyCpkaou4KGvZq9GzcdZcnsyEJ8PMRwCJSuZqt3d642YTTLHTFmjg67Mi1XUrqNHg3Zt2j6ccFnzLhJNTQ5fm7dchu6TpArMYCcQQU4MSQDHxRpbvFTYyhiv4BnV',
  user
}
const VixletDemo = (context) => (
  <DirectMessage domain={appData.domain} originApi={appData.originApi} token={appData.token} user={appData.user} />
);

AppRegistry.registerComponent('VixletDemo', () => VixletDemo);
