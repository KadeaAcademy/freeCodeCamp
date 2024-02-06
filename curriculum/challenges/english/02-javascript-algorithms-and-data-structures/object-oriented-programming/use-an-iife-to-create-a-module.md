---
id: 587d7db2367417b2b2512b8c
title: Utiliser un IIFE pour créer un module
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

Une expression de fonction immédiatement invoquée (IIFE) est souvent utilisée pour regrouper des fonctionnalités connexes dans un seul objet ou <dfn>module</dfn>. Par exemple, un défi précédent définissait deux mixins :

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

Nous pouvons regrouper ces mixins dans un module comme suit :

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```

Notez que vous avez une expression de fonction immédiatement invoquée (IIFE) qui renvoie un objet `motionModule`. Cet objet retourné contient tous les comportements mixin en tant que propriétés de l'objet. L'avantage du modèle de module est que tous les comportements de mouvement peuvent être regroupés dans un seul objet qui peut ensuite être utilisé par d'autres parties de votre code. Voici un exemple d'utilisation :

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

Créez un module nommé `funModule` pour envelopper les deux mixins `isCuteMixin` et `singMixin`. `funModule` doit retourner un objet.

# --hints--

`funModule` doit être défini et renvoyer un objet.

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` doit accéder à une fonction.

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` doit accéder à une fonction.

```js
assert(typeof funModule.singMixin === 'function');
```

# --seed--

## --seed-contents--

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

# --solutions--

```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```
