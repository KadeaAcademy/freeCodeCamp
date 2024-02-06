---
id: 587d78ae367417b2b2512afe
title: Utilisez la propriété abrégée flex
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
dashedName: use-the-flex-shorthand-property
---

# --description--

Il existe un raccourci permettant de définir plusieurs propriétés flexibles à la fois. Les propriétés `flex-grow`, `flex-shrink`, et `flex-basis` peuvent toutes être définies ensemble en utilisant la propriété `flex`.

Par exemple, `flex : 1 0 10px;` définira l'élément comme `flex-grow : 1;`, `flex-shrink : 0;`, et `flex-basis : 10px;`.

Les paramètres de propriété par défaut sont `flex : 0 1 auto ;`.

# --instructions--

Ajoutez la propriété CSS `flex` à `#box-1` et `#box-2`. Donnez à `#box-1` les valeurs pour que son `flex-grow` soit `2`, son `flex-shrink` soit `2`, et son `flex-basis` soit `150px`. Donnez à `#box-2` les valeurs pour que son `flex-grow` soit `1`, son `flex-shrink` soit `1`, et son `flex-basis` soit `150px`.

Ces valeurs feront en sorte que la `#box-1` s'agrandisse pour remplir l'espace supplémentaire deux fois plus vite que la `#box-2` lorsque le conteneur est supérieur à 300px et qu'elle rétrécisse deux fois plus vite que la `#box-2` lorsque le conteneur est inférieur à 300px. 300px est la taille combinée des valeurs `flex-basis` des deux boîtes.

# --hints--

L'élément `#box-1` doit avoir la propriété `flex` définie sur une valeur de `2 2 150px`.

```js
assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);
```

L'élément `#box-2` doit avoir la propriété `flex` définie sur une valeur de `1 1 150px`.

```js
assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);
```

Votre code devrait utiliser la propriété `flex` pour `#box-1` et `#box-2`.

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
