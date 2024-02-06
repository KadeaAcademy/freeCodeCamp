---
id: 587d7dae367417b2b2512b7b
title: Comprendre les propriétés propres
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

Dans l'exemple suivant, le constructeur `Bird` définit deux propriétés : `name` et `numLegs` :

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` et `numLegs` sont appelées <dfn>propres propriétés</dfn>, parce qu'elles sont définies directement sur l'objet instance. Cela signifie que `duck` et `canary` ont chacun leur propre copie de ces propriétés. En fait, chaque instance de `Bird` aura sa propre copie de ces propriétés. Le code suivant ajoute toutes les propriétés propres de `duck` au tableau `ownProps` :

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

La console affichera la valeur `["name", "numLegs"]`.

# --instructions--

Ajoute les propriétés propres de `canary` au tableau `ownProps`.

# --hints--

`ownProps` doit inclure les valeurs `numLegs` et `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

Vous devez résoudre ce problème sans utiliser la méthode intégrée `Object.keys()`.

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

Vous devriez résoudre ce problème sans coder en dur le tableau `ownProps`.

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Ne modifiez que le code situé en dessous de cette ligne
```

# --solutions--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```
