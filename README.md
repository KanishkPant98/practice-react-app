Episode 2:

#Parcel
-> -D stands for Dev Dependency || Types 1)normal 2) Dev Dependency
->Deb Build
->Local Server
->HMR = Hot Module Replacement
->File Watching Algo (Written in c++)
->Caching -Faster Builds
->Image Optimization
->Minification of File
->Bundling
->Compressing
->Consistent Hashing
->Code splitting
->Differential Bundeling - support older browsers
->Diagonostic
->Error Handeling
->HTTPS
->Tree Shaking -remove unused code

*****Remove main: App.js from package before npx parcel build index.html
-----------
Episode 3:

->Write script in package json
    "start": "parcel index.html",
    "build": "parcel build index.html",
->since 'start' is reserved keyword in npm npm run start == npm start 

#JSX
->JSX is a HTML like syntax (is not HTML inside JS)
->to give attributes to jsx use CAMEL CASE, example class == className
->If multiline JSX write it b/w ()

#React component
#Functional component 
-> JS functions whihc returns react element
->Name start with capital eg: 
const HeadingComponent = () =>{
    return <h1 id='heading' className="heading">This is JSX Heading 🚀</h1>
}
->Component Composition: Compositing two components in one another
-----
Episode 4 (Food odering App - 1)

#App basic layput planning
Header
  -Logo
  -Nav Items
Body
  -Search
  -Retraunt Contaner
    -Restrant Card
Footer
  -Copyrights
  -Link
  -Contact Info

#Props: Arguements passed to functional components
->Destructuring of props
#Config Driven UI
#Clodinary--->CDN for images
#Whenever iterating through a list pass 'key' (reserved keyword) to uniquely identify an element  
#It is not recommended use index or iterator as 'key' as it may change and it is an ANTI-PATTERN 
----
Episode 5 (Food odering App - 2)
#Best practice is to create seperate files for separate components
#Keep name of the component file similar to the functional component same (function name)
#Never Keep a hardcoded Data in a component file
#Two Types of import/export - a)Default b)Named
#To import named exports we have to use {} when importing
#Event Handlers

*React Hooks
->State- Super powerful varible
->Hook : Normal JS Utility function given by React
->Type of Hooks:
  ->useState() - Superpowerful state var in react
  ->useEffect()
 
 #useState()
  ->To Create useState: 
    let [state,setState] = useState(initialstate);

  Example:
    let [listOfRestraunt,setListofRestraunt] = useState([]) is similar to let listOfRestraunt;
  
  #useState() will return an array [state,setState] where on first index it returns state var and on second it return function that will take a modified value of state.

  ->Nomenclature of setState function should be "set" + name of State variable

  #Whenever a state var updates react re-renders the component

  #Super Powers of React:-
    -React usess Reconcilition Algo also known as react fibre
    -Virtual Dom: Virtual DOM is representation of actual DOM
-----
Episode 6
#Monolith and Microservice Architechture
#Microservice Architechture: - Seperation of concerns (Single responsibility)
#useEffect(cb,dependancyArr)
  ->useEffect(()=>{
    console.log('Use Effect is called')
  },[])

->If we have to manipulate DOM after re-rendering/rendring of DOM do it in useEffect()
#Shimmer UI - Show skeleton till Data is available
#Whenever state var changes React will re-render compoment and component will get updated values
#Whenever local state var is changes - React re-renders component
--------
Episode 6,6.1
-How to handle corse issue, after disabling the cors plugin
-corsproxy.io:
-Add cors proxy url before your API
------
Episode 7
-If no dependency array useEffect will be called on every componenet render
-If the dependecy array is empty, then useEffect is called on initial render and just once.
-If dependency array is defined, then useEffect is called whenenvever it is updated, useEffect(()+>{
  console.log('Hello');
},[btnNameReact])

-Never create state var outside component
-Nerver create useState inside if-else as it can create inconsisitency 

#Routes
- import React Router DOM
  -Ex: import {createBrowserRouter,RouterProvider}
-Set router configuration
  EX: const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>
    },
    {
       path: '/about',
      element: <About/>
    }
  ])
-React router gives a special hook - 'useRouterError'
#Whenever a function starts with use it is a hook in react

#Children routes
- <Outlet> is used to render the children route component on route change 
-<Outlet> will be replaced by children component 

#Never use an anchor tag when you want to navigate through pages when using React as it will reload the whole page instead use <Link to '/'></Link>
->Above is the reason why we call React a SPA (Single Page Application)

-There are two types of routing that we can have in web app
  -Client Side Routing 
  -Server Side Routing 

#Dynamic Routing
-Dyamic part is represented by ':' for example
  {
    path: '/restraunt/:resId',
    element: <RestrauntMenu/>
  }
#useParams hook

-----------
Episode 8
#Class based component 
-A functional component is a function that returns a JSX where as a CLASS BASED component is a class that has a render method which return JSX
export default UserClass

-To use props passed  in class based component we use constructor

import React from "react"
constructor(props){
  super(props);
  console.log(props)
}
class UserClass extends React.Component {
  render(){
    return (<h1>Hello</h1)
  }
}

-How to update a state in class based component?
  ->this.setState({
    count: this.count + 1;
  })

-Life Cycle for class based component
  ->parent Constructor()->parent render->child Constructor()->child render->child ComponentDidMount()->Parent ComponentDidMount()

-Child Component Did mount can be used to call API 

----
Episode-09 Optimizing App

-Creating customhooks to achieve single responsibilty principle

-Lazy Loading a component: Code will be presented to browswer when required

Jargons- 
//Chunking 
//Code Splitting
//Dynamic Bundeling
//Lazy Loading
//On Demand Loading

import {Lazy, Suspense} from react

const Grocery = lazy(()=>import("./component/Grocery"))

{
  path: '/grocery'
  Component: <Suspense fallBack={<h1>Loading....</h1>}><Grocery><Grocery/><Suspense>
}

-----
Episode 10 Jo Dikhta hai wahi bikta hai 

-SASS/SCSS
-Matrial UI/Chakra UI (PROVIDES PRESTYLED COMPONENTS)
-Styled Components

-**Tailwind CSS
-Configuring Tailwind CSS for our React Project
-(Using tailwind makes bundling size small)Faster as only required css is imported while building
-Install tailwind intelli sense extension | Use tailwind website to search if you face dificulties
-Dark mode using tailwind css
-----------
Episode 11| Data is the new oil
-HOC (Higger Order Component)- A function that takes a component as an input -> enhances that component and returns that component 
#Cannot change behavior but only enhance for eg- UX/UI or adding some props
-UnControlled Component:-Relying upon its parent for it states
-Controlled Component:-States are relied on parent
#Lifting State Up:- Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. 
#Props Drilling- passing data from data to grand childrens 
#React context (Solves problem of props drilling) ****Important

->Creating context

import {createContext} from 'react'

const UserContext = createContext({
  loggedInUser: "Default User"
})

export default UserContext;
---

->Using Context

import {userContext} from react
import UserContext from '..//utils/UserContext' //path where UserContext is created

const HeaderComponent = ()=>{
  const {loggedInUser} = userContext(UserContext)
}

----
->Using Context in class based component
class UserClass extends React.Component{
   constructoe(props){
    super(props);
   }
   render(){
    return(
      <div>
        <UserContext.Consumer>
          {({loggedInUser})=> loggedInUser && <h2 >Logged In User: {loggedInUser}</h2>}
        </UserContext.Consumer>
      </div>
    )
   }
}
---
->Providing Context API (Wrapping compoments user <UserContext.provide> so that the components wrapper has that value)

<UserContext.provide value={{ loggedInUser: userName, setUserName: setUserName }}>
  <Header/>
  <Outlet/>
</UserContext.provide>


#Here we can pass setMethod (serUserName) in this case so that the components which are context can change the value of context
