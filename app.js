document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from refreshing the page

    let fileInput = document.getElementById('file').files[0];
    if (!fileInput) {
        document.getElementById('result').innerText = 'Please select a file first.';
        return;
    }

    // For now, we'll just show the file name as an example
    document.getElementById('result').innerText = 'File uploaded: ' + fileInput.name;
});

