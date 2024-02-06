---
id: 587d7790367417b2b2512ab1
title: Utilisez tabindex pour spécifier l'ordre de la mise du focus du clavier pour plusieurs éléments
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

L'attribut `tabindex` spécifie également l'ordre exact des tabulations des éléments. Cela est possible lorsque la valeur de l'attribut est définie sur un nombre positif de 1 ou plus.

Si vous définissez un attribut `tabindex="1"`, le clavier mettra d'abord l'accent sur cet élément. Ensuite, il parcourt la séquence des valeurs `tabindex` spécifiées (2, 3, etc.), avant de passer aux éléments par défaut et `tabindex="0"`.

Il est important de noter que lorsque l'ordre des onglets est défini de cette manière, il remplace l'ordre par défaut (qui utilise la source HTML). Cela peut perturber les utilisateurs qui s'attendent à ce que la navigation commence en haut de la page. Cette technique peut être nécessaire dans certaines circonstances, mais en termes d'accessibilité, faites attention avant de l'appliquer.

Voici un exemple :

```html
<div tabindex="1">J'obtiens le focus clavier, et je l'obtiens en premier !</div>
```

```html
<div tabindex="2">J'obtiens le focus du clavier, et je l'obtiens en second !</div>
```

# --instructions--

Camper Cat a un champ de recherche sur sa page de citations inspirantes qu'il prévoit de positionner dans le coin supérieur droit avec CSS. Il souhaite que les contrôles de formulaire `input` de recherche et `input` d'envoi soient les deux premiers éléments dans l'ordre de tabulation. Ajoutez un attribut `tabindex` défini sur `1` à la balise `input` de type `search`, et un attribut `tabindex` défini sur `2` à la balise `input` de type `submit`.

Une autre chose à noter est que certains navigateurs peuvent vous placer au milieu de l'ordre des onglets lorsqu'un élément est cliqué. Un élément a été ajouté à la page pour que vous commenciez toujours au début de l'ordre des onglets.

# --hints--

Votre code devrait ajouter un attribut `tabindex` à la balise `input` de type `search`.

```js
assert($('#search').attr('tabindex'));
```

Votre code devrait ajouter un attribut `tabindex` à la balise `input` de type `submit`.

```js
assert($('#submit').attr('tabindex'));
```

Votre code doit attribuer la valeur 1 à l'attribut `tabindex` de la balise `input` de type `search`.

```js
assert($('#search').attr('tabindex') == '1');
```

Votre code doit attribuer la valeur 2 à l'attribut `tabindex` de la balise `input` de type `submit`.

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Des pensées encore plus profondes avec Maître Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Accueil</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Formation</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Recherche:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Citations inspirantes</h2>
  <blockquote>
    <p>&ldquo;Il n'y a pas de théorie de l'évolution, juste une liste de créatures que j'ai laissé vivre.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Les sages disent que le pardon est divin, mais ne paient jamais le prix fort pour une pizza en retard.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Des pensées encore plus profondes avec Maître Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Accueil</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Formation</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Recherches :</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Citations inspirantes</h2>
  <blockquote>
    <p>&ldquo;Il n'y a pas de théorie de l'évolution, juste une liste de créatures que j'ai laissé vivre.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Les sages disent que le pardon est divin, mais ne paient jamais le prix fort pour une pizza en retard.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
