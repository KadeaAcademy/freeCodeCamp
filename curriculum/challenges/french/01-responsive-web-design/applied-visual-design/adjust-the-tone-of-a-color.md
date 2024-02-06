---
id: 587d78a4367417b2b2512ad5
title: Ajuster la nuance d'une couleur
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

L'option `hsl()` de CSS permet également d'ajuster facilement le ton d'une couleur. En mélangeant du blanc avec une teinte pure, on obtient une teinte de cette couleur, et en ajoutant du noir, on obtient une ombre. Il est également possible de produire un ton en ajoutant du gris ou en combinant teinte et ombrage. Rappelez-vous que les lettres 's' et 'l' de `hsl()` représentent respectivement la saturation et la luminosité. Le pourcentage de saturation modifie la quantité de gris et le pourcentage de luminosité détermine la quantité de blanc ou de noir dans la couleur. C'est utile lorsque vous avez une teinte de base que vous aimez, mais que vous avez besoin de différentes variations de celle-ci.


# --instructions--


Tous les éléments ont un `background-color` par défaut de `transparent`. Notre élément `nav` semble actuellement avoir un arrière-plan `cyan`, parce que l'élément derrière lui a un `background-color` définie sur `cyan`. Ajoutez un `background-color` à l'élément `nav` pour qu'il utilise la même nuance `cyan`, mais avec des valeurs de saturation `80%` et de luminosité `25%` pour modifier son ton et sa nuance.

# --hints--

L'élément `nav` doit avoir un `background-color` du ton cyan ajusté en utilisant la propriété `hsl()`.

```js
assert(
  code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cuisiner avec FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cuisiner avec FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
