---
id: 587d78a4367417b2b2512ad3
title: Ajuster la couleur de divers éléments à des couleurs complémentaires
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

Le défi des couleurs complémentaires a montré que des couleurs opposées sur la roue chromatique peuvent se rendre mutuellement plus éclatantes lorsqu'elles sont placées côte à côte. Cependant, le fort contraste visuel peut être dérangeant s'il est trop utilisé sur un site Web, et peut parfois rendre le texte plus difficile à lire s'il est placé sur un fond de couleur complémentaire. Dans la pratique, l'une des couleurs est généralement dominante et la complémentaire est utilisée pour attirer l'attention sur certains contenus de la page.

# --instructions--

Cette page utilisera une nuance de sarcelle (`#09A7A1`) comme couleur dominante, et son complément orange (`#FF790E`) pour mettre en valeur les boutons d'inscription. Modifiez le `background-color` de `header` et du `footer` en remplaçant le noir par la couleur sarcelle. Changez ensuite le `color` du texte `h2` en sarcelle également. Enfin, changez le `background-color` du `button` en orange.

# --hints--

L'élément `header` doit avoir un `background-color` de #09A7A1.

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

L'élément `footer` doit avoir une `background-color` de #09A7A1.

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

L'élément `h2` devrait avoir une `color` de #09A7A1.

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

L'élément `button` doit avoir une `background-color` de #FF790E.

```js
assert($('button').css('background-color') == 'rgb(255, 121, 14)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cuisiner avec FCC !</h1>
</header>
<main>
  <article>
    <h2>Machine Learning dans la cuisine</h2>
    <p>Participez à cet atelier de deux jours qui vous expliquera comment mettre en œuvre des algorithmes de pointe pour le grignotage avec une interface de ligne de commande. Le codage implique généralement l'écriture d'instructions exactes, mais parfois vous avez besoin que votre ordinateur exécute des commandes flexibles,<code>aller chercher des Pringle</code>.</p>
    <button>S'inscrire</button>
  </article>
  <article>
    <h2>Bisection Hachage de légumes</h2>
    <p>Cette retraite d'une semaine vous permettra de transformer vos compétences de ninja du codage en véritables compétences de ninja. L'humble recherche par bissection n'est plus limitée aux tableaux triés ou aux questions d'entretien de codage. L'application de ses concepts dans la cuisine vous permettra de couper des carottes en un temps O(log n) avant que vous ne le sachiez.</p>
    <button>S'inscrire</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```

# --solutions--

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: #09A7A1;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: #09A7A1;
  }
  button {
    background-color: #FF790E;
  }
  footer {
    background-color: #09A7A1;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cuisiner avec FCC !</h1>
</header>
<main>
  <article>
    <h2>Machine Learning dans la cuisine</h2>
    <p>Participez à cet atelier de deux jours qui vous expliquera comment mettre en œuvre des algorithmes de pointe pour le grignotage avec une interface de ligne de commande. Le codage implique généralement l'écriture d'instructions exactes, mais parfois vous avez besoin que votre ordinateur exécute des commandes flexibles,</code>.</p>
    <button>S'inscrire</button>
  </article>
  <article>
    <h2>Bisection Hachage de légumes</h2>
    <p>Cette retraite d'une semaine vous permettra de transformer vos compétences de ninja du codage en véritables compétences de ninja. L'humble recherche par bissection n'est plus limitée aux tableaux triés ou aux questions d'entretien de codage. L'application de ses concepts dans la cuisine vous permettra de couper des carottes en un temps O(log n) avant que vous ne le sachiez.</p>
    <button>S'inscrire</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```
