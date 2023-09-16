import {Post} from "./Post"
import { Header } from "./components/Header"
import "./global.css"


export function App() {
    return ( 
      <div>
        <Header/>
    <Post 
    author="igor" 
    content="lima "
     /> 
     <Post 
     content="post 2"
     />
      </div>
  )
}


