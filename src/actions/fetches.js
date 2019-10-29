import getApiKey from './getApiKey'

export async function getToDos(){
  let response = await fetch(`${getApiKey}/toDos`,{
    method:'GET'
  })
  let json = await response.json()
  return json
};

