# template-angular-SAP

<h2>Installation steps on your Mac:</h3>

<p>Step 1: Create a local folder on your Mac</p>

<p>Step 2: Open terminal and type: <b>git init</b></p>

<p>Step 3: Continue in terminal and type: <b>git remote add origin https://github.com/amirhadibi/template-angular-SAP.git</b></p>

<p>Step 4: Continue in terminal and type: <b>checkout -f [branch-name]</b></p>

<p>That's it! You are done. You can now continue in terminal and type: <b>ng serve</b> 
  
<p>Check out the result in your browser at <b>localhost:4200</b></p>

<p>You can also modify the code in your local folder and continue developing on top of each branch.</p>

<h2>If you want to do it by yourself:</h3>

<h3> Step 1: Create a local folder on your Mac </h3>

<h3> Step 1: Install the Angular CLI </h3>

<p> To install Angular CLI, please follow instructions in https://angular.io/guide/quickstart </p>

<h3> Step 2: Install ag-grid </h4>

<p> To install ag-grid in your project, please followe these steps:</p>

<p>	
	1. Type this in terminal: 
				<b> npm install --save ag-grid ag-grid-angular ag-grid-community </b> 
</p>
<p>
 	2. Add the following line in app.module.ts: 
				<b> import {AgGridModule} from 'ag-grid-angular'; </b>
</p>
<p>
	3. Add the following line in declaration section of app.module.ts: 
				<b> AgGridModule.withComponents([AppComponent]), </b>
</p>
<p>
	4. Define the grid in <b>page1.html</b> & <b>page1.ts</b> files
</p>

