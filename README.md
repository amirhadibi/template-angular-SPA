# template-angular-SAP

<h2>Installation steps on your Mac:</h2>

<h4>Step 1: Create a local folder on your Mac</h4>

<h4>Step 2: Open terminal and type: <b>git init</b></h4>

<h4>Step 3: Continue in terminal and type: <br>&nbsp
<b>git remote add origin https://github.com/amirhadibi/template-angular-SAP.git</b></h4>

<h4>Step 4: Continue in terminal and type: <b>checkout -f [branch-name]</b></h4>

<p>That's it! You are done. You can now continue in terminal and type: <b>ng serve</b> and finally check out the result in your browser at <b>localhost:4200</b></p>

<p>You can also modify the code in your local folder and continue developing on top of each branch.</p>

<h2>If you want to do it by yourself:</h3>

<h4>Step 1: Create a local folder on your Mac</h4>

<h4>Step 2: Install the Angular CLI</h4><br>
<p>To install Angular CLI, please follow instructions in https://angular.io/guide/quickstart</p>

<h4>Step 3: Install ag-grid</h4><br>
<p>To install ag-grid in your project, please follow these steps:<br>&nbsp&nbpp&nbsp
a. Type this in terminal: <b> npm install --save ag-grid ag-grid-angular ag-grid-community </b><br>&nbsp&nbpp&nbsp 
b. Add the following line in app.module.ts: <b> import {AgGridModule} from 'ag-grid-angular'; </b><br>&nbsp&nbpp&nbsp
c. Add the following line in declaration section of app.module.ts: <b> AgGridModule.withComponents([AppComponent]),</b><br>&nbsp&nbpp&nbsp
d. Define the grid in <b>page1.html</b> & <b>page1.ts</b> files</p>

