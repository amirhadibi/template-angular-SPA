# angular-home-page
<h3> A template for creating a simple angular Single Page Application.</h3>

<h4> To add ag-grid, I followed these steps: </h4>

<p>	
	1. Typed this in terminal: 
				<b> npm install --save ag-grid ag-grid-angular ag-grid-community </b> 
</p>
<p>
 	2. Added the following import line to app.module.ts: 
				<b> import {AgGridModule} from 'ag-grid-angular'; </b>
</p>
<p>
	3. Added the following declaration to app.module.ts: 
				<b> AgGridModule.withComponents([AppComponent]), </b>
</p>
<p>
	4. Defined the grid in <b>page1.html & page1.ts files </b>
</p>
