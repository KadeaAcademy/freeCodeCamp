---
id: 587d78ab367417b2b2512af1
title: Ajouter les superpouvoirs de Flex au Tweet embarqué
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c9W7MhM'
forumTopicId: 301100
dashedName: add-flex-superpowers-to-the-tweet-embed
---

# --description--

À droite se trouve le tweet embarqué qui sera utilisé comme exemple pratique. Certains éléments seraient plus jolis avec une mise en page différente. Le dernier défi a démontré `display : flex`. Ici, vous allez l'ajouter à plusieurs composants dans le tweet embarqué pour commencer à ajuster leur positionnement.

# --instructions--

Ajoutez la propriété CSS `display : flex` à tous les éléments suivants - notez que les sélecteurs sont déjà configurés dans le CSS :

`header`, `.profile-name` de l'en-tête, `.follow-btn` de l'en-tête, `h3` et `h4` de l'en-tête, le `footer`, et `.stats` du pied de page.

# --hints--

Votre `.follow-btn` devrait être rendu sur la page. Assurez-vous de désactiver toute extension telle que les bloqueurs de publicité.

```js
assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');
```

Votre `header` doit avoir une propriété `display` définie sur `flex`.

```js
assert($('header').css('display') == 'flex');
```

Votre `footer` doit avoir une propriété `display` définie sur `flex`.

```js
assert($('footer').css('display') == 'flex');
```

Votre `h3` devrait avoir une propriété `display` définie sur `flex`.

```js
assert($('h3').css('display') == 'flex');
```

Votre `h4` devrait avoir une propriété `display` définie sur `flex`.

```js
assert($('h4').css('display') == 'flex');
```

Votre `.profile-name` devrait avoir une propriété `display` définie sur `flex`.

```js
assert($('.profile-name').css('display') == 'flex');
```

Votre `.follow-btn` devrait avoir une propriété `display` définie sur `flex`.

```js
assert($('.follow-btn').css('display') == 'flex');
```

Votre `.stats` devrait avoir une propriété `display` définie sur `flex`.

```js
assert($('.stats').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {

    margin-left: 10px;
  }
  header .follow-btn {

    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {

    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {

  }
  footer .stats {

    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Suivre</button>
  </div>
</header>
<div id="inner">
  <p>Je rencontre tellement de gens qui sont à la recherche de l'astuce qui les aidera à travailler intelligemment. Même si vous travaillez intelligemment, vous devez toujours travailler dur.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Partager</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">J'aime</button>
  </div>
</footer>
```

# --solutions--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
   display: flex;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Suivre</button>
  </div>
</header>
<div id="inner">
  <p>Je rencontre tellement de gens qui sont à la recherche de l'astuce qui les aidera à travailler intelligemment. Même si vous travaillez intelligemment, vous devez toujours travailler dur.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Partager</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">J'aime</button>
  </div>
</footer>
```
