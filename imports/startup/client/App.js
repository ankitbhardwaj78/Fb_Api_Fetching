import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Header} from '../../ui/Header.js';
import Faker from 'Faker';
import FbLogin from '../../ui/FbLogin';
import SearchBar from '../../ui/SearchBar';
import ListPage from '../../ui/ListPage';
class App extends Component {
  constructor(props){
    super(props);
    this.state = { brandName : ""}

  }
  settingSDK(){
    window.fbAsyncInit = function() {
       FB.init({
         appId            : '1785168145124929',
         autoLogAppEvents : true,
         xfbml            : true,
         version          : 'v2.12'
       });
     };

     (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }

componentDidMount(){
//  fetch('https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=1785168145124929&client_secret=935cdfdc96188a59a4c488fb600c186e&fb_exchange_token=EAAZAXmdknjkEBALrOZAB93wxPz7ZAMEntHX15vpnVsfHAtxjLFErzI1yiFJXQVEUvrU1jjfDZA1bAHlXzDavqxbAzEKB1rhGCZANu22jkbyqpP39oukPv4M68ZAx9xS2XiMKpIkBD67dg7s8tUt3yB672HJjVVyCFB3WfFMBZCg1018wJhvcr45zU8GYnSw53g2K8ISIK9gtwZDZD ').then(results => {
  //  return results.json();
//  }).then(data => {
//    console.log(data);
//  }

  //)
 this.settingSDK();
}


  render(){
  return (
    <div>
    <Header brandName = {this.state.brandName}/>
    <FbLogin />
    <SearchBar />
    </div>
   )
 }
}
Meteor.startup(() => {
    ReactDOM.render(<App />,document.querySelector(".render-target"));
});
