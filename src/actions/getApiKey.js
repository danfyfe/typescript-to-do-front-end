function getApiKey(){
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000/api/v1'
  } else {
    return 'tbd'
  }
};

export default getApiKey()