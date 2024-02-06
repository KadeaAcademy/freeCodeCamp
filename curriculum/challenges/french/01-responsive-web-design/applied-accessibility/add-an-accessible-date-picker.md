---
id: 587d778b367417b2b2512aa8
title: Ajouter un sélecteur de dates accessible
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

Les formulaires comprennent souvent le champ `input`, qui peut être utilisé pour créer plusieurs contrôles de formulaire différents. L'attribut `type` de cet élément indique le type d'élément `input` qui sera créé.

Vous avez peut-être remarqué les types d'entrée `text` et `submit` dans les défis précédents, et HTML5 a introduit une option pour spécifier un champ `date`. En fonction de la prise en charge du navigateur, un sélecteur de date s'affiche dans le champ `input` lorsqu'il est en focus, ce qui facilite le remplissage d'un formulaire pour tous les utilisateurs.

Pour les navigateurs plus anciens, le type sera par défaut `text`, il est donc utile d'indiquer aux utilisateurs le format de date attendu dans le texte `label` ou `placeholder` au cas où.

Voici un exemple:

```html
<label for="input1">Saisissez une date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat organise un tournoi de Mortal Kombat et veut demander à ses concurrents de lui indiquer la date qui leur convient le mieux. Ajoutez une balise `input` avec un attribut `type` de `date`, un attribut `id` de `pickdate`, et un attribut `name` de `date`.

# --hints--

Votre code devrait ajouter une balise `input` pour le champ de sélection de la date.

```js
assert($('input').length == 2);
```

Votre balise `input` doit avoir un attribut `type` avec une valeur de `date`.

```js
assert($('input').attr('type') == 'date');
```

Votre balise `input` devrait avoir un attribut `id` avec une valeur de `pickdate`.

```js
assert($('input').attr('id') == 'pickdate');
```

Votre balise `input` devrait avoir un attribut `name` avec une valeur de `date`.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournois</h1>
  </header>
  <main>
    <section>
      <h2>Enquête sur le tournoi Mortal Kombat</h2>
      <form>
        <p>Dites-nous quelle est la meilleure date pour la compétition</p>
        <label for="pickdate">Date souhaitée:</label>

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournois</h1>
  </header>
  <main>
    <section>
      <h2>Enquête sur le tournoi Mortal Kombat</h2>
      <form>
        <p>Dites-nous quelle est la meilleure date pour la compétition</p>
        <label for="pickdate">Date souhaitée:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
