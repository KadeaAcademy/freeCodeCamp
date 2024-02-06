---
id: 587d78a8367417b2b2512ae3
title: Animer des éléments de façon continue en utilisant un nombre infini d'animations
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

Dans les défis précédents, nous avons vu comment utiliser certaines des propriétés d'animation et la règle `@keyframes`. Une autre propriété d'animation est le `animation-iteration-count`, qui vous permet de contrôler le nombre de fois que vous souhaitez faire tourner l'animation en boucle. Voici un exemple :

```css
animation-iteration-count: 3;
```

Dans ce cas, l'animation s'arrêtera après avoir été exécutée 3 fois, mais il est possible de faire en sorte que l'animation soit exécutée en continu en mettant cette valeur à `infinite`.

# --instructions--

Pour que la balle continue de rebondir sur la droite en boucle, changez la propriété `animation-iteration-count` en `infinite`.

# --hints--

La propriété `animation-iteration-count` devrait avoir une valeur de `infinite`.

```js
assert($('#ball').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```
