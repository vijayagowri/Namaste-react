# Namste-react
***
## This is Inception Assignment 01
***
### Q.1 What is Emmet ?
    Emmet is a tool which makes development easy.
    It provides intelligence. It helps in suggesting the word which can be used.
    Ex: suppose if we type html:5  and then press enter it will generate basic html 5 skeleton.
### Q.2 Difference between a library and framework.
#### Framework :
    1. Frameworks have any no of libraries, api, compiler to provide the full fledge env for development of application.
    We can’t combine with other frameworks.
    2. We cannot use framework between the development. Example:: Angular,NextJs.
#### Library :
    1. Library is set of function and class which provide the reusability of code.
    2. With the help of library, we can design application as we want because it is totally in your hand to decide the flow of the application.
    3. We can use library in small portion of application. Like in header or footer or in any particular div we can import react Example : React, JQuery.
### Q.3 What is CDN why we use it?
 CDN full form is content delivery network.
 CDN provide the fast access to resources because every company or application provide the resources of chunk to all the server across the globe or the multiple places so that the client get the fast result.
 We use CDN for the fast delivery of our Resources. But we won’t able to work with CDN’s in offline as it requires network connectivity.
### Q.4 What is the Difference between React and ReactDOM 
#### React :
React have different set of function by which user can create objects that can be Java script object only. It contains different react api’s which written in javascript. 
#### ReactDOM:
 With the help of React DOM react object converts to the browser understandable code that it is HTML not the JS object (Render method in React Dom help it to convert the HTML). ReactDOM mainly contains DOM manipulation api’s.
### Q.5 what is difference between ReactJs dev env and react JS prod link. 
React development is the development version of react and we can clearly see the functions and classes inside it. And we can put debuggers in that dev file and user can be able to read dev code. Size of file is more.
But Production files have been minified and code got freezed and we won’t be able to read or put debugs over there. And size also less.
### Q.6 Why React called React
React is very powerful library to build interactive User Interface applications. React is very fast in nature and responsvie. It 'reacts' with data changes. When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library.
### Q.7 What we write Crossorigin in script tag?
We use crossorigin when we want to download images or scripts or iframe or fonts from other server sites.
If it is a script file it will help to expose errors in file.
Crossorigin allows 2 values <script crossorigin="anonymous|use-credentials">
    anonymous - A cross-origin request is performed. No credentials are sent or required
    use-credentials -- A cross-origin request is performed. Ccredentials are sent (ex: cookie, certificate, some form of authentication).

## This is Ingition Assignment 02
### What is `NPM`?
Npm is everything not only a node package manager. It is software package manager to help to install dependencies into the project. NPM Registry contains thousands of code libraries. All npm packages are defined in package.json file.
Firstly it created NodeJs packages from then it is mostly called as Node Package Manager but it is not only a node package manager.
### What is `Parcel/Webpack`? Why do we need it?
Parcel is what every library or framework needed. It is a Bundler. Parcel makes application faster, React or any other framework have functions or classes or different APIs which helps in at the coding level only. But Parcel or webpack will take care of everything.  
When we run npx parcel index.html it will create a build for us and it will start live server in it. It is a complier
### What is `.parcel-cache`
Parcel-cache folder is a temporary folder created by parcel. When we run build in terminal at the time parcel-cache folder will be created and inside folder we have our build files in encrypted format. For the first time when we run build it will take time but for the subsequent builds it will take cache from this folder. It is to decrease build time of application. Even if you delete this folder again it will create when we run build.
### What is `npx` ?
The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package. The npx is useful during a single time use package. If you have installed npm below 5.2.0 then npx is not installed in your system. You can check npx is installed or not by running the following command: npx -v
 #### npm
 If you wish to run package through npm then you have to specify that package in your package.json and install it locally.
To use `create-react-app` in npm the commands are `npm install create-react-app` then `create-react-app myApp` (Installation required).
Npm is a tool that use to install packages.
Packages used by npm are installed globally. You have to care about pollution in the long term.
#### npx
A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.
In npx you can create a react app without installing the package:
`npx create-react-app myApp`
This command is required in every app’s life cycle only once.
 Npx is a tool that use to execute packages.
 Packages used by npx are not installed globally. You don’t have to worry about for pollution in the long term.
### What is difference between `dependencies` vs `devDependencies`
Dependencies are required for project at development phase and in production also. 
If we need some libraries only at the time of development. Those we have to install in devDependencies. Those are not required in production. Ex: Eslint or good-comments some sort of styling libraries.
Npm install react – will add in dependecnies
Npm install -D react or npm install react –save-dev  -- will install in devdependencies
### What is Tree Shaking?
If there is any unused code present in our application. It will automatically detected and will be removed. And it is taking care by task runner. Webpack/parcel.
### What is Hot Module Replacement?
If we do any changes in application and saving the files. The app will automatically restarts with the changes and updated code is executed in browser without reload the application.  It is called hot module reloading. Parcel using file watch algorithm to detect changes in files
### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
1.	Code Complication: When we run npm start, the app automatically compiling react code into browser readable code .i.e html, javascript
2.	Live server:  When we run application it automatically install server in our local to run the application.
3.	Hot Module Reload: Reloading application automatically when we made some changes and run the file
4.	Error Diagnostics:  It gives developer readable errors to better understanding of issue.
5.	Differential build: Gives separate builds for dev and prod
6.	Code minification
7.	Image optimization
8.	Browsers support
9.	Code compression .. etc.
### What is `.gitignore`? What should we add and not add into it?
What ever files or folders we metioned inside .gitignore file, the files will be ignored by git. If any changes we made and those changes will not reflect in browser.
We have to add node_modules, cache and dist files. Because when we download and run application it will automatically come.
All project source files and package.json, package-lock files we shouldn’t add.
### What is the difference between `package.json` and `package-lock.json`
#### package.json
package.json is a versioning file used to install multiple packages in your project.
Package.json file contains all npm dependency libraries and scripts to run application and metadata related to project.
When we run npm install all libraries mentioned inside package.json file will be installed.
#### Package-lock.json:
It is lock file automatically generates. It contains exact version which is running in the application. Suppose in package.json file we have ^1.2.1 and new release came and it will automatically installs 1.2.2. But we don’t know in package.json file. It will be stored in lock file
### Why should I not modify `package-lock.json`?
It contains exact information about the libraries installed version in the application. If we modify, we might encounter issues while installing packages in other systems
### What is `node_modules` ? Is it a good idea to push that on git?
Node Modules will have all dependency libraries which are required for our project. Not only it have the libraries which mentioned in our package.json file it also contains other dependency libraries which are required for our dependencies. Ex: If we install react inside react folder also we have package.json file. It will install those dependencies.
### What is the `dist` folder?
Dist folder is automatically generated when we build the application. It contains minified source code.
### What is `browserlists`
Browserslists is used to configure the browsers which we have to support for our project.
### Read about: ^ - caret and ~ - tilda
Syntax: The syntax of the npm version looks like the following.
Major.Minor.Patch
#### Tilde (~) notation: 
It is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version. As we know patch updates are bug fixes that’s why we can say ~ notation allows us to automatically accept bug fixes.
Example: The ~1.2.0 will update all the future patch updates. We have to write just ~1.2.0 and all the next patch update dependencies. For example, 1.2.1, 1.2.2, 1.2.5……………1.2.x.
Note: Patch updates are very small security changes in a package that is why the ~version is approximately equivalent to the version.
#### Caret (^) notation: 
It is used for automatically updating the minor updates along with patch updates. 
Example: The ^1.2.4 will update all the future Minor and patch updates, for example, ^1.2.4 will automatically change the dependency to 1.x.x if any update occurs. 
Using caret notation it is important to look at our code regularly if it is compatible with the newest version or not.

### Assignment 3 Laying foundation
#### What is JSX?
JSX is build inside React to make delelopers life easy and smooth. Without JSX it is very difficult to create react elements or functions.
It is HTML  -LIKE syntax but not html.
#### Superpowers of JSX
With the help of JSX we can have html inside javascript and javascript inside html.
It is very easy and powerful. 
We can have functional components, react elements, component composition.
#### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
{TitleComponent} is a react element. {<TitleComponent/>} and  {<TitleComponent></TitleComponent>} are refer to react functional component. We can write in anyway.
### Assignment 4 Talk is cheap show me some code
#### Is JSX mandatory for React?
Use JSX is not mandatory for React. But with the help of jsx we can reduce code complexity of developing applications. Suppose if we have to create nested div’s without JSX we have to struggle a lot to create react elements  by using React.createElement(tagName,{attributes to the tag}, “text or child elements). Almost its impossible for larger applications. In that case using plain Javascript with HTML is easy instead of React.
#### Is ES6 mandatory for React?
With the help of ES6 our development time will reduced and it gives some predefined methods and some new functionalities are very useful in es6. We can use ES5 also but it will take some development effect. Ex: map filter functions in ES6 are very useful. Without map filter we have to use for loop. Suppose if we are not properly declared or not increased ‘i’ value. It will went to infinite loop and browser will hang.
#### How can I write comments in JSX?
In between JSX elements we have write comments like this {/* ….. */}
In JSX inside any javascript code we have to write like this /*  */
Single line comments -- // 
Multi line comment -- />/* ….. */
#### What is Virtual DOM?
Virtual DOM is  representation of actual dom. The React.createElement construct element object. In Viirtual DOM it will create dom nodes in the form of objects i.e react element. It is easy to find difference in objects instead of html code. JSON object will converted into actual DOM and rendered by ReactDOM.
#### What is Reconciliation in React? /What is React Fiber?
Reconciliation or React Fiber both are same. React is very fast because of its reconciliation and diff algorithm. DOM manipulation is a very expensvie task while improving performance of library. React stood in first place in managing fast and efficient DOM manipulations. Because of it re-rendering process. When data or properties or html elements are changed. It will compare differences in old dom and new dom.
If it is a only property or data update it will update that value without removing the underlying DOM node from a dom tree.
If element is changed then only it will update dom node. 

Scenario 1: type is a string, type stayed the same across calls, props did not change either.
// before update
{ type: 'div', props: { className: 'cn' , title : 'stuff'} }

// after update
{ type: 'div', props: { className: 'cn' , title : 'stuff'} }
That is the simplest case: DOM stays the same.
Scenario 2: type is still the same string, props are different.
// before update:
{ type: 'div', props: { className: 'cn' } }

// after update:
{ type: 'div', props: { className: 'cnn' } }

As type still represents an HTML element,React looks at the attributes of both, React knows how to change its properties through standard DOM API calls, without removing the underlying DOM node from a DOM tree.
React also knows to update only the properties that changed. For example:
<div style={{color: 'red', fontWeight: 'bold'}} />

<div style={{color: 'green', fontWeight: 'bold'}} />
When converting between these two elements, React knows to only modify the color style, not the fontWeight.
///////When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance. Next, the render() method is called and the diff algorithm recurses on the previous result and the new result. After handling the DOM node, React then recurses on the children.
Scenario 3: type has changed to a different String, or from String to a component.
// before update:
{ type: 'div', props: { className: 'cn' } }

// after update:
{ type: 'span', props: { className: 'cn' } }
As React now sees that the type is different, it would not even try to update our node: old element will be removed (unmounted) together with all its children.
It is important to remember that React uses === (triple equals) to compare type values, so they have to be the same instances of the same class or the same function.
#### Why we need keys in React? When do we need keys in React?
Keys help React to identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
At the time of DOM re rendering, it is easily understood by react to identify the changed elements. If no unique key found it will rerender the entire dom sometimes. It might be a performance issue when we have adding or removing elements in the dom.
#### Can we use index as keys in React?
It is not recommended to use index as key. If no unique constrain found in object it is ok to use but it might create some performance issue when we have adding or deleting elements in DOM.
#### What is props in React? Ways to
Props is properties or objects which need to pass to an component. With props only we will send data to components as parameters.
#### What is a Config Driven UI ?
Config driven is nothing but configuring webpage dynamically when data changes. Per suppose if we have one app which need to show some differences in UI per different locations. We wont create a different websites for different locations.
Based on configuration check we will show or hide particular sections.
Ex; offers applicable to particular location. Best places or restaurants or hotels on location.
Data will drive the application.
What is the difference between Named Export, Default Export and * as export
In one page if we have only one export then we will use export default component.
If more than one  is exporting in one page then we have to use named export. 
Export API_URL = http:///www.**.com;
Export NAME = “Name”
1st Method:-
export foo; //so that this can be used in other file

import {foo} from 'abc'; //importing data/fun from module
2nd Method:-
export default foo;  //used in one file

import foo from 'blah'; //importing data/fun from module
3rd Method:-
export = foo;

import * as foo from 'blah';
The above methods roughly compile to the following syntax below:-
//all export methods
exports.foo = foo; //1st method
exports['default'] = foo; //2nd method
module.exports = foo; //3rd method
//all import methods
var foo = require('abc').foo; //1st method
var foo = require('abc')['default']; //2nd method
var foo = require('abc'); //3rd method
#### What are React Hooks?
React hooks are useState and useEffect. React core concepts to make react fast and efficient.
Why do we need a useState Hook
useState hook will automatically or we could say auto magically updates the ui whenever data get changes or modifies. It will make UI in sync with data.
Let userList = [1,2]
const [userList, setuserList] = useState(userList);
console.log(userList) gives 1,2 
userList.push(3)  3 will be added in data layer but it will not reflect in UI
setuserList (userList); console.log(userList)  gives 1,2,3 in Data and UI also.
useState will watch the variable and updates the ui when there is a change.
#### Optional chaining in Javascript
Optional chaining is nothing just to chec whether that variable is existed on particular element or not. Without if that array is undefined it wouldn’t thwoe any error. 
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};
const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined
console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
