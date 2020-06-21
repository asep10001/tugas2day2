$("#animasi").on('click', function() {
 	$(this).toggleClass('bounceInScale');
    // alert('ouch!!!')
    });


var $elem = $('.thing');

MotionUI.animateIn($elem, 'slide-in-left', function() {
  console.log('Transition finished!');
});


merubahInput("input#nama", "span#nama");


merubahInput("input#perusahaan", "div#perusahaan");
$('button#send').on('click', function(){
// Check name input
    if ($("#name").val() === "") {
			alert("Form Name harus di isi");
	}

// Check email input
    if ($("#email").val() === "") {
      alert("Form Email harus di isi");
     } 

// Check message textarea
    if ($("#message").val() === "") {
   		alert("Form Message harus di isi");
    }

    if($("#message").val() !== "" && $("#email").val() !== "" && $("#name").val() !== ""){
   		alert("Terimaksih!!!");
    }
});

	function simpanPerusahaan(value){	
		var perusahaan = value;

		localStorage.setItem('perusahaan', perusahaan);
	};

	function merubahInput(elem1, elem2){
		$(elem1).keypress(function(event){
				if(event.which===13){
					var text = document.querySelector(elem1).value;
					$(elem1).remove();

					$(elem2).append(text);
					simpanPerusahaan(text);

					if(elem1 === "input#perusahaan"){
						$(elem2).addClass('dekorasiInputPerusahaan dekorasiInputNama flyInBottom');
					}else{
						$(elem2).addClass('dekorasiInputNama flipInRight');
					}
				}
			}
	)};