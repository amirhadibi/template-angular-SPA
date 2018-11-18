# template-angular-SAP

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
