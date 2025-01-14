
const api_url = 'https://www.themealdb.com/api/json/v1/1';

let _list_file_endpoint = '/list.php';

let categories_endpoint = '/categories.php';

let area_endpoint = _list_file_endpoint+ '?a';

let ingredients_endpoint = _list_file_endpoint + '?i';

let meal_endpoint = _list_file_endpoint + '?m';

let _filter_endpoint = '/filter.php';






/**
 * Search meal by name
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

List all meals by first letter
www.themealdb.com/api/json/v1/1/search.php?f=a

Lookup full meal details by id
www.themealdb.com/api/json/v1/1/lookup.php?i=52772

Lookup a single random meal
www.themealdb.com/api/json/v1/1/random.php

Lookup a selection of 10 random meals (only available to Paypal supporters)
www.themealdb.com/api/json/v1/1/randomselection.php

List all meal categories
www.themealdb.com/api/json/v1/1/categories.php

Latest Meals (only available to Paypal supporters)
www.themealdb.com/api/json/v1/1/latest.php

List all Categories, Area, Ingredients
www.themealdb.com/api/json/v1/1/list.php?c=list
www.themealdb.com/api/json/v1/1/list.php?a=list
www.themealdb.com/api/json/v1/1/list.php?i=list

Filter by main ingredient
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

Filter by Category
www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

Filter by Area
www.themealdb.com/api/json/v1/1/filter.php?a=Canadian


 Images
Meal Thumbnail Images
Add /preview to the end of the meal image URL
/images/media/meals/llcbn01574260722.jpg/preview

Ingredient Thumbnail Images
www.themealdb.com/images/ingredients/Lime.png
www.themealdb.com/images/ingredients/Lime-Small.png
 * 
 */