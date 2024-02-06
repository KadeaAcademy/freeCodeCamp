---
id: 587d7790367417b2b2512ab0
title: Utiliser tabindex pour ajouter le focus clavier à un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

L'attribut HTML `tabindex` a trois fonctions distinctes liées au focus clavier d'un élément. Lorsqu'il se trouve sur une balise, il indique que l'élément peut être ciblé. La valeur (un nombre entier positif, négatif ou nul) détermine le comportement.

Certains éléments, tels que les liens et les contrôles de formulaires, reçoivent automatiquement le focus clavier lorsqu'un utilisateur navigue dans une page. C'est dans le même ordre que les éléments viennent dans le balisage de la source HTML. Cette même fonctionnalité peut être donnée à d'autres éléments, tels que `div`, `span`, et `p`, en plaçant un attribut `tabindex="0"` sur eux. Voici un exemple :

```html
<div tabindex="0">J'ai besoin du focus clavier !</div>
```

**Note:** Une valeur négative de `tabindex` (typiquement -1) indique qu'un élément est focalisable, mais n'est pas atteignable par le clavier. Cette méthode est généralement utilisée pour mettre le focus sur un contenu de manière programmatique (comme lorsqu'un `div` utilisé pour une fenêtre pop-up est activé), et est au-delà de la portée de ces défis.

# --instructions--

Camper Cat a créé une nouvelle enquête pour recueillir des informations sur ses utilisateurs. Il sait que les champs de saisie reçoivent automatiquement le focus du clavier, mais il veut s'assurer que les utilisateurs du clavier s'arrêtent sur les instructions lorsqu'ils parcourent les éléments avec la souris. Ajoutez un attribut `tabindex` à la balise `p` et définissez sa valeur à `0`. Bonus : l'utilisation de `tabindex` permet également à la pseudo-classe CSS `:focus` de fonctionner sur la balise `p`.

# --hints--

Votre code devrait ajouter un attribut `tabindex` à la balise `p` qui contient les instructions du formulaire.

```js
assert($('p').attr('tabindex'));
```

Votre code doit donner la valeur 0 à l'attribut `tabindex` de la balise `p`.

```js
assert($('p').attr('tabindex') == '0');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Enquête Ninja</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Remplissez TOUTES vos informations et cliquez sur <b>Envoyer</b></p>


      <label for="username">Nom d'utilisateur :</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>Quel niveau de ninja êtes-vous ?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Chaton débutant</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Étudiant en développement</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Maître de 9e vie</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Sélectionnez vos armes préférées :</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Étoiles de jet</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchakus</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Set Sai</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Épée</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Enquête Ninja</h1>
  </header>
  <section>
    <form>


      <p tabindex="0">Instructions: Remplissez TOUTES vos informations et cliquez sur <b>Envoyer</b></p>


      <label for="username">Nom d'utilisateur :</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>Quel niveau de ninja êtes-vous ?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Chaton débutant</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Étudiant en développement</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Maître de 9e vie</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Sélectionnez vos armes préférées :</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Étoiles de jet</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchakus</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Set Sai</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Épée</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
