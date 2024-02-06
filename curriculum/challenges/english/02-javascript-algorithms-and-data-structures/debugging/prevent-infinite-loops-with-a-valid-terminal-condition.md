---
id: 587d7b86367417b2b2512b3d
title: Empêcher les boucles infinies avec une condition finale valide
challengeType: 1
forumTopicId: 301192
dashedName: prevent-infinite-loops-with-a-valid-terminal-condition
---

# --description--

Le dernier sujet abordé est la redoutable boucle infinie. Les boucles sont d'excellents outils lorsque vous avez besoin que votre programme exécute un bloc de code un certain nombre de fois ou jusqu'à ce qu'une condition soit remplie, mais elles ont besoin d'une condition finale qui met fin à la boucle. Les boucles infinies sont susceptibles de geler ou de faire planter le navigateur, et de provoquer un désordre général dans l'exécution du programme, ce que personne ne souhaite.

Il y avait un exemple de boucle infinie dans l'introduction de cette section - il n'y avait pas de condition terminale pour sortir de la boucle `while` dans `loopy()`. N'appelez PAS cette fonction !

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

C'est le travail du programmeur de s'assurer que la condition terminale, qui indique au programme quand sortir du code de la boucle, est finalement atteinte. Une erreur consiste à incrémenter ou décrémenter une variable de compteur dans la mauvaise direction à partir de la condition terminale. Une autre erreur consiste à réinitialiser accidentellement un compteur ou une variable d'index dans le code de la boucle, au lieu de l'incrémenter ou de la décrémenter.

# --instructions--

La fonction `myFunc()` contient une boucle infinie parce que la condition terminale `i != 4` ne sera jamais évaluée à `false` (et interrompra la boucle) - `i` sera incrémenté de 2 à chaque passage, et sautera directement sur 4 puisque `i` est impair au départ. Corrigez l'opérateur de comparaison dans la condition finale pour que la boucle ne s'exécute que pour `i` inférieur ou égal à 4.

# --hints--

Votre code devrait changer l'opérateur de comparaison dans la condition terminale (la partie centrale) de la boucle `for`.

```js
assert(code.match(/i\s*?<=\s*?4;/g).length == 1);
```

Votre code doit fixer l'opérateur de comparaison dans la condition terminale de la boucle.

```js
assert(!code.match(/i\s*?!=\s*?4;/g));
```

# --seed--

## --seed-contents--

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```

# --solutions--

```js
function myFunc() {
 for (let i = 1; i <= 4; i += 2) {
   console.log("Still going!");
 }
}
```
