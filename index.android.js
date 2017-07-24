import React, { Component } from 'react';
import DirectMessage from './app/index';
//import DirectMessage from '@vixlet/react-native-direct-message'
import {
  AppRegistry,
} from 'react-native';
const appData = {
  domain: {domainId: 9},
  originApi: 'https://api.vixletinternal.com/',
  token: 'UiRGRgAC1iXGhi6Atuc6aeocPf9G4VM1aQJz88vG1SVunD5yrCR3Kak4tZtQP3dgp7MV95xaW3pEzBo8ttMrKbKg7UDnSxSfuB9dCmYsMHQ4GDt2N4RbB5CSmq8GVDx3cTfcMV8a9Jfg1brpWaQFBfNEgMuJPzAfSpNd7acFVRRpXnXMf4QZmu5jmmoCkteD7GMpjffwgZFTiwRKRFZdUx8bVurAfbdNeS8PZGVGX1MSxFMQvHcMccmiTMFZfswD679R4Zxv9CV2Fd4rVA1UkNcCFs8JHoAhNnCGNbRnCsZkiqGmYd2XmhbzThKPd8wwNnBMqzA15efEAtPisjLbvTKoeiGKQ6WvLbmiryoSmo3p6x3YQ3XoKZkV6BoC1pxd4SKvEKYHdHmoUAHe9sMokPeSWhT8eQ9RRX6ySX4tH2',
  user: {id:"560d6c0120790ada0e9eb24d",username:"vixletesting@mailinator.com",firstName:"Wonder",lastName:"Woman",avatar:{original:"https://vixletmedia.imgix.net/upload/5b553c1f-82b5-48ef-9c04-5e460990fb38/original?fit=max&w=128&h=128",large:"https://vixletmedia.imgix.net/upload/5b553c1f-82b5-48ef-9c04-5e460990fb38/original?fit=max&w=640&h=640",medium:"https://vixletmedia.imgix.net/upload/5b553c1f-82b5-48ef-9c04-5e460990fb38/original?fit=max&w=640&h=640",small:"https://vixletmedia.imgix.net/upload/5b553c1f-82b5-48ef-9c04-5e460990fb38/original?fit=max&w=640&h=640"},
    email:"redtomato@vixletdev.com","contactPrefs":{email:true,sms:false},statuses:{created:1444245125125},domainId:9}
}
const VixletDemo = () => (
  <DirectMessage domain={appData.domain} originApi={appData.originApi} token={appData.token} user={appData.user} />
);

AppRegistry.registerComponent('VixletDemo', () => VixletDemo);