export const exerciseOptions = {
    method: 'GET',
     headers: {
       
       Authorization: Process.env.acc 

      
     }
  };




export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();


    return data;
}