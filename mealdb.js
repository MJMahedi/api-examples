const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // Clear Data
    searchField.value ='';
if(searchText == ''){
    const noMatch1 = document.getElementById('noMatch');
    noMatch1.textContent = '';
    const div = document.createElement('div');
    div.innerHTML =`
    <h2 >Please type any Food Name</h2>
    `;
    noMatch1.appendChild(div);
}else{
  // Load Data 
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.meals))
}
  
};
const displaySearchResult = meals =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
// Not found result message 
if(meals == null){
    const noMatch = document.getElementById('noMatch');
    noMatch.textContent = '';
    const div = document.createElement('div');
    // div.textContent= '';
    div.innerHTML =`
    <h2 >No Food Found</h2>
    <h2> Please Enter Correct keyword !</h2>
    `;
    noMatch.appendChild(div);  
    // console.log('no food found');
}else{
    meals.forEach(meal => {
        // console.log(meal);
        noMatch.textContent = '';
        const div = document.createElement('div');
        // div.textContent = '';
        div.classList.add('col');
        div.innerHTML=`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
            </div>
      </div>
        `;
        searchResult.appendChild(div);
    });

}

   
}
const loadMealDetail = mealId =>{
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]));

}
const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    
    `;
    mealDetails.appendChild(div);
}