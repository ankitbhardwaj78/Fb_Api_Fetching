import React from 'react';
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";

export default ListPage = (props) => {
  console.log("youuuu",props);
  let data = props.data.data || [];
  data.sort((a,b)=>(a.fan_count)-(b.fan_count));
  const renderpages = (data) =>{
    return data.map((e,i) => {
      return  <tr key={i}>
                  <td>{(e.cover && e.cover.source)?<img src= {e.cover.source} height="100px" width="100px"/>:""}</td>
                  <td>{e.fan_count}</td>
                  <td>{e.overall_star_rating}</td>
                  <td>{(e.picture && e.picture.data.url)?<img src= {e.picture.data.url} height="50px" width="50px"/>:""}</td>
              </tr>
    });

  }
  return (
         <table className="table">
          <thead>
               <tr>
                  <th>cover photo</th>
                  <th>Fan Count</th>
                  <th>Overall Star Rating</th>
                  <th>Profile Pic</th>
              </tr>
         </thead>
         <tbody>
            {renderpages(data)}
         </tbody>
        </table>
  )
}
