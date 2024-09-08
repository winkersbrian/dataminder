# DataMinder Technical Manual

## Directory Structure

Documentation about the [directories and key files](/README_DIR_STRUCTURE.md).

## Docker 

**PRODUCTION**

```sh
docker compose up
```

**LOCAL DEVELOPMENT**

```sh
docker compose -f ./docker/local-dev-compose.yaml 
```

Using this on the productin server will use the PRODUCTION services!
This should only be run on your local development workstation, it will create the services required.

### Docker compose secrets

The project uses [Docker compose secrets](https://docs.docker.com/compose/use-secrets/).

Example secrets are provided, please create your own, unique and secure secrets!

## MQTT - Messaging

### Running Mosquitto MQTT

Run via root Docker compose.

### Configuring Mosquitto MQTT

Configured in: `services/mqtt`

[Additional Info](./services/mqtt/)

## AlarmServer - Security camera shim service

### Running AlarmServer

Run via root Docker compose.

### Configuring AlarmServer

Configured in: `services/alarmserver`

## Viseron - Security camera NVR

### Running Viseron

Run via root Docker compose.

### Viseron Configuration

Configured in: `services/viseron/config.yaml`

[Upstream Documentation](https://viseron.netlify.app/docs/documentation)

## Management API

### Running

This can be run in production or local development mode.

#### Production

Run via root Docker compose, `docker compose up`.

#### Development

Run via `docker compose ./docker/local-dev.yaml`

## Nginx Proxy

### Running

Run via root Docker compose.

### Configuration

### SSL Certs


