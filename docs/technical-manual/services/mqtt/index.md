# Mosquitto MQTT

Originally installed using [community docs](https://github.com/sukesh-ak/setup-mosquitto-with-docker).

The files go in `/services/mqtt` vs. in a root `/mqtt` directory.

```yaml
services:
    ...

  # mqtt5 eclipse-mosquitto
  mqtt5:
    image: eclipse-mosquitto
    container_name: mqtt5
    ports:
      - "1883:1883" #default mqtt port
      - "9001:9001" #default mqtt port for websockets
    volumes:
      - ./services/mqtt/config:/mosquitto/config:rw
      - ./services/mqtt/data:/mosquitto/data:rw
      - ./services/mqtt/log:/mosquitto/log:rw
    restart: unless-stopped
```

```sh
chmod 0700 ./services/mqtt/config/pwfile
```

```sh
sudo docker exec -it 561f981b5fda sh
```

Create users:

```sh
mosquitto_passwd -c /mosquitto/config/pwfile brian
mosquitto_passwd -c /mosquitto/config/pwfile alarmserver
```

Exit container

```sh
exit
```

Restart container

```sh
sudo docker restart 561f981b5fda
```

## Testimg MQTT

### Install a client on you workstation

```sh
sudo apt install mosquitto-clients
```

### Start and subscribe to a topic

```sh
mosquitto_sub -v -t 'hello/topic' -u alarmserver -P <passwd>
```

### Publish to the topic

```sh
 mosquitto_pub -t 'hello/topic' -m 'hello MQTT' -u alarmserver -P <passwd>