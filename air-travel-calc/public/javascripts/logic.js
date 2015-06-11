module.exports = {

  total_expense: function(departure_city, arrival_city, bag_cost, class_cost, wifi_cost, promo_code) {


    if (departure_city === "chicago" && arrival_city === "los_angeles") {
      cost = 350;
    } else if (departure_city === "chicago" && arrival_city === "new_york") {
      cost = 250;
    } else if (departure_city === "los_angeles" && arrival_city === "chicago") {
      cost = 350;
    } else if (departure_city === "los_angeles" && arrival_city === "new_york") {
      cost = 545;
    } else if (departure_city === "new_york" && arrival_city === "chicago") {
      cost = 250;
    } else if (departure_city === "new_york" && arrival_city === "los_angeles") {
      cost = 545;
    } else {
      cost = 0;
    }

    if (promo_code === "10OFF") {
      promo_code = (cost) * 0.1;
    } else if (promo_code === "20OFF") {
      promo_code = (cost) * 0.2;
    } else {
      promo_code = 0;
    }

    if (wifi_cost) {
      wifi_cost = 12;
    } else {
      wifi_cost = 0;
    }

    if (cost === 0) {
      return "You Should probably walk.";
    } else {
      var statement = "Your air fare will be $ "
      return statement + (parseInt(cost) + parseInt(bag_cost) + parseInt(class_cost) + parseInt(wifi_cost) - parseInt(promo_code));
    }
  }
}
