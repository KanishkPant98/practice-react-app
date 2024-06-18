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
->If multiline JSX write it b/w {{}}

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



