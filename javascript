window.onload = function () {
    fetch('assets/HAVRE.csv')
        .then(response => response.text())
        .then(csv => afficherPhotos(csv))
        .catch(error => console.error('Erreur lors du chargement du fichier CSV:', error));
};

function afficherPhotos(csv) {
    const rows = csv.split('\n').slice(1); // Ignorer la ligne d'en-tête
    const grid = document.getElementById('photoGrid');
    rows.forEach(row => {
        const [photoUrl, context] = row.split(',');
        if (photoUrl && context) {
            const img = document.createElement('img');
            img.src = photoUrl.trim();
            img.alt = 'Photo';
            img.onclick = () => afficherContexte(context.trim());
            grid.appendChild(img);
        }
    });
}

function afficherContexte(context) {
    const contextText = document.getElementById("context");
    contextText.innerHTML = `<p>${context}</p>`;
}
