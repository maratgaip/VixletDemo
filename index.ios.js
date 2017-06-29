import React, { Component } from 'react';
import DirectMessage from './app/index';
//import DirectMessage from '@vixlet/react-native-direct-message'
import {
  AppRegistry,
} from 'react-native';
const appData = {
  domain: {domainId: 10},
  initialView : 'create',
  originApi: 'https://api.vixletinternal.com/v4',
  token: 'UiRGRgAC1iXGhi6Atuc6aeocPf9G4VM1aQJz88vG1SVunD5yrCR3Kak4tZtQP3dgp7MV95xaW3pEzBo8ttMrKbKg7UDnSxSfuB9dCmYsMHQ4GDt2N4RbB5CSmq8GVDx3cTfcMV8a9Jfg1brpWaQFBfNEgMuJPzAfSpNd7acFVRRpXnXMf4QZmu5jmmoCkteD7GMpjffwgZFTiwRKRFZdUx8bVurAfbdNeS8PZGVGX1MSxFMQvHcMccmiTMFZfswD679R4Zxv9CV2Fd4rVA1UkNcCFs8JHoAhNnCGNbRnCsZkiqGmYd2XmhbzThKPd8wwNnBMqzA15efEAtPisjLbvTKoeiGKQ6WvLbmiryoSmo3p6x3YQ3XoKZkV6BoC1pxd4SKvEKYHdHmoUAHe9sMokPeSWhT8eQ9RRX6ySX4tH2',
  user: {id:"56156e84363c61d00f7c3cee",username:"redtomatobrotha",firstName:"tomato",lastName:"",avatar:{original:"https://d2pezauyuknwi1.cloudfront.net/static/avatar/user_large.png",large:"https://d2pezauyuknwi1.cloudfront.net/static/avatar/user_large.png",medium:"https://d2pezauyuknwi1.cloudfront.net/static/avatar/user_medium.png",small:"https://d2pezauyuknwi1.cloudfront.net/static/avatar/user_small.png"},email:"redtomato@vixletdev.com","contactPrefs":{email:true,sms:false},statuses:{created:1444245125125},domainId:10}
}
const VixletDemo = () => (
  <DirectMessage domain={appData.domain} originApi={appData.originApi} token={appData.token} user={appData.user} />
);

AppRegistry.registerComponent('VixletDemo', () => VixletDemo);
