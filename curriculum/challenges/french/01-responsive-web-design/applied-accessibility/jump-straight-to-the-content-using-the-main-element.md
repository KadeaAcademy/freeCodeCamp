---
id: 587d774e367417b2b2512a9f
title: Accéder directement au contenu à l'aide de l'élément main
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

Le HTML5 a introduit plusieurs nouveaux éléments qui offrent aux développeurs davantage d'options tout en intégrant des fonctions d'accessibilité. Ces balises sont, entre autres, `main`, `header`, `footer`, `nav`, `article` et `section`.

Par défaut, un navigateur rend ces éléments comme l'humble `div`. Cependant, leur utilisation, le cas échéant, donne une signification supplémentaire à votre balisage. Le nom de la balise peut à lui seul indiquer le type d'information qu'elle contient, ce qui ajoute une signification sémantique à ce contenu. Les technologies d'assistance peuvent accéder à ces informations pour fournir un meilleur résumé de la page ou des options de navigation à leurs utilisateurs.

L'élément `main` est utilisé pour envelopper (vous l'avez deviné) le contenu principal, et il ne doit y en avoir qu'un par page. Il est destiné à entourer les informations relatives au sujet central de votre page. Il n'est pas destiné à inclure des éléments qui se répètent d'une page à l'autre, comme les liens de navigation ou les bannières.

La balise `main` comporte également une fonction de repère intégrée que les technologies d'assistance peuvent utiliser pour naviguer rapidement vers le contenu principal. Si vous avez déjà vu un lien "Sauter au contenu principal" en haut d'une page, l'utilisation de la balise `main` donne automatiquement cette fonctionnalité aux dispositifs d'assistance.

# --instructions--

Camper Cat a de grandes idées pour sa page d'armes ninja. Aidez-le à mettre en place son balisage en ajoutant des balises ouvrantes et fermantes `main` entre les balises `header` et `footer` (traitées dans d'autres défis). Gardez les balises `main` vides pour le moment.

# --hints--

Votre code devrait avoir une balise `main`.

```js
assert($('main').length == 1);
```

Les balises `main` doivent se trouver entre la balise fermante `header` et la balise ouvrante `footer`.

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Les armes du Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Les armes du Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
