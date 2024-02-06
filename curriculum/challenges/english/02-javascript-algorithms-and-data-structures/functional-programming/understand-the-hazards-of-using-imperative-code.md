---
id: 587d7b8e367417b2b2512b5d
title: Comprendre les risques liés à l'utilisation du code impératif
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

La programmation fonctionnelle est une bonne habitude. Elle facilite la gestion de votre code et vous évite les bogues sournois. Mais avant d'en arriver là, examinons une approche impérative de la programmation afin de mettre en évidence les problèmes que vous pourriez rencontrer.

En anglais (et dans de nombreuses autres langues), le temps impératif est utilisé pour donner des ordres. De même, un style impératif en programmation est un style qui donne à l'ordinateur un ensemble d'instructions pour effectuer une tâche.

Souvent, les instructions modifient l'état du programme, comme la mise à jour des variables globales. Un exemple classique est l'écriture d'une boucle "for" qui donne des instructions exactes pour itérer sur les indices d'un tableau.

En revanche, la programmation fonctionnelle est une forme de programmation déclarative. Vous dites à l'ordinateur ce que vous voulez faire en appelant une méthode ou une fonction.

JavaScript propose de nombreuses méthodes prédéfinies qui gèrent des tâches courantes, de sorte qu'il n'est pas nécessaire d'écrire comment l'ordinateur doit les exécuter. Par exemple, au lieu d'utiliser la boucle `for` mentionnée ci-dessus, vous pouvez appeler la méthode `map` qui gère les détails de l'itération sur un tableau. Cela permet d'éviter les erreurs sémantiques, comme les "erreurs de décalage d'une unité" qui ont été abordées dans la section Débogage.

Considérons le scénario suivant : vous naviguez sur le web dans votre navigateur, et vous voulez suivre les onglets que vous avez ouverts. Essayons de modéliser cela à l'aide d'un code orienté objet simple.

Un objet Window est constitué d'onglets, et vous avez généralement plus d'une fenêtre ouverte. Les titres de chaque site ouvert dans chaque objet Window sont conservés dans un tableau. Après avoir travaillé dans le navigateur (ouverture de nouveaux onglets, fusion de fenêtres et fermeture d'onglets), vous souhaitez imprimer les onglets encore ouverts. Les onglets fermés sont supprimés du tableau et les nouveaux onglets (pour plus de simplicité) sont ajoutés à la fin du tableau.

L'éditeur de code montre une implémentation de cette fonctionnalité avec les fonctions `tabOpen()`, `tabClose()`, et `join()`. Le tableau `tabs` fait partie de l'objet Window qui stocke le nom des pages ouvertes.

# --instructions--

Examinez le code dans l'éditeur. Il utilise une méthode qui a des effets secondaires dans le programme, ce qui provoque un comportement incorrect. La liste finale des onglets ouverts, stockée dans `finalTabs.tabs`, devrait être `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` mais la liste produite par le code est légèrement différente.

Modifiez `Window.prototype.tabClose` pour qu'il supprime le bon onglet.

# --hints--

`finalTabs.tabs` devrait être `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

```js
assert.deepEqual(finalTabs.tabs, [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab'
]);
```

# --seed--

## --seed-contents--

```js
// tabs est un tableau de titres de chaque site ouvert dans la fenêtre
const Window = function(tabs) {
  this.tabs = tabs; // Nous gardons une trace du tableau à l'intérieur de l'objet
};

// Lorsque vous réunissez deux fenêtres en une seule
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Lorsque vous ouvrez un nouvel onglet à la fin
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Ouvrons un nouvel onglet pour l'instant
  return this;
};

// Lorsque vous fermez un onglet
Window.prototype.tabClose = function(index) {

  // Ne modifiez que le code situé en dessous de cette ligne

  const tabsBeforeIndex = this.tabs.splice(0, index); // Récupère les onglets précédant l'onglet
  const tabsAfterIndex = this.tabs.splice(index + 1); // Récupère les onglets après l'onglet

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Les réunir

  // Ne modifiez que le code au-dessus de cette ligne

  return this;
 };

// Créons trois fenêtres de navigation
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Votre boîte aux lettres, votre lecteur et vos autres lieux de travail
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sites sociaux
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sites de divertissement

// Effectuez maintenant les opérations d'ouverture et de fermeture des onglets, ainsi que d'autres opérations
const finalTabs = socialWindow
  .tabOpen() // Ouvrir un nouvel onglet pour les mèmes de chat
  .join(videoWindow.tabClose(2)) // Fermez le troisième onglet de la fenêtre vidéo et rejoignez
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

# --solutions--

```js
const Window = function(tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index);
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
```
