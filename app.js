document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from refreshing the page

    let fileInput = document.getElementById('file').files[0];
    if (!fileInput) {
        document.getElementById('result').innerText = 'Please select a file first.';
        return;
    }

    let reader = new FileReader();
    reader.onload = function(event) {
        let data = new Uint8Array(event.target.result);
        let workbook = XLSX.read(data, { type: 'array' });
        let sheetName = workbook.SheetNames[0];  // Get the first sheet
        let sheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(sheet);

        // Display the JSON data (you can customize this)
        document.getElementById('result').innerText = JSON.stringify(jsonData, null, 2);
    };
    reader.readAsArrayBuffer(fileInput);
});
