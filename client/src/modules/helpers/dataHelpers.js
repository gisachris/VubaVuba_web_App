// data fetching algorithms

/* categories explained
c = categories
a = area
i = ingredients //was removed due to large api resource consumption
g = glasses
a = alcoholic
*/


//food fetching algorithms
const retrievedItemFilterSorting = (filters, keyword) => {
  const arr = filters[keyword].map(obj => Object.values(obj)).flat()
  return arr
}

const filterCleanup = (filter) => {
  if(filter.includes(' ')) {
    return filter.replace(/ /g, '_')
  }
  return filter  
}

const foodFiltersFetching = async () => {
  const filterslist = {
    'c': 'Categories',
    'a': 'Areas',
  }
  const filterKeys = Object.keys(filterslist)

  const allFilters = []
  //fetch all the different filters for drinks
  for(let i = 0; i < filterKeys.length; i++){
    try {
      const request = await fetch(`${process.env.FOOD_LIST_API_URL}?${filterKeys[i]}=list`)
      
      if(request.ok) {
        const response = await request.json()
        const name = filterslist[filterKeys[i]]
        const filterKey = filterKeys[i]
        allFilters.push({name: name, filterKey: filterKey, values:  retrievedItemFilterSorting(response, 'meals')})
      }
    } catch (error) {
      console.error(error)
    }
  }

  return allFilters
}

const foodsDataFetching = async () => {
  const allFoods = []
  try {
    const foodFilters = await foodFiltersFetching() // [{name, filterKey, values}]
    for(let k = 0; k < foodFilters.length; k++) {
      for(let q = 0; q < foodFilters[k].values.length; q++) {
        const filter = filterCleanup(foodFilters[k].values[q])
        const request = await fetch(`${process.env.FOOD_FILTER_API_URL}?${foodFilters[k].filterKey}=${filter}`)
        if(request.ok) {
          const response = await request.json()
          allFoods.push({category: foodFilters[k].values[q], meals: [...response.meals]})
        }
      }
    }
    return allFoods;
  } catch (error) {
    console.error(error)
  } 
}

//drinks fetching algorithms
const drinksFiltersFetching = async () => {
  const filterslist = {
    'c': 'Categories',
    'g': 'Glasses',
    'a': 'Alcoholic',
  }
  const filterKeys = Object.keys(filterslist)

  const allFilters = []
  //fetch all the different filters for drinks
  for(let i = 0; i < filterKeys.length; i++){
    try {
      const request = await fetch(`${process.env.DRINKS_LIST_API_URL}?${filterKeys[i]}=list`)
      
      if(request.ok) {
        const response = await request.json()
        const name = filterslist[filterKeys[i]]
        const filterKey = filterKeys[i]
        allFilters.push({name: name, filterKey: filterKey, values:  retrievedItemFilterSorting(response, 'drinks')})
      }
    } catch (error) {
      console.error(error)
    }
  }

  return allFilters
}

const drinksDataFetching = async () => {
  const allDrinks = []
  try {
    const drinkFilters = await drinksFiltersFetching() // [{name, filterKey, values}]
    for(let k = 0; k < drinkFilters.length; k++) {
      for(let q = 0; q < drinkFilters[k].values.length; q++) {
        const filter = filterCleanup(drinkFilters[k].values[q])
        const request = await fetch(`${process.env.DRINKS_FILTER_API_URL}?${drinkFilters[k].filterKey}=${filter}`)
        if(request.ok) {
          const response = await request.json()
          allDrinks.push({category: drinkFilters[k].values[q], drinks: [...response.drinks]})
        }
      }
    }
    return allDrinks;    
  } catch (error) {
    console.error(error)
  }
}

export default async function datafetch() {
  const allDrinks = await drinksDataFetching()
  const allFoods = await foodsDataFetching()

  console.log(allDrinks, allFoods);
}