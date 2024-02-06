---
id: 58a7a6ebf9a6318348e2d5aa
title: Modifier le mode de remplissage d'une animation
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

C'est génial, mais ça ne fonctionne pas encore correctement. Remarquez que l'animation se réinitialise au bout de `500ms`, ce qui fait que le bouton reprend sa couleur d'origine. Vous voulez que le bouton reste en surbrillance.

Vous pouvez le faire en définissant la propriété `animation-fill-mode` sur `forwards`. La propriété `animation-fill-mode` spécifie le style appliqué à un élément lorsque l'animation est terminée. Vous pouvez le définir comme suit :

```css
animation-fill-mode: forwards;
```

# --instructions--

Définissez la propriété `animation-fill-mode` de `button:hover` sur `forwards` pour que le bouton reste en surbrillance lorsque l'utilisateur le survole.

# --hints--

La propriété `button:hover` devrait avoir une `animation-fill-mode` avec une valeur de `forwards`.

```js
assert(
  code.match(
    /button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi
  ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi
    ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    /* Only change code below this line */

    /* Only change code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Enregistrer</button>
```

# --solutions--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Enregistrer</button>
```
