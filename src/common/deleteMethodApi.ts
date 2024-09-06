export const deleteMethod = async (
  endpoint: string,
  token?: string | undefined,
) => {
  try {
    const response = await fetch(endpoint, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });

    return await response.json();
  } catch (error) {
    console.log('deleteMethod', error);
  }
};
