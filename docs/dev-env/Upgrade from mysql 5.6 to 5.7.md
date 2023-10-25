## Upgrade from mysql 5.6 to 5.7

To upgrade from mysql 5.6 to 5.7 you need first to recreate the containers using:

```docker-compose build```

Then

```docker-compose up -d --force-recreate```

After all container are running, you need to get the container name or id. There is different ways to get that.

We can use docker command or docker-compose command.

Run ```Docker ps```

Take note of the db container name or the container id. Then run the following command:

```docker exec -it <container name or id> bash```

Then run the following command:

```mysql_upgrade -u root -p```


### in case of error

in worst case just remove the volume using this command:  

to find the volume name (it should be dev-env_mysql, but better double check )

```
docker volume ls
```

Then remove it : 
```
docker volume rm {putVolumeNameHere}
```


PS: I also added a mysql.cnf, this has a setting to cover a compatibility issue with existing data from mysql 5.6. You don't need to do anything. This has been added to the docker-compose.yml file.

 
