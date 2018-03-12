import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class FbLogin extends Component{
  constructor(props){
    super(props);
    this.state=({ auth:true , token:" ",status:"Login With Fb"})
  }
  Fblogin(){
    let that=this;
    FB.login(function(response) {
      if (response.authResponse) {

        that.setState({
          token:response.authResponse.accessToken,
          status: "Logout"
        })
        let token = response.authResponse.accessToken;
        Meteor.call("tokens.insert",token,"short",(err,res) => {
          if(err)
          console.log("not saved",err);
          else {
            console.log("saved Successfully",res);
            console.log("token",token);
            Meteor.call("get_long_term_token",token,(err,res)=>{
              if(err)
              console.log(err);
              else {
                console.log(res);
                Meteor.call("tokens.insert",res.data,"Long",(err,res) => {
                  if(err){
                    console.log("not saved",err);
                  }
                  else{
                    console.log("saved Successfully",res);
                  }
                })
              }

            })

          }
        })

      }
      else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }
  render(){
    return(

      <button type="button" className="btn btn-primary " onClick={this.Fblogin.bind(this)}>{this.state.status}</button>
    )
  }
}
