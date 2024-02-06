---
id: 587d78a7367417b2b2512ae0
title: Utiliser l'animation CSS pour modifier l'état de survol d'un bouton
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

Vous pouvez utiliser les `@keyframes` CSS pour changer la couleur d'un bouton au survol.

Voici un exemple de modification de la largeur d'une image au survol :

```html
<style>
  img {
    width: 30px;
  }
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />
```

# --instructions--

Notez que `ms` signifie millisecondes, où 1000ms est égal à 1s.

Utilisez la règle CSS `@keyframes` pour modifier le `background-color` de l'élément `button` afin qu'elle devienne `#4791d0` lorsque l'utilisateur la survole. La règle `@keyframes` ne doit comporter qu'une entrée pour `100%`.

# --hints--

La règle @keyframes doit utiliser la couleur de fond `animation-name`.

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

Il devrait y avoir une règle sous `@keyframes` qui change la `background-color` en `#4791d0` à 100%.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Enregistrer</button>
```

# --solutions--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }

  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Enregistrer</button>
```
