$.ajax({
  method: "GET",
  url: "https://www.govtrack.us/api/v2/person",
  success: function(data) {    
    data.objects.forEach(function(object) {
      console.log(object)
    })
  }
})

var = []
arr.push (1)


data.object.forEach = (function(object){
console.log (object.firstname) })