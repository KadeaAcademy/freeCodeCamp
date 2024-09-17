import { courseDescriptions } from './ajax';

export function convertTime(timeInput: string | number): string {
  let totalMinutes: number;

  if (typeof timeInput === 'string' && timeInput.includes(':')) {
    // Si le temps est donné sous forme de chaîne de caractères avec un format "HH:mm"
    const [hours, minutes] = timeInput.split(':').map(Number);
    totalMinutes = hours * 60 + minutes;
  } else {
    // Si le temps est donné sous forme de nombre
    if (typeof timeInput === 'number') {
      totalMinutes =
        timeInput < 1 ? Math.round(timeInput * 60) : timeInput * 60;
    } else {
      // Si le temps est donné sous forme de chaîne de caractères représentant un nombre
      const value = parseFloat(timeInput);
      totalMinutes = value < 1 ? Math.round(value * 60) : value * 60;
    }
  }
  if (totalMinutes < 1) {
    return `< 1 minute`;
  } else if (totalMinutes < 60) {
    return `${totalMinutes} minutes`;
  }

  // Calculer les heures et les minutes restantes
  const hours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  if (remainingMinutes === 0) {
    return `${hours} heure${hours > 1 ? 's' : ''}`;
  } else {
    return `${hours} heure${hours > 1 ? 's' : ''} ${remainingMinutes} minutes`;
  }
}

interface PaginationResult<T> {
  paginatedData: T[];
  totalPages: number;
  currentPage: number;
}

export function paginate<T>(
  data: T[],
  currentPage: number,
  itemsPerPage = 12
): PaginationResult<T> {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (currentPage > totalPages) {
    currentPage = totalPages;
  } else if (currentPage < 1) {
    currentPage = 1;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data.slice(startIndex, endIndex);

  return {
    paginatedData,
    totalPages,
    currentPage
  };
}

// const { paginatedData, totalPages, currentPage: page } = paginate(data, currentPage);

export function convertTimestampToTime(timestamp: number) {
  // Convertir le timestamp en millisecondes
  const date = new Date(timestamp * 1000);
  // Obtenir les heures et les minutes
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  // Formater les heures et les minutes pour toujours afficher deux chiffres
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  // Retourner le temps formaté
  if (parseInt(formattedHours) < 1) {
    if (parseInt(formattedMinutes) < 1) {
      return `> 1 minutes`;
    }
    return `${formattedMinutes} minutes`;
  } else if (parseInt(formattedHours) > 1) {
    if (parseInt(formattedMinutes) < 1) {
      return `${formattedHours}h `;
    }
    return `${formattedHours}h ${formattedMinutes} minutes`;
  }

  return `${formattedHours}h ${formattedMinutes} minutes`;
}

export function convertTimestampToHours(timestamp: number): number {
  // Convertir le timestamp en millisec
  const date = new Date(timestamp * 1000);
  // le temps que j'ai trouvé je le met en heure
  const hours = date.getUTCHours();
  return hours;
}

export function getCategoryDescription(title: string): string | undefined {
  const lowerCaseTitle = title.toLocaleLowerCase();

  if (lowerCaseTitle.includes('programmation')) {
    return courseDescriptions.Développement.description;
  } else if (lowerCaseTitle.includes('bureautique')) {
    return courseDescriptions.Bureautique.description;
  } else if (lowerCaseTitle.includes('artificielle')) {
    return courseDescriptions.artificielle.description;
  } else if (lowerCaseTitle.includes('amazon')) {
    return courseDescriptions.amazon.description;
  } else if (lowerCaseTitle.includes('marketing')) {
    return courseDescriptions.Marketing.description;
  }

  return '';
}

//fonction permettant d'ajouter les query string sur un url

/**
 * Ajoute, met à jour ou supprime un paramètre de requête dans l'URL.
 * @param key La clé du paramètre de requête.
 * @param value La valeur à ajouter ou supprimer du paramètre.
 */
export function AddFilterQueryString(key: string, value: string) {
  // Vérifier si le code s'exécute dans un navigateur
  if (typeof window === 'undefined') {
    return;
  }

  // Obtenir l'URL actuelle et initialiser URLSearchParams
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);

  const searchParams = new URLSearchParams(url.search);

  // Récupérer les valeurs existantes pour la clé donnée, sous forme de tableau
  const existingValues = searchParams.get(key)?.split(',') || [];

  // Logique pour gérer l'ajout ou la suppression de la valeur
  if (value === '') {
    // Si la valeur est vide, supprimer la clé seulement si des valeurs existent
    if (existingValues.length > 0) {
      searchParams.delete(key);
    }
  } else if (existingValues.includes(value)) {
    // Si la valeur existe, la supprimer
    const filteredValues = existingValues.filter(v => v !== value);

    // Mettre à jour la clé avec les valeurs restantes ou supprimer si vide
    if (filteredValues.length === 0) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, filteredValues.join(','));
    }
  } else {
    // Si la valeur n'existe pas, l'ajouter aux valeurs existantes
    existingValues.push(value);
    searchParams.set(key, existingValues.join(','));
  }

  // Construire la nouvelle URL
  // Construire la nouvelle URL si les searchParams existent, sinon juste le pathname
  const newUrl = searchParams.toString()
    ? `${window.location.pathname}?${searchParams.toString()}`
    : window.location.pathname;

  // Mettre à jour l'URL sans recharger la page
  window.history.replaceState(null, '', newUrl);
}

//fonction permettant de retourner le temps par minutes afin de permettre le filtre
export function convertTimeForFilter(timeInput: string | number): number {
  let totalMinutes: number;

  if (typeof timeInput === 'string' && timeInput.includes(':')) {
    // Si le temps est donné sous forme de chaîne de caractères avec un format "HH:mm"
    const [hours, minutes] = timeInput.split(':').map(Number);
    totalMinutes = hours * 60 + minutes;
  } else {
    // Si le temps est donné sous forme de nombre
    if (typeof timeInput === 'number') {
      totalMinutes =
        timeInput < 1 ? Math.round(timeInput * 60) : timeInput * 60;
    } else {
      // Si le temps est donné sous forme de chaîne de caractères représentant un nombre
      const value = parseFloat(timeInput);
      totalMinutes = value < 1 ? Math.round(value * 60) : value * 60;
    }
  }

  return totalMinutes;
}

//formatage des descriptions RAven

// export function formatDescription(description: string) {
//   let cleanedDescription = description
//     .replace(/\n+/g, ' ') // Remplace tous les retours à la ligne par un espace simple
//     .replace(/\s{2,}/g, ' ') // Réduit les espaces multiples à un seul espace
//     .replace(/ {6,}/g, match => ' '.repeat(match.length % 5)) // Remplace les espaces de plus de 5 caractères par un seul espace
//     .trim();

//   if (cleanedDescription.length > 120) {
//     cleanedDescription = cleanedDescription.substring(0, 120).trim() + '...';
//   }

//   return cleanedDescription;
// }

export function formatDescription(inputText: string) {
  const cleanedText = inputText.replace('<p>&nbsp;</p>', '');
  if (cleanedText.length > 130) {
    return cleanedText.slice(0, 130) + '...';
  }
  console.log(cleanedText);

  return cleanedText;
}
