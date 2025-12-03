const { ESLint } = require('eslint');

const cli = new ESLint();

// This lets us abort if we've already run a stage for all files
const completedStages = new Set();

// if a lot of files are changed, it's faster to run prettier/eslint on the
// whole project than to run them on each file separately
module.exports = {
  '*.(js|ts|tsx)': async files => {
    if (completedStages.has('js')) return [];

    const ignoredIds = await Promise.all(
      files.map(file => cli.isPathIgnored(file))
    );
    const lintableFiles = files.filter((_, i) => !ignoredIds[i]);
    // Always lint only the staged files, not the entire project
    if (lintableFiles.length > 0) {
      completedStages.add('js');
      return [
        'eslint --max-warnings=0 --cache --fix ' + lintableFiles.join(' '),
        ...files.map(filename => `prettier --write '${filename}'`)
      ];
    } else {
      return files.map(filename => `prettier --write '${filename}'`);
    }
  },
  '*.!(js|ts|tsx)': files => {
    if (completedStages.has('not-js')) return [];

    if (files.length > 10) {
      completedStages.add('not-js');
      return 'prettier --write .';
    } else {
      return files.map(
        filename => `prettier --write --ignore-unknown '${filename}'`
      );
    }
  },

  './curriculum/challenges/**/*.md': files => {
    if (completedStages.has('markdown')) return [];

    if (files.length > 10) {
      completedStages.add('markdown');
      return 'npm run lint:challenges';
    } else {
      return files.map(
        filename => `node ./tools/scripts/lint/index.js '${filename}'`
      );
    }
  }
};
