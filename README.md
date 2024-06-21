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



