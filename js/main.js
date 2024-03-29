function Translate() { 
	//initialization
	this.init =  function(attribute, lng){
		this.attribute = attribute;
		this.lng = lng;	
	}
	//translate 
	this.process = function(){
		_self = this;
		var xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "/translation/"+this.lng+".json", false);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					var LngObject = JSON.parse(xrhFile.responseText);
					var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key != null) {
							elem.innerHTML = LngObject[key]  ;
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }
}


  function translatePage(tagAttr){
    if(location.hash == '#en'){
        $("#enTranslator").css('color', '#f4623a');
        $("#frTranslator").css('color', '#212529');

        var translate = new Translate();
        translate.init(tagAttr, 'en');
        translate.process();
        $("#about-link").attr("data-hover","About");
        $("#project-link").attr("data-hover","Projects");
        $("#carrer").attr("data-hover","Resume");

        $("#name").attr("placeholder", "Name");
        $("#email").attr("placeholder", "Email");
        $("#name").attr("placeholder", "Name");
        $("#submit").attr("value","Send");

      }
   
}
function sendMessage(sender){
  Email.send({
    Host : "smtp.mailtrap.io",
    Username : "portfolio.dontreply@gmail.com",
    Password : "portfoliooiloftrop123123",
    To : 'abdelhak.anajar@gmail.com',
    From : sender,
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);

}

function showScroll(){
  console.log(document.documentElement.scrollTop);
  if(document.documentElement.scrollTop > 600){
    $("#totop").attr("style", "display:block")
  }
  else $("#totop").attr("style", "display:none")
}

$(document).ready(function () {
  
  

    $('.headlines').attr('data-content','+');
      $(".headlines").click(function(){
        $(this).toggleClass('headlines-active');
        var section = $(this).closest($(".sections"));
        section.toggleClass('select');
        section[0].className.includes('select') ? $(this).attr('data-content','-') : $(this).attr('data-content','+');
        // $(".collapse").not($(this)).removeClass('show');
        // $(".sections").not(section).removeClass('select');
      }
      )

      $(".custom-ul").children('li').not(':last-child').after('<hr>');
      $(".missionList").children('li').css('list-style','square').not(':last-child').after('<br>');

      $('#missions-data').children('h6').css('background-color','rgba(135, 208, 230, 0.186)').css('padding','5px')

       

      // $("#test").click(function(){
      //   setTimeout(() => {
      //     $("#collapsefc2").is(":visible") ? $(this).html("Stage de Formation sur la gouvernance participative et droit de l’homme.") : $(this).html("Stage de Formation sur la gouvernance participative et droit de l’homme.</br>Sessions de Formation sur la pédagogie universitaire.");
      //   }, 500);

      // });

      //This is id of HTML element (English) with attribute lng-tag
        $("#enTranslator").click(function(){
            location.hash = "en";
            translatePage('lng-tag');
        });
        $("#frTranslator").click(function(){
          if(location.hash == "#en"){
            location.hash = '';
            location.reload();
            $("#enTranslator").css('color', '#212529');
            $("#frTranslator").css('color', '#f4623a');
          }
            
        });

        window.onscroll = function() {showScroll()};

        $("#totop").click(function () { 
          document.documentElement.scrollTop = 0;
        });

        $('.owl-carousel-pub').owlCarousel({
          loop: true,
          center: true,
          items: 1,
          margin: 30,
          autoplay: true,
          dots:true,
          nav:true,
          autoplayTimeout: 8500,
          smartSpeed: 450,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']


          // singleItem: false,
          // items: 3,
          // loop:false,
          // margin:10,
          // nav:false,
          // center: true,
          // navigation: true,
          // responsive:{
          //     0:{
          //         items:1
          //     },
          //     600:{
          //         items:2
          //     },
          //     1000:{
          //         items:3
          //     }
          // }
        });
        // $('.owl-carousel-cours').owlCarousel({
        //   loop:true,
        //   margin:10,
        //   nav:true,
        //   center: true,
        //   navigation: false          
        // });
        // $('.owl-carousel-articles').owlCarousel({
        //   loop:true,
        //   margin:10,
        //   nav:true,
        //   center: true,
        //   navigation: false          
        // });
        // $('.owl-carousel-livres').owlCarousel({
        //   loop:true,
        //   margin:10,
        //   nav:true,
        //   center: true,
        //   navigation: false          
        // });

        $("#pubCarousel").css("--bg-image","url('/images/pub.jpg')")
        $("#pub-navitem").click()


        $("#cours-navitem").click(function () { 
          $("#pubCarousel").css("--bg-image","url('/images/cours.jpg')")
          
        });
        $("#pub-navitem").click(function () { 
          $("#pubCarousel").css("--bg-image","url('/images/pub.jpg')")
          
        });
        $("#conference-navitem").click(function () { 
          $("#pubCarousel").css("--bg-image","url('/images/conference.jpg')")
          
        });
        $("#projects-navitem").click(function () { 
          $("#pubCarousel").css("--bg-image","url('/images/projects.jpeg')")
          
        });

        



        
        
    



      // Define the language reload anchors
    //   var language = {
    //     eng: {
    //       welcome:
    //         "Welcome to the GeeksforGeeks " +
    //         "Portal! You can choose any " +
    //         "language using the buttons above!",
    //     },
    //     fr: {
    //       welcome:
    //         "¡Bienvenido al portal GeeksforGeeks! " +
    //         "¡Puedes elegir cualquier idioma usando " +
    //         "los botones de arriba!",
    //     },
    //     hin: {
    //       welcome:
    //         "GeeksforGeeks पोर्टल पर आपका स्वागत है! " +
    //         "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " +
    //         "भाषा को चुन सकते हैं!",
    //     },
    //   };
        
    //   // Check if a hash value exists in the URL
    //   if (window.location.hash) {
        
    //     // Set the content of the webpage
    //     // depending on the hash value
    //     if (window.location.hash == "#eng") {
    //         console.log("page in eng");
    //       siteContent.textContent = language.eng.welcome;
    //     } else if (window.location.hash == "#fr") {
    //         console.log("page in fr");
    //       siteContent.textContent = language.fr.welcome;
    //     }
    //   }
  });
