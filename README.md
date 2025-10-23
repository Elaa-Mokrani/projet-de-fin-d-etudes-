Optimisation de la Gestion des Stations de Télécom par l’IoT et le Cloud
🧠 Description du projet

Ce projet vise à optimiser la gestion et la surveillance des stations de télécommunication en utilisant des technologies IoT (Internet of Things) et Cloud Computing.
L’objectif est de centraliser les données collectées par des capteurs connectés et de permettre un suivi en temps réel des paramètres critiques (température, humidité, alimentation, sécurité, etc.) afin d’améliorer la maintenance prédictive et la performance des infrastructures.

⚙️ Technologies utilisées

Langages : HTML, CSS, JavaScript, PHP

IoT : ESP32-CAM, capteurs IoT, modules FTDI

Plateformes logicielles : Arduino IDE, Node-RED, XAMPP, Mosquitto

Base de données : MySQL

Cloud : intégration pour la centralisation et visualisation à distance des données

💡 Fonctionnalités principales

Collecte de données depuis les capteurs IoT installés sur les stations GSM.

Transmission des données vers un serveur Cloud via MQTT.

Visualisation en temps réel à travers un dashboard web.

Détection et notification d’anomalies (par exemple : température élevée, coupure d’alimentation).

Possibilité d’analyse historique des mesures enregistrées.

🖥️ Architecture du système

Niveau IoT : Les capteurs connectés aux microcontrôleurs ESP32 collectent les données.

Niveau Communication : Les données sont transmises via le protocole MQTT.

Niveau Cloud / Serveur : Les informations sont stockées et affichées dans un dashboard web.

📊 Interface utilisateur

Le dashboard permet :

D’afficher les mesures en temps réel (température, tension, etc.)

De visualiser les alertes ou anomalies détectées

D’assurer un suivi efficace de l’état de chaque station

🧰 Outils et environnement de développement

Arduino IDE : programmation des ESP32

Node-RED : flux de données IoT et automatisation

XAMPP : serveur local et gestion de base de données

Mosquitto MQTT Broker : communication entre les capteurs et le serveur

HTML/CSS/JS/PHP : création de l’interface web

🧑‍💻 Auteur

Elaa Mokrani
Projet de Fin d’Études – Licence en Systèmes Informatiques Embarqués et Internet des Objets
Année universitaire : 2023–2024

🏁 Résultats et perspectives

Le système mis en place a permis :

Une réduction du temps de maintenance grâce à la détection précoce des anomalies.

Une meilleure visualisation des données et des performances des stations.

Une scalabilité du système pour d’autres sites et types d’équipements.

Des améliorations futures pourraient inclure :

L’intégration de l’intelligence artificielle pour la prédiction d’anomalies.

Le développement d’une application mobile pour la supervision à distance.

Souhaites-tu que je t’ajoute aussi une section “Installation et utilisation” (pour expliquer comment exécuter le projet sur une autre machine) ? Ce serait utile si tu veux que ton GitHub ait l’air plus professionnel.
