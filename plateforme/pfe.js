document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
    var capteurList = document.querySelector('.capteur-boxes'); // Selecting the capteur boxes container

    modeSwitch.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    });

    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');

    listView.addEventListener('click', function () {
        gridView.classList.remove('active');
        listView.classList.add('active');
        capteurList.classList.remove('jsGridView');
        capteurList.classList.add('jsListView');

        // Adjusting the size of capteur boxes for list view
        capteurList.style.width = '1200 px'; // Set width to 100% or adjust as needed
        capteurList.style.height = '70 px'; // Set height to desired value
    });

    gridView.addEventListener('click', function () {
        gridView.classList.add('active');
        listView.classList.remove('active');
        capteurList.classList.remove('jsListView');
        capteurList.classList.add('jsGridView');

        // Adjusting the size of capteur boxes for grid view
        capteurList.style.width = ''; // Reset width to default or adjust as needed
        capteurList.style.height = ''; // Reset height to default or adjust as needed
    });

    document.querySelector('.messages-btn').addEventListener('click', function () {
        document.querySelector('.messages-section').classList.add('show');
    });

    document.querySelector('.messages-close').addEventListener('click', function() {
        document.querySelector('.messages-section').classList.remove('show');
    });
});

// Détecte les mouvements pour capt1
function detecterMouvementCapt1() {
    // Code pour détecter le mouvement pour capt1
    console.log("Mouvement détecté par capt1");
    
    // Envoie les données au script PHP
    envoyerDonnees("capt1");
}

// Fonction pour envoyer les données au script PHP
function envoyerDonnees(capteur) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "incrementer_interventions.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Le nombre d'interventions a été incrémenté avec succès.");
            } else {
                console.error("Erreur lors de l'incrémentation du nombre d'interventions :", xhr.statusText);
            }
        }
    };
    xhr.send("capteur=" + capteur);
}

// Appel de la fonction pour détecter les mouvements pour capt1
detecterMouvementCapt1();



// Sélection des éléments du DOM
const viewButtons = document.querySelectorAll('.view-btn');
const capteurSection = document.querySelector('.capteur-section');
const capteurBoxGrid = document.querySelector('.jsGridView');
const capteurBoxList = document.querySelector('.jsListView');

// Fonction pour basculer entre la vue liste et la vue grille
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('list-view')) {
            capteurBoxGrid.style.display = 'none';
            capteurBoxList.style.display = 'block';
        } else {
            capteurBoxList.style.display = 'none';
            capteurBoxGrid.style.display = 'block';
        }

        // Mettre à jour les classes actives sur les boutons de vue
        viewButtons.forEach(btn => btn.classList.toggle('active'));
    });
});

// Fonction pour basculer entre la vue liste et la vue grille
capteurSection.addEventListener('click', event => {
    if (event.target.classList.contains('app-sidebar-link')) {
        // Supprimer la classe active de tous les liens de la barre latérale
        document.querySelectorAll('.app-sidebar-link').forEach(link => {
            link.classList.remove('active');
        });

        // Ajouter la classe active sur le lien cliqué
        event.target.classList.add('active');
    }
});
