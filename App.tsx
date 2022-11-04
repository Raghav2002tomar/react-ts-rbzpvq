import * as React from 'react';
import './style.css';

export default function App() {
  const [list, setList]=React.useState([]);
  const [searchquery, setSearchquery]=React.useState(" ");
  const [filterdlist,setFilterdlist]=React.useState([]);
  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((ds)=>{
      // console.log(ds)
      ds.json().then((res)=>{
    // console.log(res);
    setList(res);
    setFilterdlist(res);
      });
      });
  },[]);
  const upadateQuery=(e)=>{
    setSearchquery(e.target.value);
  };
  const searchposters=()=>{
   let filterlist = filterdlist.filter((obj)=>{
      return obj.title.includes(searchquery);
    });
    console.log(filterlist);
    setFilterdlist(filterlist);
    setSearchquery(" ");
  }
  
  return (
  <div className="main-container">
    <div className="inputfeald">
      <p className="paragraph"> User Data Filter </p>
   <input type="text"  value={searchquery} placeholder="Type hear" onChange={upadateQuery}/>
   <span onClick={searchposters}><button className="button">Search</button></span>
   </div>
    <div className="container">
    
    {filterdlist.map((obj)=>{
       return(
       <div className="list" key={obj.id} >
         <h3 className="title-1">{obj.title}</h3>
         <p className="body">{obj.body}</p>
         </div>)
     })}
     </div> 
  </div>
  )
}
