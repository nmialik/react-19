import { TUserData } from '../../pages/Actions/Actions.types';

export const extractUserData = (formData: FormData): TUserData => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;

  if (!firstName || !lastName || !email) {
    throw new Error('Incomplete form data');
  }

  return { firstName, lastName, email };
};
