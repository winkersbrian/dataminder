# Directory Structure

## /apps

End user applications

### /apps/cameras


## /packages

Packaged software we create, primarily NPM

### /packages/multicorder

Collect data through the browser.

### /packages/nuggets

Manage data locally in IndexedDB and OPFS.


## /scripts

Scripts used to simplify managing the projects.


## /schema

Common object definitions shared by the apps, packages and services.


## /services

API and other services created for the projects.

### /services/mqtt

Used by Mosquitto MQTT dockerized service. This is the core, local messaging server. This is how the various components communicate with each other.

### /services/alarmserver

Used by the dockerized security camera AlarmServer, this listens for alarms from common security cameras and forwards them to the MQTT server.

### /services/viseron

Used by the dockerized Viseron security camera NVR. Viseron is written in Python.

### /services/api

Root directory for any API created for the project

### /services/api/mgmt

A custom management API, written in JavaScript using Fastify:

* Manage email and text numbers used for outbound alert settings, as well as their alert windows.
* View MQTT message activity
* View, ack and comment on AlarmServer activity
* View camera history
* Archive important video segments with notes


## /tests

E2E tests of apps, packages and services working together.
Individual packages, apps and services will have their unit own, usually in a top level `tests` directory.