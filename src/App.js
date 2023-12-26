// import logo from './logo.svg';
import './App.css';
import NoMatch from './component/NoMatch';
import UserView from './component/user/detail/UserView';
import UserList from './component/user/list/UserList';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <section>
      <div className='appContainer dflex fdirCol'>
          <Routes>
              <Route path='/' element={<UserList />}></Route>
              <Route path='/user/:userId' element={<UserView />}></Route>
              <Route path='*' element={<NoMatch />}></Route>
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
