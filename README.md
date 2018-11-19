# template-angular-SAP

<h2>Installation steps on your Mac:</h2>

Step 1: Create a local folder on your Mac

Step 2: Open terminal and type: <b>git init</b>

Step 3: Continue in terminal and type: 
<br><i>git remote add origin https://github.com/amirhadibi/template-angular-SAP.git</i>

Step 4: Continue in terminal and type: <b>checkout -f [branch-name]</b>

<p>That's it! You are done. You can now continue in terminal and type: <b>ng serve</b> and finally check out the result in your browser at <b>localhost:4200</b></p>

<p>You can also modify the code in your local folder and continue developing on top of each branch.</p>

<h2>If you want to do it by yourself:</h3>

Step 1: Create a local folder on your Mac

Step 2: Install the Angular CLI<br>
To install Angular CLI, please follow instructions in https://angular.io/guide/quickstart

Step 3: Install ag-grid<br>
To install ag-grid in your project, please follow these steps:<br><ol>
a. Type this in terminal: <b> npm install --save ag-grid ag-grid-angular ag-grid-community </b><br>&nbsp
b. Add the following line in app.module.ts: <b> import {AgGridModule} from 'ag-grid-angular'; </b><br>&nbsp
c. Add the following line in declaration section of app.module.ts: <b> AgGridModule.withComponents([AppComponent]),</b><br>&nbsp
d. Define the grid in <b>page1.html</b> & <b>page1.ts</b> files</ol>

