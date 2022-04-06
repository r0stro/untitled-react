import './App.css';

import Users from "../../untitled-react/src/components/Users/Users";
import Posts from "../../untitled-react/src/components/Posts/Posts";
import Comments from "../../untitled-react/src/components/Comments/Comments";

function App() {
  return (
      <div>
        <div className={'wrap'}>
          <Users/>
          <Posts/>
        </div>
        <Comments/>
      </div>
  );
}

export default App;