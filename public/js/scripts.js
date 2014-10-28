$(document).ready(function() {

//      LOAD HASHTAG PAGE

    var caseopen = "no";
    var scrollLoaded = "no";
    var topmargin = $("#grid").css("margin-top");

    var hash = window.location.hash.substr(1);
	if (hash == "about" || hash == "contact"){
		var toLoad = "pages/" + hash + ".html";
		$('#cases').load(toLoad, function(){
			openCase(0);
			
			toLoad = "#l-" + toLoad.substring(6, toLoad.length-5);
	    	$("div.b_active").animate({backgroundColor: '#f7f7f8'}, 100);
	        $("#l-portfolio, #l-about, #l-contact, #l-inspiration, #b-portfolio, #b-about, #b-contact, #b-inspiration").removeClass();
	        $(toLoad).addClass("active");
	        toLoad = "#b" + toLoad.substring(2);
			$(toLoad).addClass("b_active");
	        hoverEffects();
        });
	}
    hash = hash.substr(6);
    var href = $('#grid a').each(function(){  
        var href = $(this).attr('rel');  
        if(hash==href){  
            var toLoad = "cases/" + hash + '.html';  
            $('#cases').load(toLoad, function(){
                openCase(0);
            });
        }  
    });




//		MENU HOVER EFFECTS		
	
	function addHoverEffects(){
		$("#l-portfolio:not(.active)").hover(
			function () {
				$("#b-portfolio").animate({backgroundColor: '#f0f1f2'}, 300)
		  	},
		  	function () {
		    	$("#b-portfolio").animate({backgroundColor: '#f7f7f8'}, 100)
		  	});
		  
		$("#l-about:not(.active)").hover(
			function () {
				$("#b-about").animate({backgroundColor: '#f0f1f2'}, 300)
			},
			function () {
				$("#b-about").animate({backgroundColor: '#f7f7f8'}, 100)
			});
		  
		$("#l-contact:not(.active)").hover(
			function () {
				$("#b-contact").animate({backgroundColor: '#f0f1f2'}, 300)
			},
			function () {
				$("#b-contact").animate({backgroundColor: '#f7f7f8'}, 100)
			});
		  
		$("#l-inspiration:not(.active)").hover(
			function () {
				$("#b-inspiration").animate({backgroundColor: '#f0f1f2'}, 300)
			},
			function () {
				$("#b-inspiration").animate({backgroundColor: '#f7f7f8'}, 100)
			});
		};
		
	addHoverEffects();
		
		
	function hoverEffects(){
		$("div.b_active").css("background-color", "#f0f1f2");
		
		$("#l-portfolio, #l-about, #l-contact, #l-inspiration").unbind('mouseenter').unbind('mouseleave');
		
		addHoverEffects();
	};
 
 
 

 //		CASES FUNCTIONS
    
    function openCase(scrollTo){
        $('html, body').animate({scrollTop:scrollTo}, 500);
        
        $("#grid").animate({
            marginTop: "2000px",
            opacity: "0.5"
        }, 900, "easeInOutQuart");
        
        $("#cases").delay(900).fadeIn(500);
		
        $("#grid").delay(920).animate({
            marginTop: topmargin,
            opacity: "1"
        },200 );
        caseopen = "yes";
    }
	
    function gridCaseOpen(){
        $("#grid").animate({
            marginTop: "2000px",
            opacity: "0.5"
        }, 520, "easeInOutQuart");
    
        $("#grid").delay(570).animate({
            marginTop: topmargin,
            opacity: "1"
        },200 );
    }
    
    function closeCase(scrollTo){
        $('html, body').animate({scrollTop:scrollTo}, 500);
        $("#cases").animate({opacity:"0"}, 500);
        caseopen = "no";
    }
    
    function gotoIndex(){
        $('html, body').animate({scrollTop:0}, 500);
        
        $("#grid").animate({
            marginTop: 2000,
            opacity: "0.5"
        },1 );
        
        $("#cases").fadeOut(500, function(){
            $("#cases").empty();
        });
        
        $("#grid").delay(500).animate({
            marginTop: topmargin,
            opacity: "1"
        }, 1000, "easeInOutQuart");
        
        caseopen = "no"
    } 
     
    



//      NAVIGATION LINKS
    
    $("a.logo, #l-portfolio").click(function(e){
        e.preventDefault();
        window.location.hash = "";
        if(!($("#l-portfolio").hasClass("active"))){
        	$("div.b_active").animate({backgroundColor: '#f7f7f8'}, 100);
	        $("#l-portfolio, #l-about, #l-contact, #l-inspiration, #b-portfolio, #b-about, #b-contact, #b-inspiration").removeClass();
	        $("#l-portfolio").addClass("active");
	        $("#b-portfolio").addClass("b_active");
	        hoverEffects();
        }
        if (caseopen == "yes"){
            gotoIndex();
        }
        else {
            $('html, body').animate({scrollTop:0}, 500);
        }
    })
    
    $("#l-about, #l-contact, #l-inspiration").click(function(e) {
    	e.preventDefault();
    	var loadThis = "#" + $(this).attr("id");
    	var alreadyLoaded = loadThis;
    	if(!($(loadThis).hasClass("active"))){
	    	$("div.b_active").animate({backgroundColor: '#f7f7f8'}, 100);
	        $("#l-portfolio, #l-about, #l-contact, #l-inspiration, #b-portfolio, #b-about, #b-contact, #b-inspiration").removeClass();
	        
	        $(loadThis).addClass("active");
	        loadThis = "#b" + loadThis.substring(2);
			$(loadThis).addClass("b_active");
	        hoverEffects();
    	}
        
        loadThis = loadThis.substring(3);
        window.location.hash = loadThis;
		
		if(loadThis == "inspiration") {
			window.open("http://twitter.com/josephcombs");
		}
		else {
			loadThis = "pages/" + loadThis + ".html";
			if(caseopen == "yes"){
				closeCase(0);
				caseopen = "yes";
				gridCaseOpen();
				setTimeout(function() {
	                $("#cases").load(loadThis, function(){
	                    $("#cases").animate({opacity:"1"}, 500);
	                });
	            },550);
			}
			else {
				
				setTimeout(function() {
					$("#cases").load(loadThis, function(){
	                    openCase(0);
	                    $("#cases").animate({opacity:"1"}, 500);
	                    caseopen = "yes";
	                });
	            },550);
			}
		}
    })
    
    
    
    $("a.caselink").click(function(e) {
        e.preventDefault();
        var loadThis = $(this).attr('rel');
        loadThis = "cases/" + loadThis + ".html";
        if(!($("#l-portfolio").hasClass("active"))){
        	$("div.b_active").animate({backgroundColor: '#f7f7f8'}, 100);
	        $("#l-portfolio, #l-about, #l-contact, #l-inspiration, #b-portfolio, #b-about, #b-contact, #b-inspiration").removeClass();
	        $("#l-portfolio").addClass("active");
	        $("#b-portfolio").addClass("b_active");
	        hoverEffects();
        }
        if (caseopen == "yes") {
            closeCase(302);
            caseopen = "yes";
            gridCaseOpen();
            setTimeout(function() {
                loadThis = loadThis + ".html";
                $("#cases").load(loadThis, function(){
                    $("#cases").animate({opacity:"1"}, 500)
                });
            },550);
        }
        else {
            $("#cases").load(loadThis, function(){
                openCase(302);
            });
        }
        loadThis = loadThis.substring(0, loadThis.length-5);
        window.location.hash = loadThis;
        
    });
    
    
    
//      Parallax stuff

    
    function onWindowScroll() {
     // Â  Â var h = $(document).height() - $(window).height();
     // Â  Â var scrollPercent = $(window).scrollTop() / h    
     	// console.log(scrollPercent);     
        var ypos = $(window).scrollTop() / 3.6 - 40;
        $("#description").animate({
            marginTop: ypos,
        },1 );
        
        var scrollTopValue = $(window).scrollTop();
        var tiltGrid = 3 * Math.cos(scrollTopValue / 60 );
        
        $("div.left").css({ WebkitTransform: 'rotate(' + tiltGrid + 'deg)'}).css({ '-moz-transform': 'rotate(' + tiltGrid + 'deg)'}).css({ '-o-transform': 'rotate(' + tiltGrid + 'deg)'}).css({ 'transform': 'rotate(' + tiltGrid + 'deg)'});  
        $("div.right-container").css({ WebkitTransform: 'rotate(' + tiltGrid + 'deg)'}).css({ '-moz-transform': 'rotate(' + tiltGrid + 'deg)'}).css({ '-o-transform': 'rotate(' + tiltGrid + 'deg)'}).css({ 'transform': 'rotate(' + tiltGrid + 'deg)'});  
        
        tiltGrid = -tiltGrid;
        
        $("div.right").css({ WebkitTransform: 'rotate(' + tiltGrid + 'deg)'}).css({ '-moz-transform': 'rotate(' + tiltGrid + 'deg)'}).css({ '-o-transform': 'rotate(' + tiltGrid + 'deg)'}).css({ 'transform': 'rotate(' + tiltGrid + 'deg)'});  
        $("div.left-container").css({ WebkitTransform: 'rotate(' + tiltGrid + 'deg)'}).css({ '-moz-transform': 'rotate(' + tiltGrid + 'deg)'}).css({ '-o-transform': 'rotate(' + tiltGrid + 'deg)'}).css({ 'transform': 'rotate(' + tiltGrid + 'deg)'});  
            
    }
    
    $(window).scroll(onWindowScroll);
 
 }); 
