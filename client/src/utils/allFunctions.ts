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
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  } else {
    return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minutes`;
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
      return `${formattedHours}hours `;
    }
    return `${formattedHours}hours ${formattedMinutes} minutes`;
  }

  return `${formattedHours}hours ${formattedMinutes} minutes`;
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
