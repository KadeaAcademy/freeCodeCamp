#!/usr/bin/env node
/**
 * Script de pré-vérification avant le développement
 * Résout automatiquement les problèmes courants avec yoga-layout-prebuilt
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const clientDir = __dirname.replace('/scripts', '');
const cacheDir = path.join(clientDir, '.cache');
const nodeModulesCache = path.join(clientDir, 'node_modules', '.cache');

console.log("🔍 Vérification de l'environnement de développement...\n");

// 1. Nettoyer les caches
console.log('1. Nettoyage des caches...');
try {
  if (fs.existsSync(cacheDir)) {
    fs.rmSync(cacheDir, { recursive: true, force: true });
    console.log('   ✓ Cache Gatsby nettoyé');
  }
  if (fs.existsSync(nodeModulesCache)) {
    fs.rmSync(nodeModulesCache, { recursive: true, force: true });
    console.log('   ✓ Cache node_modules nettoyé');
  }
} catch (error) {
  console.log('   ⚠ Erreur lors du nettoyage:', error.message);
}

// 2. Vérifier yoga-layout-prebuilt
console.log('\n2. Vérification de yoga-layout-prebuilt...');
try {
  // Chercher dans node_modules local et parent
  const yogaPaths = [
    path.join(clientDir, 'node_modules', 'yoga-layout-prebuilt'),
    path.join(clientDir, '..', 'node_modules', 'yoga-layout-prebuilt')
  ];

  let yogaPath = null;
  for (const testPath of yogaPaths) {
    if (fs.existsSync(testPath)) {
      yogaPath = testPath;
      break;
    }
  }

  if (!yogaPath) {
    console.log('   ⚠ yoga-layout-prebuilt non trouvé, réinstallation...');
    execSync('npm install yoga-layout-prebuilt@1.10.0 --save', {
      cwd: clientDir,
      stdio: 'inherit'
    });
    yogaPath = path.join(clientDir, 'node_modules', 'yoga-layout-prebuilt');
  } else {
    console.log('   ✓ yoga-layout-prebuilt trouvé');

    // Vérifier si le module natif est bien construit
    // Le module peut être dans différents emplacements selon la version
    const possibleBuildPaths = [
      path.join(yogaPath, 'yoga-layout', 'build', 'Release'),
      path.join(yogaPath, 'build', 'Release'),
      path.join(yogaPath, 'yoga-layout', 'build')
    ];

    const buildExists = possibleBuildPaths.some(buildPath =>
      fs.existsSync(buildPath)
    );

    if (!buildExists) {
      console.log('   ⚠ Module natif non construit, reconstruction...');
      execSync('npm rebuild yoga-layout-prebuilt', {
        cwd: clientDir,
        stdio: 'inherit'
      });
    } else {
      console.log('   ✓ Module natif vérifié');
    }
  }
} catch (error) {
  console.log('   ⚠ Erreur lors de la vérification:', error.message);
  // Ne pas bloquer le développement si la vérification échoue
}

// 3. Tuer les processus Gatsby existants
console.log('\n3. Vérification des processus existants...');
try {
  execSync('pkill -f "gatsby develop" 2>/dev/null || true', {
    stdio: 'ignore'
  });
  execSync('pkill -f "gatsby.*develop" 2>/dev/null || true', {
    stdio: 'ignore'
  });
  console.log('   ✓ Processus Gatsby vérifiés');
} catch (error) {
  // Ignorer les erreurs si aucun processus n'existe
}

console.log(
  '\n✅ Vérification terminée! Vous pouvez maintenant lancer npm run develop\n'
);
