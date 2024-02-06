---
id: 587d781e367417b2b2512acb
title: Verrouiller un élément à son parent avec le positionnement absolu
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

L'option suivante pour la propriété CSS `position` est `absolue`, qui verrouille l'élément en place par rapport à son conteneur parent. Contrairement à la position `relative`, cette option retire l'élément du flux normal du document, de sorte que les éléments environnants l'ignorent. Les propriétés de décalage CSS (haut ou bas et gauche ou droite) sont utilisées pour ajuster la position.

Une nuance avec le positionnement absolu est qu'il sera verrouillé par rapport à son ancêtre *positionné* le plus proche. Si vous oubliez d'ajouter une règle de positionnement à l'élément parent (ce qui est généralement fait en utilisant `position : relative;`), le navigateur continuera à chercher en haut de la chaîne et finira par utiliser par défaut la balise `body`.

# --instructions--

Verrouillez l'élément `#searchbar` en haut à droite de son parent `section` en déclarant sa `position` comme `absolue`. Donnez-lui des décalages de 50 pixels chacun pour les éléments `top` et `right`.

# --hints--

L'élément `#searchbar` doit avoir une `position` définie sur `absolute`.

```js
assert($('#searchbar').css('position') == 'absolute');
```

Votre code doit utiliser le décalage CSS `top` de 50 pixels sur l'élément `#searchbar`.

```js
assert($('#searchbar').css('top') == '50px');
```

Votre code doit utiliser le décalage CSS `droit` de 50 pixels sur l'élément `#searchbar`.

```js
assert($('#searchbar').css('right') == '50px');
```

# --seed--

## --seed-contents--

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Bienvenu.e!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Recherche :</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

# --solutions--

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Bienvenu.e!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Recherche :</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```
