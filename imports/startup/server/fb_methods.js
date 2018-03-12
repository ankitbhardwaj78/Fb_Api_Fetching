import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import Tokens from '../../api/tokens'
Meteor.methods({
  "get_long_term_token"(token){
    let baseurl = "https://graph.facebook.com/v2.12/"
    let path = "oauth/access_token?grant_type=fb_exchange_token"
    let client_id = "1785168145124929"
    let client_secret = "935cdfdc96188a59a4c488fb600c186e"
    let apiurl =`${baseurl}${path}&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=${token}`
    let res = HTTP.call("get", apiurl);
    return res;
  },
  "search_query"(value,token){
    let baseurl = "https://graph.facebook.com/v2.11/search?type=page&fields=cover,name,fan_count,rating_count,overall_star_rating,picture"
    let client_id = "1785168145124929"
    let client_secret = "935cdfdc96188a59a4c488fb600c186e"
    let apiurl =`${baseurl}&q=${value}&client_id=${client_id}&client_secret=${client_secret}&oauth_token=${token}`
    console.log(apiurl);
    let res = HTTP.call("get",apiurl);
    return res;
  }
});
