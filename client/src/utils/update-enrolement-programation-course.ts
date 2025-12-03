import { RequestResponseModel } from '../redux/prop-types';

import { get } from './ajax';

export const updateProgrammationEnrolement = async (courseUrl: string) => {
  try {
    const response: RequestResponseModel = await get(
      `/update-enrolement-kadea?courseUrl=${courseUrl.replace(
        /^http:/,
        'https:'
      )}`
    );

    if (response.success) {
      console.log('✅ Enrollement mis à jour avec succès !');
    } else {
      console.error('⚠️ Erreur:', response.message);
    }
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour de l’enrollement:', error);
  }
};
