---
id: 587d78b0367417b2b2512b08
title: Créer une requête média (media query)
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Les requêtes multimédias sont une nouvelle technique introduite dans CSS3 qui modifie la présentation du contenu en fonction de la taille des fenêtres d'affichage. La fenêtre d'affichage est la zone visible d'une page Web pour l'utilisateur. Elle varie en fonction du périphérique utilisé pour accéder au site.

Les requêtes de médias se composent d'un type de média, et si ce type de média correspond au type de périphérique sur lequel le document est affiché, les styles sont appliqués. Vous pouvez avoir autant de sélecteurs et de styles que vous le souhaitez dans votre requête média.

Voici un exemple de requête média qui renvoie le contenu lorsque la largeur de l'appareil est inférieure ou égale à `100px` :

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

et la requête média suivante renvoie le contenu lorsque la hauteur de l'appareil est supérieure ou égale à `350px` :

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

N'oubliez pas que le CSS contenu dans la requête média n'est appliqué que si le type de média correspond à celui du périphérique utilisé.

# --instructions--

Ajoutez une requête média, afin que la balise `p` ait une `font-size` de `10px` lorsque la hauteur du périphérique est inférieure ou égale à `800px`.

# --hints--

Vous devez déclarer une requête `@media` pour les appareils dont la `hauteur` est inférieure ou égale à `800px`.

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

Votre élément `p` doit avoir une `font-size` de `10px` lorsque la `height` du périphérique est inférieure ou égale à `800px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

Votre élément `p` doit avoir une `font-size` initiale de `20px` lorsque la `height` du périphérique est supérieure à `800px`.

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
