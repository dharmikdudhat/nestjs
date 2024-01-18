//*there are two layers of server
//?1.controller :- controls all the request of the client using
//!request handlers controller have multiple request handlers
//?2.service layer:- provides a set of functions to perform operations on data.directly interect with databases

//*scopes 
//?1.global
//?2.module
//?3.controller
//?4.request handler / route

//*types of modules
//?1.module with controllers    
//?1.module without controllers

//*base module of nestjs applications is app module and using this only app module gets bootstraping using main.ts file