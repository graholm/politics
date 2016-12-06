$.ajax({
  method: "GET",
  url: "https://www.govtrack.us/api/v2/person",
  success: function(data) {  
    
    data.objects.forEach(function(object) {
      console.log(object)
    })
  }
})

var arr = []

data.object.forEach = (function(data){
  arr.push(object.firstname)
console.log (object.firstname) })