import { TUserData } from '../../pages/Actions/Actions.types';
import { extractUserData } from './extractUserData';

export const userDataUpdate = async (
  currentState: TUserData | null,
  formData: FormData,
): Promise<TUserData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!formData) {
        return resolve({
          ...currentState,
          error: 'Form data is incomplete',
        });
      }
      try {
        const data = extractUserData(formData);
        return resolve(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          return resolve({ ...currentState, error: error.message });
        } else {
          return resolve({ ...currentState, error: `Unknown error: ${error}` });
        }
      }
    }, 2000);
  });
};
