window.onload=function() {
	var vizDiv = document.getElementById('viz');
	var vizURL = 'https://public.tableau.com/views/USCOVID-19Cases_15935791673600/ConfirmedCasesbyState';
	var options = {
		width: '1200px',
		height: '940px',
		hideToolbar: true,
		hideTabs: true
	}
	
	viz = new tableauSoftware.Viz(vizDiv, vizURL, options);
};

// Switch the viz to the sheet specified
function switchView(sheetName) {
	var workbook = viz.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}

function show(filterName, values) {
	var sheet = viz.getWorkbook().getActiveSheet();
	sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}      