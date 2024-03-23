import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Menu from './components/Views/Menu';
import Home from './components/Views/Home';
import About from './components/Views/About';
import ViewNotFound from './components/Views/ViewNotFound';
import Users from './components/Views/Users';
import Adduser from './components/Views/Adduser';
import ModifyUser from './components/Views/ModifyUser';
import UserDetails from './components/Views/UserDetails';
import Articles from './components/Views/Articles';
import Article1 from './components/Views/NestedRoute/Article1';
import Article2 from './components/Views/NestedRoute/Article2';
import PersonalDetails from './components/Views/NestedRoute/PersonalDetails';
import AddressDetails from './components/Views/NestedRoute/AddressDetails';
import Login from './components/Views/Login';
import ProtectedRoute from './components/Views/ProtectedRoute';
import { Provider } from 'react-redux';
import CakeContainer from './ReduxDemo/Cake/CakeContainer';
import store from './ReduxDemo/store';
import TestContainer from './ReduxDemo/Cake/TestContainer';


function App() {  
  return (
      //   <BrowserRouter>
      //         <Menu/>
      //         <Routes>
      //              <Route path='/' element={<Navigate to='/login'/>}/>
      //               <Route path='/home' element={<Home/>} />
      //               <Route path='/about' element={<About/>} />
      //               <Route path='/users' element={<ProtectedRoute Component={Users}/>} />
      //               <Route path='/user/create' element={<Adduser/>} />
                    
      //               <Route path='/user/edit' element={<ModifyUser/>} />
      //               {/* http://localhost:3000/user/details/6 */}
      //               {/*  without state props */}
      //               <Route path='/user/details/:id' element={<UserDetails/>} />
                  
      //               {/* With state props */}
      //               <Route path='/user/details' element={<UserDetails/>}>
      //                          <Route path='personal' element={<PersonalDetails/>} />
      //                          <Route path='address'  element={<AddressDetails/>}/>
      //                 </Route>  
      //                <Route path='/articles' element={<Articles/>}>
      //                     <Route path='article1' element={<Article1/>}/>
      //                     <Route path='article2' element={<Article2/>}/>
      //               </Route>
      //               <Route path='/login' element={<Login/>} />


      //               <Route path='*' element={<ViewNotFound/>} />
      //          </Routes>
      //   </BrowserRouter>

      <Provider store={store}>
             <CakeContainer/>
      </Provider>
  );
}

export default App;





