import React,{ Component } from 'react';
import ReactDOM  from 'react-dom';
import ListPage from './ListPage';
import Tokens from '../api/tokens';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={value:"",data:""}

  }

  search(){
    Meteor.call("get_long_token","Long",(err,res) => {
      if(err)
      console.log(err);
      else {
        console.log(res.token);
        let token = res.token.access_token
        Meteor.call("find_page",this.state.value,(err,res)=>{
          if(res)
          {
            this.setState({
              data:res
            })
           console.log(res);
          }
          else {
            Meteor.call("search_query",this.state.value,token,(err,res) => {
              if(err)
              console.log(err);
              else {
                console.log(res);
                this.setState({
                  data:res.data
                })
                Meteor.call("insert_data",res.data.data,this.state.value,(err,res)=>{
                  if(err)
                  console.log(err);
                  else{
                    console.log(res);
                  }
                })
                console.log(this.state.data);
              }
            });
          }
        })
      }
    });
  }
  onchange(event){
    this.setState({
      value:event.target.value
    })
    console.log(this.state.value);
  }
  render(){
    return(
      <div>
      <input className="form-control mr-sm-2"
      value={this.state.value}
      name="search-bar"
      placeholder="enter your query"
      onChange={this.onchange.bind(this)}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" onClick = {this.search.bind(this)}>Search</button>
      <ListPage data = {this.state.data} />
      </div>
    )
  }
}
