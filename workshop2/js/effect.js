

$(function() {
    
   
    $(".box").click(function(){
          
    });
        
        
        $(".box, .circle,.triangle").draggable({
		containment : "body",
		cursor : "crosshair",
		revert : "invalid",
		appendTo : "body",
		helper : "clone",
		zindex : 10000
	});
    
	$('#isbox').droppable({
        
		accept : ".box",
		hoverClass : "hovered",
		drop : handleCardDrop
	});

	$('#istriangle').droppable({
		accept : ".triangle",
		hoverClass : "hovered",
		drop : handleCardDrop
	});

    $('#iscircle').droppable({
		accept : ".circle",
		hoverClass : "hovered",
		drop : handleCardDrop
	});
	// $(".ball").sortable({
	// connectWith : "#isball"
	// });
	// $(".notball").sortable({
	// connectWith : "#isnotball"
	// });

	function handleCardDrop(event, ui) {
		ui.draggable.draggable('disable');
        var result;
         
		var dropped = ui.draggable;
		var droppedOn = $(this);
		var count = 0;
		var top = 0;
		if (dropped.hasClass("box")) {
			count = $("#isbox> .box").length;
			top = (count % 2 == 0)? 65: 40;
			$(dropped.context.children[0]).css({
				"max-width": "200%",
				"min-height": "200%",
				"max-height": "200%" 
			});
			$(dropped).detach().css({
				"position" : "absolute",
				"left" : (28 + count*9) + "%",
				"top" : top+"%",
			}).appendTo(droppedOn);
		}
        else if(dropped.hasClass("triangle")) {
			count = $("#istriangle> .triangle").length;
			top = ((count % 2 == 0)? 65: 40 );
			$(dropped.context.children[0]).css({
				"max-width": "200%",
				"min-height": "200%",
				"max-height": "200%"
			});
			
			$(dropped).detach().css({
				"position" : "absolute",
				"left" : (32 + count*5) + "%",
				"top" : top+"%",
			}).appendTo(droppedOn);
		}
        else if(dropped.hasClass("circle")){
            count = $("#iscircle> .circle").length;
			top = ((count % 2 == 0)? 65:40);
            //for checking no of box
            console.log("count:"+count);
            //for checking top value
            console.log("top:"+top);
			$(dropped.context.children[0]).css({
				"max-width": "100%",
				"min-height": "100%",
				"max-height": "100%"
			});
			
			$(dropped).detach().css({
				"position" : "absolute",
				"left" : (20 + count*5) + "%",
				"top" : top+"%",
			}).appendTo(droppedOn);
        }
        

        result=$("#iscircle>.circle").length+
            $("#isbox>.box").length +
            $("#istriangle>.triangle").length ;
        
        //for no of correct ans
        console.log("result:"+result);
        if(result==12){
            alert("You Win !!!");
            
            
        }
	}

});

