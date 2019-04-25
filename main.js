$(document).ready(function () {

     	// Change the title text when leaving the tab
		$(function() {
			     // Get page title
				var pageTitle = $("title").text();

			// Change page title on blur
			$(window).blur(function() {
				$("title").text("{ Your next Front-End developer }");
			});

			// Change page title back on focus
			$(window).focus(function() {
				$("title").text(pageTitle);
			});
		});


		// Fade in elements

		$(function() {
			$("#fade-in-hi").delay(1000).fadeIn();
			$("#fade-in-anatoly").delay(2000).fadeIn();
			$("#fade-in-dev").delay(3500).fadeIn();
			$("#fade-in-projects-title").delay(5500).fadeIn();

			$("#fade-in-project-2").delay(7000).animate({ opacity: 1 }, 3500);
			$("#fade-in-project-1").delay(9000).animate({ opacity: 1 }, 3500);

			$("#fade-in-about").delay(13000).fadeIn();
			$("#fade-in-more-projects").delay(15000).fadeIn();
			$("#fade-in-resume").delay(16000).fadeIn();
		});


		// Letters of the name changing upon hovering

		// #2E00E6 => Purple
		// #337F77 => Green
		// #0039CC => Blue

		// A
		$("#capital-a").on("mouseover", function() {
			$(this).css("color", "#2E00E6"); // #2E00E6 => Purple
			$("#capital-a").on("mouseleave", function() {
				$(this).css("color", "black");
			});
		});

				// n
				$("#n").on("mouseover", function() {
					$(this).css("color", "#337F77"); // #337F77 => Green
					$("#n").on("mouseleave", function() {
						$(this).css("color", "black");
					});
				});

						// a
		$("#a").on("mouseover", function() {
			$(this).css("color", "#0039CC"); // #0039CC => Blue
			$("#a").on("mouseleave", function() {
				$(this).css("color", "black");
			});
		});

				// t
				$("#t").on("mouseover", function() {
					$(this).css("color", "#2E00E6"); // #2E00E6 => Purple
					$("#t").on("mouseleave", function() {
						$(this).css("color", "black");
					});
				});

						// o
		$("#o").on("mouseover", function() {
			$(this).css("color", "#337F77"); // #337F77 => Green
			$("#o").on("mouseleave", function() {
				$(this).css("color", "black");
			});
		});

				// l
				$("#l").on("mouseover", function() {
					$(this).css("color", "#0039CC"); // #0039CC => Blue
					$("#l").on("mouseleave", function() {
						$(this).css("color", "black");
					});
				});

						// y
		$("#y").on("mouseover", function() {
			$(this).css("color", "#2E00E6"); // #2E00E6 => Purple
			$("#y").on("mouseleave", function() {
				$(this).css("color", "black");
			});
		});


});
