const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    /* console.log(searchText) */
    searchField.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    /* console.log(url) */
    fetch(url)
        .then(reponse => reponse.json())
        .then(data => displaySearchResult(data.meals))

}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = '';

    meals.forEach(meal => {
        /* console.log(meal) */
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div onclick="loadmealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div)


    });
}
const loadmealDetail = mealId => {
    /*   console.log(mealId) */
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealdetail(data.meals[0]))
}

const displayMealdetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details')
    mealDetails.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDetails.appendChild(div)

}