# template-angular-SPA

<h2>Installation steps on your Mac:</h2>

<ins>Step 1:</ins> Create a local folder on your Mac

<ins>Step 2:</ins> Open terminal and type: <ol><b>git init</b></ol>

<ins>Step 3:</ins> Continue in terminal and type: 
<br><ol><b>git remote add origin https://github.com/amirhadibi/template-angular-SAP.git</b></ol>

<ins>Step 4:</ins> Continue in terminal and type: <br><ol><b>checkout -f [branch-name]</b></ol>

<p>That's it! You are done. You can now continue in terminal and type: <b>ng serve</b> and finally check out the result in your browser at <b>localhost:4200</b></p>

<p>You can also modify the code in your local folder and continue developing on top of each branch.</p>

<h2>If you want to do it by yourself:</h3>

<ins>Step 1:</ins> Create a local folder on your Mac

<ins>Step 2:</ins> Install the Angular CLI by following instructions in https://angular.io/guide/quickstart

<ins>Step 3:</ins> Followthese steps to install ag-grid:<br><ol>
a. Type this in terminal: <b> npm install --save ag-grid ag-grid-angular ag-grid-community </b><br>
b. Import it in app.module.ts: <b> import {AgGridModule} from 'ag-grid-angular'; </b><br>
c. Declare it in app.module.ts: <b> AgGridModule.withComponents([AppComponent]),</b><br>
d. Define the grid in <b>page1.html</b> & <b>page1.ts</b> files</ol>

