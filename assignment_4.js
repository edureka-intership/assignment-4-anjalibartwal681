ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]   


//Calculate the Average rating for all the restaurants.
    let modified= [];
    for (let item of ratingData) {
      
        if (!modified[item.restaurant]) {  
            modified[item.restaurant] = {                 
                newRating: item.rating,
                count: 1
            };
        }  
         else {
            modified[item.restaurant].newRating = modified[item.restaurant].newRating+ item.rating;
            modified[item.restaurant].count++;
            
         }
    }
    let averageData = [];
    for (let x of Object.keys(modified)) {
        averageData.push({
            restaurant: x,
            averageRating: modified[x].newRating / modified[x].count
        });
    }
    
    console.log( averageData);

 
// Filtering the restaurants with averageRating more than or equal to 4

    let goodRestaurant=averageData.filter(averageData =>averageData.averageRating>=4)
    console.log(goodRestaurant)