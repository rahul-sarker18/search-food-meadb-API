const fast =(search)=>{
    const types =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(types)
    .then(res => res.json())
    .then(val => secend(val.meals))
}
const secend=(cards) =>{
    const div =document.getElementById('div');
    div.innerHTML =``;
    cards.forEach(element => {
        const newDiv =document.createElement('div');
        newDiv.classList.add('col');
        console.log(element)
        newDiv.innerHTML =`
            <div class="card">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.strMeal}</h5>
                    <p class="card-text">${element.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `
        div.appendChild(newDiv)
    });
}
fast('a')


document.getElementById('btn').addEventListener('click', function(){
    const inputDiv =document.getElementById('text-input');
    const inputValue =inputDiv.value;
    fast(inputValue);
    inputDiv.value ='';
    
})