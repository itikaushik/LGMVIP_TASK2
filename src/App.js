import { Fragment, useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from './components/Button'
const App = () => {
  const [userData,setUserData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [activeUser,setActiveUser]=useState(false);
  const [activeLink,setActiveLink]=useState(0);

  const onClickHandler = ()=>{
     setLoading(true);
     axios.get('https://randomuser.me/api/?results=6')
     .then ((response)=>{
       console.log(response.data.results);
       setUserData(response.data.results);
     }).catch((error)=>{
       console.log(error);
       setLoading(true);
     }).finally(()=>{
       setLoading(false);
       setActiveLink(true);
     })

  }
  const PhraseGenerator=({user})=>{
    const phrases=[
      `${user.name.first} ${user.name.last}`
    ]
        return <h2>{phrases}</h2>
  }
  return(
    <div className="App">
       <div className="nav">
          <h1>Lets Grow More</h1>
          <Button isActive={activeUser} clicked={onClickHandler}/>
       </div>
       {loading ? (
         <h1>Loading...</h1>
       ):(
         <div className="app_user">
           {userData.map((user)=>{
             return(
               <Fragment key={user.cell}>
               <div className="users">
                 <img src={user.picture.large} alt="#"></img>
                 <PhraseGenerator user={user} />
                </div>
               </Fragment>
             )
           })}
         </div>
       )}
    </div>
  );
}
export default App;