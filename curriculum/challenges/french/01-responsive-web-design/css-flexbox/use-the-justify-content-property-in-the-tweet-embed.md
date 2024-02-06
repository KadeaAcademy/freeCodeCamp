---
id: 587d78ac367417b2b2512af7
title: Utilisez la propriété justify-content dans le Tweet embarqué
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43GgTa'
forumTopicId: 301115
dashedName: use-the-justify-content-property-in-the-tweet-embed
---

# --description--

Le dernier défi montrait un exemple de la propriété `justify-content`. Pour le tweet embarqué, cette propriété peut être appliquée pour aligner les éléments de l'élément `.profile-name`.

# --instructions--

Ajoutez la propriété CSS `justify-content` à l'élément `.profile-name` de l'en-tête et définissez la valeur de l'une des options du dernier défi.

# --hints--

Votre `.follow-btn` devrait être rendu sur la page. Assurez-vous de désactiver toute extension telle que les bloqueurs de publicité.

```js
assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');
```

L'élément `.profile-name` doit avoir la propriété `justify-content` définie sur l'une de ces valeurs : `center`, `flex-start`, `flex-end`, `space-between`, `space-around`, ou `space-evenly`.

```js
assert(
  code.match(
    /header\s.profile-name\s*{\s*?.*?\s*?.*?\s*?\s*?.*?\s*?justify-content\s*:\s*(center|flex-start|flex-end|space-between|space-around|space-evenly)\s*;/g
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;

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

# --solutions--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
