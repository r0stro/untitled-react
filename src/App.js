import './App.css';
import Users from "../../untitled-react/src/components/users/Users";
import UserDetails from "../../untitled-react/src/components/userDetails/UserDetails";
import Posts from "../../untitled-react/src/components/posts/Posts";
import {useState} from "react";

function App() {

  const getUser = (user) => {
    setUser(user);
    setUserId(null)
  }

  const getUserId = (id) => {
    setUserId(id);
  }

  let [user, setUser] = useState(null);
  let [userId, setUserId] = useState(null);

  return (
      <div>
        <div className={'wrap'}>
          <Users getUser={getUser}/>
          {user && <UserDetails user={user} getUserId={getUserId}/>}
        </div>
        {userId && <Posts userId={userId}/>}
      </div>
  );
}

export default App;