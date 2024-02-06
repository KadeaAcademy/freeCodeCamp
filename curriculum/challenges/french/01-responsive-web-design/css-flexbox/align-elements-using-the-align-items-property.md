---
id: 587d78ad367417b2b2512af8
title: Aligner les éléments à l'aide de la propriété align-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

La propriété `align-items` est similaire à la propriété `justify-content`. Rappelez-vous que la propriété `justify-content` alignait les éléments flexibles le long de l'axe principal. Pour les lignes, l'axe principal est une ligne horizontale et pour les colonnes, une ligne verticale.

Les conteneurs Flex ont également un **cross axis** qui est l'opposé de l'axe principal. Pour les lignes, l'axe transversal est vertical et pour les colonnes, l'axe transversal est horizontal.

CSS propose la propriété `align-items` pour aligner les éléments flex le long de l'axe transversal. Pour une ligne, elle indique à CSS comment pousser les éléments de la ligne entière vers le haut ou vers le bas dans le conteneur. Et pour une colonne, comment pousser tous les éléments vers la gauche ou la droite dans le conteneur.

Les différentes valeurs disponibles pour `align-items` incluent :

<ul><li><code>flex-start</code>: aligne les éléments au début du conteneur flexible. Pour les lignes, cela aligne les éléments sur le haut du conteneur. Pour les colonnes, les éléments sont alignés sur la gauche du conteneur.</li><li><code>flex-end</code>: aligne les éléments à la fin du conteneur flexible. Pour les lignes, cela aligne les éléments sur le bas du conteneur. Pour les colonnes, les éléments sont alignés sur la droite du conteneur.</li><li><code>center</code>: aligner les éléments au centre. Pour les lignes, cette option aligne les éléments verticalement (espace égal au-dessus et au-dessous des éléments). Pour les colonnes, cela les aligne horizontalement (espace égal à gauche et à droite des éléments).</li><li><code>stretch</code>: étirer les éléments pour remplir le conteneur flexible. Par exemple, les éléments des rangées sont étirés pour remplir le conteneur flexible de haut en bas. Il s'agit de la valeur par défaut si aucune <code>align-items</code> valeur n'est spécifiée.</li><li><code>baseline</code>: aligner les éléments sur leur ligne de base. La ligne de base est un concept de texte, pensez-y comme à la ligne sur laquelle se trouvent les lettres..</li></ul>

# --instructions--

Un exemple permet de montrer cette propriété en action. Ajoutez la propriété CSS `align-items` à l'élément `#box-container`, et donnez-lui la valeur `center`.

**Bonus**  
Essayez les autres options pour la propriété `align-items` dans l'éditeur de code pour voir leurs différences. Mais notez qu'une valeur de `center` est la seule qui passe ce défi.

# --hints--

L'élément `#box-container` doit avoir une propriété `align-items` dont la valeur est `center`.

```js
assert($('#box-container').css('align-items') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Bonjour</p></div>
  <div id="box-2"><p>Au revoir</p></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Bonjour</p></div>
  <div id="box-2"><p>Au revoir</p></div>
</div>
```
