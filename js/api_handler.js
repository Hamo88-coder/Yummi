

async function getAreas() {
    try {
        const response = await fetch(api_url + area_endpoint + '=list');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getCategories() {
    try {
        const response = await fetch(api_url + categories_endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getIngredients() {
    try {
        const response = await fetch(api_url + ingredients_endpoint + '=list');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        return data.meals;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getMealsByCategory(category) {
    try {
        let response = await fetch(api_url + _filter_endpoint + '?c=' + category)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data.meals)
        return data.meals;
    }
    catch (error) {
        console.error('Error:', error);
    }
}

async function getMealById(mealId) {
    try {
        let response = await fetch(api_url + '/lookup.php?i='+mealId);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data)
        return data.meals[0];
    } catch (error) {

    }
}

async function getMealsByFirstLetter (char){
    try {
        let response = await fetch(api_url + '/search.php?f='+char);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data.meals)
        return data.meals;
    } catch (error) {
        console.error('Error:', error);
    }

}

async function getMealByName (name){
    try {
        let response = await fetch(api_url + '/search.php?s='+name);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data.meals)
        return data.meals;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getIngredientsMeals(ingredient){
    try {
        let response = await fetch(api_url + '/filter.php?i='+ingredient);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data.meals)
        return data.meals;
    } catch (error) {
        console.error('Error:', error);
    }

}