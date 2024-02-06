---
id: 587d774d367417b2b2512a9e
title: Utiliser des titres pour montrer les relations hiérarchiques du contenu
challengeType: 0
videoUrl: "https://scrimba.com/c/cqVEktm"
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

Les titres (éléments `h1` à `h6`) sont des balises de travail qui permettent de structurer et d'étiqueter votre contenu. Les lecteurs d'écran peuvent être configurés pour ne lire que les titres d'une page afin que l'utilisateur obtienne un résumé. Cela signifie qu'il est important que les balises d'en-tête de votre balisage aient une signification sémantique et soient liées les unes aux autres, et qu'elles ne soient pas choisies uniquement pour leur taille.

_La signification sémantique_ signifie que la balise que vous utilisez autour du contenu indique le type d'information qu'il contient.

Si vous écrivez un article avec une introduction, un corps et une conclusion, il ne serait pas très logique de placer la conclusion comme une sous-section du corps dans votre plan. Elle doit constituer une section à part entière. De même, les balises d'en-tête d'une page Web doivent être ordonnées et indiquer les relations hiérarchiques de votre contenu.

Les titres de rang égal (ou supérieur) commencent de nouvelles sections implicites, les titres de rang inférieur commencent des sous-sections de la section précédente.

Par exemple, une page comportant un élément `h2` suivi de plusieurs sous-sections étiquetées avec des éléments `h4` dérouterait un utilisateur de lecteur d'écran. Avec six possibilités, il est tentant d'utiliser une balise parce qu'elle est plus belle dans un navigateur, mais vous pouvez utiliser le CSS pour modifier la taille relative.

Un dernier point : chaque page doit toujours comporter un (et un seul) élément `h1`, qui représente le sujet principal de votre contenu. Cet élément et les autres titres sont utilisés en partie par les moteurs de recherche pour comprendre le sujet de la page.

# --instructions--

Camper Cat veut une page sur son site consacrée à devenir un ninja. Aidez-le à corriger les titres pour que son balisage donne une signification sémantique au contenu et montre les relations parent-enfant appropriées de ses sections. Remplacez toutes les balises `h5` par le niveau d'en-tête approprié pour indiquer qu'il s'agit de sous-sections des balises `h2`. Utilisez les balises `h3` à cet effet.

# --hints--

Votre code devrait comporter 6 éléments `h3`.

```js
assert($("h3").length === 6);
```

Votre code doit comporter 6 balises de fermeture `h3`.

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

Votre code ne doit pas comporter d'éléments `h5`.

```js
assert($("h5").length === 0);
```

Votre code ne doit pas comporter de balises de fermeture `h5`.

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

```html
<h1>Comment devenir un ninja</h1>
<main>
  <h2>Apprendre l'art de se déplacer furtivement</h2>
  <h5>Comment se cacher à la vue de tous</h5>
  <h5>Comment escalader un mur</h5>

  <h2>Apprendre l'art du combat</h2>
  <h5>Comment renforcer votre corps</h5>
  <h5>Comment se battre comme un Ninja</h5>

  <h2>Apprendre l'art de vivre avec honneur</h2>
  <h5>Comment respirer correctement</h5>
  <h5>Comment simplifier votre vie</h5>
</main>
```

# --solutions--

```html
<h1>Comment devenir un ninja</h1>
<main>
  <h2>Apprendre l'art de se déplacer furtivement</h2>
  <h3>Comment se cacher à la vue de tous</h3>
  <h3>Comment escalader un mur</h3>

  <h2>Apprendre l'art du combat</h2>
  <h3>Comment renforcer votre corps</h3>
  <h3>Comment se battre comme un Ninja</h3>

  <h2>Apprendre l'art de vivre avec honneur</h2>
  <h3>Comment respirer correctement</h3>
  <h3>Comment simplifier votre vie</h3>
</main>
```
