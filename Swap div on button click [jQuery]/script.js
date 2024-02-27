// Add a click event listener to the swap button so when the user clicks on it, the div styling gets swapped
$('#swapButton').on('click', () => {

    // Toggle classes so if the class exists, it gets removed and if the class doesn't exist, it gets added
   $('#div1').toggleClass('div1')
             .toggleClass('div2')

    $('#div2').toggleClass('div2')
              .toggleClass('div1')
})