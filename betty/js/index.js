var ballHeight = 400;
var ballWidth = 400;
var ballRadius = 400;
var docWidth = window.innerWidth;

$(document).ready(function() {
	$('#hbPage').hide();

	//align verticle center
	$("#ballBtn").css('margin-top', $(document).height()/2-$("#ballBtn").height()/2);
	console.log(docWidth);


	$('#ballBtn').click(function () {
		ballHeight += 50;
		ballWidth += 50;
		ballRadius += 50;

		$("#ballBtn").css('height', ballHeight+'px');
		$("#ballBtn").css('width', ballHeight+'px');
		$("#ballBtn").css('border-radius', ballRadius+'px');
		$("#ballBtn").css('margin-top', $(document).height()/2-$("#ballBtn").height()/2);

		if ((docWidth/2-$("#ballBtn").width()/2)<=0) {
			$('#gamePage').hide();
			$("#hbPage").show();
		}
	});


});
