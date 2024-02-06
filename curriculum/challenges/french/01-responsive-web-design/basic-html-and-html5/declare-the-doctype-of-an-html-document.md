---
id: 587d78aa367417b2b2512aed
title: Déclarer le Doctype d'un document HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

Les défis relevés jusqu'à présent ont porté sur des éléments HTML spécifiques et leurs utilisations. Cependant, il existe quelques éléments qui donnent une structure globale à votre page et qui devraient être inclus dans chaque document HTML.

En haut de votre document, vous devez indiquer au navigateur quelle version de HTML votre page utilise. Le langage HTML évolue et est régulièrement mis à jour. La plupart des principaux navigateurs prennent en charge la dernière spécification, à savoir le HTML5. Toutefois, des pages Web plus anciennes peuvent utiliser des versions antérieures du langage.

Vous indiquez cette information au navigateur en ajoutant la balise `<!DOCTYPE ...>` sur la première ligne, où la partie `...` est la version du HTML. Pour HTML5, vous utilisez `<!DOCTYPE html>`.

Le `!` et la majuscule de `DOCTYPE` sont importants, surtout pour les anciens navigateurs. Le `html` n'est pas sensible à la casse.

Ensuite, le reste de votre code HTML doit être entouré de balises `html`. La balise d'ouverture `<html>` va directement sous la ligne `<!DOCTYPE html>`, et la balise de fermeture `</html>` va à la fin de la page.

Voici un exemple de la structure d'une page. Votre code HTML doit être placé dans l'espace entre les deux balises `html`.

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

Ajoutez une balise `DOCTYPE` pour HTML5 en haut du document HTML vierge dans l'éditeur de code. Sous cette balise, ajoutez les balises ouvrantes et fermantes `html`, qui entourent un élément `h1`. L'en-tête peut contenir n'importe quel texte.

# --hints--

Votre code doit inclure une balise `<!DOCTYPE html>`.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

Il doit y avoir un élément `html`.

```js
assert($('html').length == 1);
```

Les balises `html` doivent entourer un élément `h1`.

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
