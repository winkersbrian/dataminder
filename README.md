# DataMinder - Mind your data

A toolset to help collect and organize your important information, without dependence any particular external service.

## Directory Structure

Additional info in ./README_DIR_STRUCTURE.md

## Prerquisites

An up to date Docker environment supporting `docker compose` and `docker run`.

## Running the Local Stack

To run the full stack: 

```sh
docker compose up
```

* Mosquitto MQTT
* AlarmServer
* Viseron - http://localhost:2222
* Management App - http://localhost:2121
** Cameras - http://localhost:2121/cameras

Visit http://localhost:2121 in a browser to access the stack.
