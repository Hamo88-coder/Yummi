
function closeSideNav() {
    $('.side-nav-menu').css('left', '-250px');
}

function displayAreas() {
    $('#rawData').html('');
    $('.loader').css('display', 'block');
    getAreas().then(response => {
        let list = response.meals;
        list.forEach(element => {
            console.log(element)
            $('#rawData').append(" <div class='meal-card m-2'>" + element.strArea + " </div> ")
        });
    })
    $('.loader').css('display', 'none');
}

function displayCategories() {
    getCategories().then(response => {
        $('#rawData').html('');
        $('.loader').css('display', 'block');
        console.log(response.categories);
        let list = response.categories;
        list.forEach(element => {
            console.log(element)
            $('#rawData').append(`
                    <div class="col-md-3">
                    <div onclick="getCategoryMeals('`+ element.strCategory + `')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="`+ element.strCategoryThumb + `" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>`+ element.strCategory + `</h3>
                        <p>`+ element.strCategoryDescription + `.[1]</p>
                    </div>
                    </div>
                    </div>
                    `)
        });
    })
    $('.loader').css('display', 'none');
}

function displayMeals(meals) {
    $('#rawData').text('');
    $('.loader').css('display', 'block');
    meals.forEach(meal => {
        $('#rawData').append(`
                    <div class="col-md-3">
                    <div onclick="displayMealDetails('`+ meal.idMeal + `')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="`+ meal.strMealThumb + `" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>`+ meal.strMeal + `</h3>
                        <p>`+ meal.strInstructions + `.</p>
                    </div>
                    </div>
                    </div>
                    `)
    });
    $('loader').css('display', 'none');
}

function displayIngredientsList(ingredients) {
    $('#rawData').html('');
    $('.loader').css('display', 'block');
    ingredients.forEach(ingredient => {
        $('#rawData').append(`
        <div class="col-md-3">
                <div onclick="displayIngredientsMeals('`+ ingredient.strIngredient + `')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>`+ ingredient.strIngredient + `</h3>
                        <p class='ingredient-description'>`+ ingredient.strDescription + `</p>
                </div>
        </div>
    `)
    });
    $('.loader').css('display', 'none');
}

function displayIngredients() {
    getIngredients().then((ingredients) => {
        displayIngredientsList(ingredients);
    })
}

function getCategoryMeals(name) {
    getMealsByCategory(name).then((meals) => {
        displayMeals(meals);
    })
}

function displayMealDetails(id) {
    $('.loader').css('display', 'block');
    $('#rawData').text('');
    getMealById(id).then((meal) => {

        let ingredients = ``

        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
            }
        }

        let tags = meal.strTags?.split(",")
        // let tags = meal.strTags.split(",")
        if (!tags) tags = []

        let tagsStr = ''
        for (let i = 0; i < tags.length; i++) {
            tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
        }



        let cartoona = `
    <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

        $('#rawData').append(cartoona);
    });

    $('loader').css('display', 'none');
}

function displayIngredientsMeals(name) {
    getIngredientsMeals(name).then((meals) => {
        displayMeals(meals);
    })
}

function openSearch() {
    $('#search-inputs').css('display', 'block');
}



$(function () {
    $('.open-close-icon').click(function () {
        if ($('.side-nav-menu').css('left') == '0px') {
            $('.side-nav-menu').css('left', '-250px');
        } else {
            $('.side-nav-menu').css('left', '0px');
        }
    })

    $('#firstLetter').on('input', function () {
        getMealsByFirstLetter($(this).val()).then(
            response => displayMeals(response)
        );
    })

    $('#fullname-search').on('input', function () {
        getMealByName($(this).val()).then(
            response => displayMeals(response)
        )
    })



})