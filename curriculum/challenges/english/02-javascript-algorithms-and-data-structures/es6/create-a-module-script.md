---
id: 5cddbfd622f1a59093ec611d
title: Créer un script de module
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

JavaScript a commencé avec un petit rôle à jouer sur un site Web essentiellement HTML. Aujourd'hui, il est énorme, et certains sites Web sont construits presque entièrement avec JavaScript. Afin de rendre JavaScript plus modulaire, propre et facile à maintenir, ES6 a introduit un moyen de partager facilement le code entre les fichiers JavaScript. Cela implique d'exporter des parties d'un fichier pour les utiliser dans un ou plusieurs autres fichiers, et d'importer les parties dont vous avez besoin, là où vous en avez besoin. Afin de profiter de cette fonctionnalité, vous devez créer un script dans votre document HTML avec un `type` de `module`. Voici un exemple :

```html
<script type="module" src="filename.js"></script>
```

Un script qui utilise ce type `module` peut maintenant utiliser les fonctionnalités `import` et `export` que vous découvrirez dans les prochains défis.
# --instructions--

Ajoutez au document HTML un script de type `module` et donnez-lui le fichier source de `index.js`.

# --hints--

Vous devez créer une balise `script`.

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

Votre balise `script` doit avoir l'attribut `type` avec une valeur de `module`.

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

Votre balise `script` devrait avoir un `src` égal à `index.js`.

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Ne changez que le code en dessous de cette ligne -->

    <!-- Ne modifier que le code au-dessus de cette ligne -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
