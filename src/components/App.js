import React  from 'react';
import Aux from '../hoc/_Aux'
import Menu from './Menu/Menu'
import SidebarMenu from '../components/Menu/SidebarNemu/SidebarMenu'
const App = (props) =>(
  <Aux>
      <Menu/>
      <SidebarMenu/>
      {props.children}
  </Aux>
)
export default App;
