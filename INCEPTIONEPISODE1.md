# This is Inception Assignment 01
***
# Q.1 What is Emmet ?
Ans. Emmet is a tool which makes development easy. It provides intelligence. It helps in suggesting the word which can be used.
Ex: suppose if we type html:5  and then press enter it will generate basic html 5 skeleton.
# Q.2 Difference between a library and framework.
Ans: Framework :
    1. Frameworks have any no of libraries, api, compiler to provide the full fledge env for development of application. And we can’t combine with other frameworks.
    2. We cannot use framework between the development. Example:: Angular,NextJs.
Library :
    1. Library is set of function and class which provide the reusability of code.
    2.	with the help of library, we can design application as we want because it is totally in your hand to decide the flow of the application. And we can use library in small portion of application. Like in header or footer or in any particular div we can import react Example :: React, JQuery.
# Q.3 What is CDN why we use it?
 Ans. CDN full form is content delivery network. CDN provide the fast access to resources because every company or application provide the resources of chunk to all the server across the globe or the multiple places so that the client get the fast result. We use CDN for the fast delivery of our Resources. But we won’t able to work with CDN’s in offline as it requires network connectivity.
# Q.4 What is the Difference between React and ReactDOM 
Ans.
React :
React have different set of function by which user can create objects that can be Java script object only. It contains different react api’s which written in javascript. 
ReactDOM: With the help of React DOM react object converts to the browser understandable code that it is HTML not the JS object (Render method in React Dom help it to convert the HTML). ReactDOM mainly contains DOM manipulation api’s.
# Q.5 what is difference between ReactJs dev env and react JS prod link. 
Ans.React development is the development version of react and we can clearly see the functions and classes inside it. And we can put debuggers in that dev file and user can be able to read dev code. Size of file is more.
But Production files have been minified and code got freezed and we won’t be able to read or put debugs over there. And size also less.
# Q.6 Why React called React
Ans. React is very powerful library to build interactive User Interface applications. React is very fast in nature and responsvie. It 'reacts' with data changes. When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library.
# Q.7 What we write Crossorigin in script tag?
Ans. We use crossorigin when we want to download images or scripts or iframe or fonts from other server sites.
If it is a script file it will help to expose errors in file.
Crossorigin allows 2 values <script crossorigin="anonymous|use-credentials">
    anonymous - A cross-origin request is performed. No credentials are sent or required
    use-credentials -- A cross-origin request is performed. Ccredentials are sent (ex: cookie, certificate, some form of authentication).