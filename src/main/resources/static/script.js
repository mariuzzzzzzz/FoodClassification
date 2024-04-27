function checkFiles(files) {
    console.log(files);

    if (files.length != 1) {
        alert("Bitte genau eine Datei hochladen.");
        return;
    }

    const fileSize = files[0].size / 1024 / 1024; // in MiB
    if (fileSize > 10) {
        alert("Datei zu gross (max. 10Mb)");
        return;
    }

    answerPart.style.visibility = "visible";
    const file = files[0];

    // Preview
    if (file) {
        preview.src = URL.createObjectURL(file);
    }

    // Upload
    const formData = new FormData();
    formData.append("image", file);

    fetch('/analyze', {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.json(); // Assuming the server responds with JSON
    }).then(data => {
        console.log(data);
        displayResults(data); // Function to format and display results
    }).catch(error => {
        console.error('Error:', error);
    });
}

function displayResults(results) {
    const answerDiv = document.getElementById('answer');
    answerDiv.innerHTML = ''; // Clear previous results

    const table = document.createElement('table');
    table.className = 'table table-hover';

    const thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>Food Item</th><th>Probability</th></tr>';
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    results.forEach(result => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${result.className}</td><td>${(result.probability * 100).toFixed(2)}%</td>`;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    answerDiv.appendChild(table);
}
