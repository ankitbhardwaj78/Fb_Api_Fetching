import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
export const Tokens = new Mongo.Collection("tokens");
Meteor.methods({
  "tokens.insert"(token,type){
    return Tokens.insert({ token, type });
  },
  "get_long_token"(type){
    return Tokens.findOne({type});
  },
  "insert_data"(data,name){
    return Tokens.insert({data,name});
  },
  "find_page"(name){
    console.log("yo",name);
    return Tokens.findOne({name});
  }
});
