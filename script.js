$.ajax({
  method: "GET",
  url: "https://www.govtrack.us/api/v2/person",
  success: function(data) {  
    var arr = []
  
    arr.push(object.firstname)
    console.log (object.firstname) })
  
    data.objects.forEach(function(object) {
      console.log(object)
    })





 