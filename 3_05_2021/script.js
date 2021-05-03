//Initial Ratings
const ratings = {
    verdemate: 5,
    guarani: 3.5,
    soulmate: 5,
    yaguar: 3,
    pajarito: 3.5
}

// Total Leafs
const leafsTotal = 5;

//Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

//Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

//Init product
let product;

//Product select change
productSelect.addEventListener('change', (e)=>{
    product = e.target.value;
    //Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

//Rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    //Make sure 5 or under
    if(rating > 5){
        alert('Please rate 1 - 5');
        return;
    }

    //Change rating
    ratings[product] = rating;

    getRatings();
});
//Get ratings
function getRatings(){
    for(let rating in ratings){
        //Get percentage
        const leafPercentage = (ratings[rating] / leafsTotal) * 100;

        //Round to nearest 10
        const leafPrecentageRounded = `${Math.round(leafPercentage / 10) * 10}%`;
        
        //Set width of stars-inner to percentage
        document.querySelector(`.${rating} .leafs-inner`).style.width = leafPrecentageRounded;

        //Add number
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}