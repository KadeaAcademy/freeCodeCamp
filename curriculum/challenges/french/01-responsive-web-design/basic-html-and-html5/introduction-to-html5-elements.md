---
id: bad87fee1348bd9aecf08801
title: Introduction aux éléments HTML5
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

Le HTML5 introduit des balises HTML plus descriptives. Celles-ci incluent `main`, `header`, `footer`, `nav`, `video`, `article`, `section` et autres.

Ces balises donnent une structure descriptive à votre HTML, le rendent plus facile à lire et contribuent à l'optimisation des moteurs de recherche (SEO) et à l'accessibilité. La balise HTML5 `main` aide les moteurs de recherche et les autres développeurs à trouver le contenu principal de votre page.

Exemple d'utilisation, un élément `main` avec deux éléments enfants imbriqués à l'intérieur :

```html
<main> 
  <h1>Bonjour le monde</h1>
  <p>Bonjour Paragraphe</p>
</main>
```

**Note:** La plupart des nouvelles balises HTML5 et leurs avantages sont traités dans la section Accessibilité appliquée.

# --instructions--

Créez un deuxième élément `p` avec le texte suivant kitty ipsum : `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

Ensuite, créez un élément `main` et imbriquez seulement les deux éléments `p` à l'intérieur de l'élément `main`.

# --hints--

Vous devriez avoir 2 éléments `p` avec le texte Kitty Ipsum.

```js
assert($('p').length > 1);
```

Chacun de vos éléments `p` doit avoir une balise fermante.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Votre élément `p` doit contenir les premiers mots du texte supplémentaire `kitty ipsum` fourni.

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

Votre code doit comporter un élément `main`.

```js
assert($('main').length === 1);
```

L'élément `main` doit avoir deux éléments de paragraphe comme enfants.

```js
assert($('main').children('p').length === 2);
```

La balise d'ouverture `main` doit venir avant la balise du premier paragraphe.

```js
assert(code.match(/<main>\s*?<p>/g));
```

La balise fermante `main` doit venir après la deuxième balise fermante du paragraphe.

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
