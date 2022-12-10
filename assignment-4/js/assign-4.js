var img1 = document.querySelector('#imgcontainer img')



var el = document.getElementsByClassName('display');
for (var i = 0; i < el.length; i++) {
  el[i].addEventListener('click', function (e) {
    img1.src = e.target.src;
    
    
    var a=el[0]
      while(a){
        if(a.tagName==='DIV'){
          a.classList.remove('bak');
        }
        a=a.nextSibling;
      }
      this.classList.add('bak');
  })
}


// $(document).ready(function() {
//   $('#preview').click(function() {
//     $('.display').removeClass('bak');
//   })
 
// })

// var el=document.getElementsByClassName('display');
// console.log(el[0])
//   for(i=0;i<el.length;i++){
//     el[i].classList.remove('bak');
//   }

// $(document).ready(function () {
//   for (j = 0; j < 6; j++) {
//     $('.display:eq(j)').click(function () {
//       $('.display:eq(j)').addClass('bak');
//     })
//   }
// })


//to reverse array
arr1=[4,5,6,7,8,1,3,5,8,7];
var k=0;
var l=arr1.length-1;
while(k<l){
  var temp=arr1[k];
  arr1[k]=arr1[l];
  arr1[l]=temp;
  k++;
  l--;
  
}
console.log(arr1)


