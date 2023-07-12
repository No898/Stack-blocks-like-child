
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '3ec46a6901msh0ee92eb7127114fp1dfc39jsn32b9821c1aa3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

      const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers
      });

      const result = await response.json()

      return result
}