---
id: 587d781a367417b2b2512ab8
title: Utilisez la balise u pour souligner du texte
challengeType: 0
videoUrl: "https://scrimba.com/c/cN6aQCL"
forumTopicId: 301082
dashedName: use-the-u-tag-to-underline-text
---

# --description--

Pour souligner du texte, vous pouvez utiliser la balise `u`. Elle est souvent utilisée pour indiquer qu'une section de texte est importante ou qu'il faut s'en souvenir. Avec la balise `u`, le navigateur applique la CSS de `text-decoration : underline;` à l'élément.

# --instructions--

Enveloppez la balise `u` uniquement autour du texte `étudiants en doctorat`.

**Note:** Essayez d'éviter d'utiliser la balise `u` lorsqu'elle peut être confondue avec un lien. Les balises d'ancrage ont également une mise en forme soulignée par défaut.

# --hints--

Votre code devrait ajouter une balise `u` à la balise.

```js
assert($("u").length === 1);
```

La balise `u` doit entourer le texte `étudiants en doctorat`.

```js
assert($("u").text() === "étudiants en doctorat");
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>
        Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient
        étudiants en doctorat à <strong>l'université de Stanford</strong>.
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      ><br /><br />
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>
        Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient
        <u>étudiants en doctorat</u> à 
        <strong>l'université de Stanford</strong>.
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      ><br /><br />
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```
