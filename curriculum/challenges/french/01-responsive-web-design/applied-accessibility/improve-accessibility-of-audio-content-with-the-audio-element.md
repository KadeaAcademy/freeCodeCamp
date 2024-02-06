---
id: 587d7789367417b2b2512aa4
title: Améliorer l'accessibilité du contenu audio avec l'élément audio
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

L'élément `audio` de HTML5 donne un sens sémantique lorsqu'il enveloppe le contenu du son ou du flux audio dans votre balisage. Le contenu audio a également besoin d'une alternative textuelle pour être accessible aux personnes sourdes ou malentendantes. Cela peut être fait avec un texte proche sur la page ou un lien vers une transcription.

La balise `audio` prend en charge l'attribut `controls`. Il indique les commandes de lecture, de pause et autres par défaut du navigateur, et prend en charge la fonctionnalité du clavier. Il s'agit d'un attribut booléen, ce qui signifie qu'il n'a pas besoin de valeur, sa présence dans la balise active le paramètre.

Voici un exemple:

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**Note:** Le contenu multimédia comporte généralement des éléments visuels et auditifs. Il nécessite des sous-titres synchronisés et une transcription pour que les utilisateurs souffrant de déficiences visuelles et/ou auditives puissent y accéder. En général, un développeur web n'est pas responsable de la création des sous-titres ou de la transcription, mais il doit savoir qu'il faut les inclure.

# --instructions--

Il est temps de faire une pause dans la vie de Camper Cat et de rencontrer un autre campeur, Zersiax (@zersiax), champion de l'accessibilité et utilisateur d'un lecteur d'écran. Pour écouter un extrait de son lecteur d'écran en action, ajoutez un élément `audio` après le `p`. Incluez l'attribut `controls`. Placez ensuite une balise `source` à l'intérieur de la balise `audio` avec l'attribut `src` réglé sur `https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/screen-reader.mp3` et l'attribut `type` défini à `"audio/mpeg"`.

**Note:** Le clip audio peut sembler rapide et difficile à comprendre, mais il s'agit d'une vitesse normale pour les utilisateurs de lecteurs d'écran.

# --hints--

Votre code devrait avoir une balise `audio`.

```js
assert($('audio').length === 1);
```

Votre élément `audio` devrait avoir une balise fermante.

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

La balise `audio` devrait avoir l'attribut `controls`.

```js
assert($('audio').attr('controls'));
```

Votre code devrait avoir une balise `source`.

```js
assert($('source').length === 1);
```

Votre balise `source` doit être à l'intérieur des balises `audio`.

```js
assert($('audio').children('source').length === 1);
```

La valeur de l'attribut `src` de la balise `source` doit correspondre exactement au lien figurant dans les instructions.

```js
assert(
  $('source').attr('src') ===
    'https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/screen-reader.mp3'
);
```

Votre code devrait inclure un attribut `type` sur la balise `source` avec une valeur de `audio/mpeg`.

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>De vrais ninjas du code</h1>
  </header>
  <main>
    <p>Un clip sonore du lecteur d'écran de Zersiax en action.</p>



  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>De vrais ninjas du code</h1>
  </header>
  <main>
    <p>Un clip sonore du lecteur d'écran de Zersiax en action.</p>
    <audio controls>
      <source src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```
