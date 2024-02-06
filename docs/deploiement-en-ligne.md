# Rapport sur le déploiement en ligne (Environnement de production)

---

## 1. Configuration initiale de serveur avec Ubuntu

Ressources :

- Configuration initiale de serveur avec Ubuntu 20.04 : [Tutoriel](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04-fr)

---

## 2. Installation et configuration de Nginx

Ressources :

- Comment installer Nginx sur Ubuntu : [Tutoriel](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04-fr)
- Configuration VPS : [Tutoriel](https://github.com/safak/youtube/tree/mern-deployment)

---

## 3. Installation de Node Js

Ressources :

- Comment installer Node.js sur Ubuntu : [Tutoriel](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-fr)

---

## 4. Clonage du projet

```sh
- Le clonage du projet ce fait dans le répertoire : ./var/www/
- Nous avons cloner notre projet dans le répertoire :  ./var/www/html/freecodecamp/
- Passer à la branche de développement ou de production, selon les cas
```

---

## 5. Configuration du projet

###### - Créer une base de données **Mongo DB**.

###### - Créer un fichier **.env** et copier tout le contenue du fichier **sample.env** dans le fichier **.env** .

###### - Modifier la variable **MONGOHQ_URL** dans le fichier **.env** en remplaçant la valeur par le lien de la base de données créée précédemment.

###### - Modifier les variables liées a Auth0 dans le fichier **.env** :

- **Variable :** `AUTH0_CLIENT_ID`
  **Valeur :** `VALEUR_AUTH0_CLIENT_ID`
- **Variable :** `AUTH0_CLIENT_SECRET`
  **Valeur :** `VALEUR_AUTH0_CLIENT_SECRET`
- **Variable :** `AUTH0_DOMAIN`
  **Valeur :** `VALEUR_AUTH0_DOMAIN`

###### - Modifier les variable liées au client et l'api dans le fichier .env :

- **Variable :** `HOME_LOCATION`
  > Note : La Variable `HOME_LOCATION` dois avoir pour valeur l'hot du client définit dans le fichier de configuration de Nginx. **Exemple :** `HOME_LOCATION=http://frontend-location.com/`
- **Variable :** `API_LOCATION`
  > Note : La Variable `API_LOCATION` dois avoir pour valeur l'hot de l'api définit dans le fichier de configuration de Nginx. **Exemple :** `API_LOCATION=http://backend-location.com/`

###### - Modifier la variable **LOCAL_MOCK_AUTH** dans le fichier **.env** en remplaçant la valeur `true` par `false`.

###### - Modifier la variable **FREECODECAMP_NODE_ENV** dans le fichier **.env** en fonction de l'environnement dans lequel on se trouve. Pour l'environnement de développement, la valeur est `development` et pour l'environnement de production, la valeur est `production`.

---

## 6. Lancement de l'application

**Lancer les commandes :**

```sh
1. npm install
2. npm run build
3. npm run start
```

---

## 7. Lancement de l'application en local

**Note :** Suivre les instructions contenues dans le fichier `freecodecamp/docs/how-to-setup-freecodecamp-locally.md`
