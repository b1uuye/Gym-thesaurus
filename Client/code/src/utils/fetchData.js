export const exerciseOptions = { //Calling the Exercisedb API from RapidAPI to test if the functions inside other components work
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '62bf9829eemshca76f3f3d8975ecp11abb9jsne3391074e5c1', //THIS is used here for protection against my key as malicious people can do stuff with this
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' //using API as it allows exercises to be outputted much easier without thousands of lines of code
        }
      };
      
export const fetchData = async (url, options) => {
  const response = await fetch(url,options);
  const data = await response.json();
    
  return data;
}
