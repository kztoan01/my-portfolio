// #include <SPI.h>
// #include <LoRa.h>
// #include <ESP8266WiFi.h>
// #include <Wire.h>
// #include <BlynkSimpleEsp8266.h>
// //define devices from template on Blynk
// //Define LoRa
// #define LORA_SS_PIN 15
// #define LORA_RESET_PIN 16
// #define LORA_DIO0_PIN 2
// //Wifi and Password
// const char* ssid = "wifiname";
// const char* password = "wifipassword";
// char auth[] = "authtokenonblynk";
// byte MasterNode = 0xFF;
// byte Node1 = 0xBB;
// String SenderNode = "";
// String outgoing;    // outgoing message
// byte msgCount = 0;  // count of outgoing messages
// String incoming = "";
// String getValue(String data, char separator, int index) {
//         int found = 0;
//         int strIndex[] = { 0, -1 };
//         int maxIndex = data.length() - 1;
//         for (int i = 0; i <= maxIndex && found <= index; i++) {
//           if (data.charAt(i) == separator || i == maxIndex) {
//             found++;
//             strIndex[0] = strIndex[1] + 1;
//             strIndex[1] = (i == maxIndex) ? i + 1 : i;
//           }
//         }
//         return found > index ? data.substring(strIndex[0], strIndex[1]) : "";
// }

