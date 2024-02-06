---
id: 587d774c367417b2b2512a9d
title: Savoir quand l'attribut Alt doit être laissé vide
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

Dans le dernier défi, vous avez appris que l'inclusion d'un attribut `alt` lors de l'utilisation des balises `img` est obligatoire. Cependant, il arrive que les images soient regroupées avec une légende les décrivant déjà, ou qu'elles ne soient utilisées que pour la décoration. Dans ces cas, le texte `alt` peut sembler redondant ou inutile.

Lorsqu'une image est déjà expliquée par un contenu textuel ou qu'elle n'ajoute pas de sens à une page, l'attribut `img` a toujours besoin d'un attribut `alt`, mais il peut être défini comme une chaîne vide. Voici un exemple:

```html
<img src="visualDecoration.jpeg" alt="">
```

Les images d'arrière-plan sont généralement classées dans la catégorie "décoratif". Cependant, elles sont généralement appliquées avec des règles CSS et ne font donc pas partie du processus de balisage des lecteurs d'écran.

**Note:** Pour les images avec une légende, vous pouvez toujours inclure le texte `alt` car il aide les moteurs de recherche à cataloguer le contenu de l'image.

# --instructions--

Camper Cat a codé un squelette de page pour la partie blog de son site Web. Il prévoit d'ajouter une rupture visuelle entre ses deux articles avec une image décorative d'un sabre de samouraï. Ajoutez un attribut `alt` à la balise `img` et donnez-lui la valeur d'une chaîne vide. (Notez que l'image `src` n'est pas liée à un fichier réel - ne vous inquiétez pas qu'il n'y ait pas d'épées affichées).

# --hints--

Votre balise `img` doit avoir un attribut `alt`.

```js
assert(!($('img').attr('alt') == undefined));
```

L'attribut `alt` doit être défini comme une chaîne vide.

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Réflexions profondes avec Master Camper Cat</h1>
<article>
  <h2>Vaincre l'ennemi : le point rouge est à nous!</h2>
  <p>À venir...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Chuck Norris aime-t-il les chats ?</h2>
  <p>À venir...</p>
</article>
```

# --solutions--

```html
<h1>Réflexions profondes avec Master Camper Cat</h1>
<article>
  <h2>Vaincre l'ennemi : le point rouge est à nous!</h2>
  <p>À venir...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Chuck Norris aime-t-il les chats ?</h2>
  <p>À venir...</p>
</article>
```
