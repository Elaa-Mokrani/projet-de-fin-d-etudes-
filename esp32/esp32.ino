#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h> // Bibliothèque pour les capteurs de température et d'humidité

// Remplacez les valeurs suivantes par les informations de votre réseau WiFi
const char* ssid = "****";
const char* password = "****";

// Remplacez les valeurs suivantes par les informations de votre broker MQTT
const char* mqtt_server = "IP_du_broker_MQTT";
const int mqtt_port = 1883;
const char* mqtt_user = "Nom_utilisateur_MQTT";
const char* mqtt_password = "Mot_de_passe_MQTT";

// Pin de données du capteur de température
const int DHT_PIN = 4;

// Type du capteur de température (DHT11, DHT21, DHT22)
#define DHT_TYPE DHT11

WiFiClient espClient;
PubSubClient client(espClient);

DHT dht(DHT_PIN, DHT_TYPE);

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connexion à ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connecté");
  Serial.println("Adresse IP: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  // Gérer les messages reçus du broker MQTT si nécessaire
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Tentative de connexion MQTT...");
    
    if (client.connect("ESP32Client", mqtt_user, mqtt_password)) {
      Serial.println("Connecté");
    } else {
      Serial.print("Échec, code erreur= ");
      Serial.print(client.state());
      Serial.println("Nouvel essai dans 5 secondes");
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
  dht.begin();
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Lecture de la température et de l'humidité depuis le capteur
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Erreur de lecture du capteur de température et d'humidité !");
    return;
  }

  Serial.print("Température: ");
  Serial.print(temperature);
  Serial.print(" °C | Humidité: ");
  Serial.print(humidity);
  Serial.println(" %");

  // Envoi des données au broker MQTT
  String temperatureString = String(temperature);
  String humidityString = String(humidity);
  
  client.publish("capteur/temperature", temperatureString.c_str());
  client.publish("capteur/humidite", humidityString.c_str());

  delay(5000); // Attente de 5 secondes entre chaque envoi de données
}
