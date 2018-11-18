# angular-home-page
<h3> A template for creating a simple angular Single Page Application.</h3>

<h4> Install the Angular CLI </h4>
<P> To install Angular CLI, please follow instructions in https://angular.io/guide/quickstart </p>

<h4> Install ag-grid </h4>

<p> To install ag-grid in your project, please followe these steps:</p>

<p>	
	1. Type this in terminal: 
				<b> npm install --save ag-grid ag-grid-angular ag-grid-community </b> 
</p>
<p>
 	2. Add the following import line to app.module.ts: 
				<b> import {AgGridModule} from 'ag-grid-angular'; </b>
</p>
<p>
	3. Add the following declaration to app.module.ts: 
				<b> AgGridModule.withComponents([AppComponent]), </b>
</p>
<p>
	4. Define the grid in <b>page1.html & page1.ts files </b>
</p>
