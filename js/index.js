$(window).load(function() {
	$("html, body").animate({
		"scrollTop" : 0
	}, 1);
	setTimeout(function() {
		$(".waitUntilLoaded").animate({
			"opacity" : "1"
		}, 1000);
	}, 500);
	$("#invalidEmail").css({
		"width" : $("#emailText").width() + $("#submit").width() + 10
	});
	$("#emailText").bind("focus", function() {
		$("#invalidEmail").animate({
			"opacity" : "0.0"
		}, 150);
	});
	$("#emailForm").bind("submit", function() {
		addEmail();
		return false;
	});
	$(".learnMore").bind("click", function() {
		$("html, body").animate({
			"scrollTop" : $(".infoPage").offset().top + 1
		}, 1000);
	});
	$("#toTop").bind("click", function() {
		$("html, body").animate({
			"scrollTop" : 0
		}, 1000);
	});
	
	$(window).scroll(function() {
		var a = $(".infoPage");
		var pos = $("html, body").css("scrollTop");
		$(".mainPage").css({"top": pos});
		a.css({"top": a.position.top+10});
		console.log("scroll");
		return false;
	});
});

var addEmail = function() {
	var x = $("#emailText").val();
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
		$("#invalidEmail").animate({
			"opacity" : "0.9"
		}, 150);
	} else {
		$("#submit").val("Submitting...").attr("onclick", "");
		/*
		 * This code will be used when we have a server to post requests on to.
		 * 
		 * $.ajax({ "url": "insert server address here", "type": "post", "data": {
		 * "email": x }, "timeout": 5000, "success": function(){
		 * $("#submit").val("Submit").attr("onclick", "addEmail()");
		 * $("#emailText").val(""); $(".description").animate({"opacity":
		 * "0"},500); $(".thankYou").animate({"opacity": "1"},500); }, "error":
		 * function(){ $("#submit").val("Submit").attr("onclick", "addEmail()");
		 * $(".description").animate({"opacity": "0"},500);
		 * $(".failedSubmit").animate({"opacity": "1"},500); } });
		 */
		/* Temp output */
		setTimeout(function() {
			$("#submit").val("Submit").attr("onclick", "addEmail()");
			$("#emailText").val("");
			$(".description").animate({
				"opacity" : "0"
			}, 500);
			$(".thankYou").animate({
				"opacity" : "1"
			}, 500);
		}, 3000);

	}
};
