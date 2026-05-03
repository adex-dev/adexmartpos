export function parseUser(user: any) {
  if (!user) {
    return {
      message: 'Keys tidak terbaca silakan login ulang.',
      status: false,
    };
  }

  return Array.isArray(user) ? user[0] : user;
}
export function parseStore(storeContext: any) {
  if (!storeContext) {
    return {
      message: 'Keys tidak terbaca silakan login ulang.',
      status: false,
    };
  }

  return Array.isArray(storeContext) ? storeContext[0] : storeContext;
}

export  function DataLogin() {
  const rawUser = sessionStorage.getItem('user');
  if (!rawUser) {
    return {
      message: 'Keys tidak terbaca silakan login ulang.',
      status: false,
    };
  } else {
    try {
      const parsed = JSON.parse(rawUser);
      return Array.isArray(parsed) ? parsed[0] : parsed;
    } catch (error) {
      return {
        message: 'Keys tidak terbaca silakan login ulang.',
        status: false,
      };
    }
  }
}
