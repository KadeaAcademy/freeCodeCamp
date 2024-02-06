---
id: 587d78b1367417b2b2512b0a
title: Utilisez une image Retina pour les écrans à plus haute résolution
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

Avec l'augmentation du nombre d'appareils connectés à Internet, leurs tailles et leurs spécifications varient, et les écrans qu'ils utilisent peuvent être différents à l'extérieur et à l'intérieur. La densité des pixels est un aspect qui peut être différent d'un appareil à l'autre. Cette densité est connue sous le nom de pixel par pouce (PPI) ou de points par pouce (DPI). Le plus célèbre de ces écrans est celui connu sous le nom de "Retina Display" sur les derniers ordinateurs portables MacBook Pro d'Apple, et récemment sur les ordinateurs iMac. En raison de la différence de densité de pixels entre un écran "Retina" et un écran "Non-Retina", certaines images qui n'ont pas été créées dans l'optique d'un écran haute résolution peuvent sembler "pixellisées" lorsqu'elles sont rendues sur un écran haute résolution.

La façon la plus simple de faire apparaître correctement vos images sur des écrans haute résolution, tels que l'écran "retina" du MacBook Pros, est de définir leurs valeurs de "largeur" et de "hauteur" comme étant seulement la moitié de ce que le fichier original est. Voici un exemple d'une image qui n'utilise que la moitié de la hauteur et de la largeur d'origine :

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="Une excellente photo">
```

# --instructions--

Définissez le `height` et le `height` de la balise `img` à la moitié de leurs valeurs d'origine. Dans ce cas, les valeurs originales de `height` et de `width` sont toutes deux de `200px`.

# --hints--

Votre balise `img` doit avoir un `width` de 100 pixels.

```js
assert(document.querySelector('img').width === 100);
```

Votre balise `img` doit avoir un `height` de 100 pixels.

```js
assert(document.querySelector('img').height === 100);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/FCCStickers-CamperBot200x200.jpg" alt="un autocollant qui dit 'Because CamperBot Cares'.">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/FCCStickers-CamperBot200x200.jpg" alt="un autocollant qui dit 'Because CamperBot Cares'.">
```
