var content = [
	{
		textdata : "This text and images below are generated from handlebars",
		draggableItems:[
			{
				imgClass: "draggableCircle",
				imgSrc: "images/draggables/ball.png"
			},
			{
				imgClass: "draggableRect",
				imgSrc: "images/draggables/book.png"
			},
			{
				imgClass: "draggableRect",
				imgSrc: "images/draggables/bread.png"
			},
			{
				imgClass: "draggableRect",
				imgSrc: "images/draggables/carpet.png"
			},
			{
				imgClass: "draggableCircle",
				imgSrc: "images/draggables/coin.png"
			},
			{
				imgClass: "draggableRect",
				imgSrc: "images/draggables/note.png"
			},
			{
				imgClass: "draggableRect",
				imgSrc: "images/draggables/pictureframe.png"
			},
			{
				imgClass: "draggableCircle",
				imgSrc: "images/draggables/plate.png"
			},
			{
				imgClass: "draggableCircle",
				imgSrc: "images/draggables/roti.png"
			},
			{
				imgClass: "draggableCircle",
				imgSrc: "images/draggables/saleroti.png"
			}
		],
		droppableItems:[
			{
				imgClass: "droppableCircle",
				dragClass: "isCircle",
				imgSrc: "images/droppables/basket01.png"
			},
			{
				imgClass: "droppableRect",
				dragClass: "isRectangle",
				imgSrc: "images/droppables/basket03.png"
			}
		]
	}
];

$(document).ready(function(){	
	//Handlebars code section
	Handlebars.registerPartial("imgContent", $("#imagecontent-partial").html());

	var source = $('#generalTemplate').html();
	var template = Handlebars.compile(source);
	var details = template(content[0]);
	$('#container').append(details);
	//handlebars section finished
	
	$(".draggableCircle, .draggableRect").draggable({
		containment : "#container",	//Constrains dragging to within the bounds of the specified element or region
		cursor : "crosshair",	//cursor while dragging
		revert : "invalid",	//dragged obj is returned to its inital position if not dropped on appropriate droppable
		appendTo : "body",	//detach obj from its current parent and append to new element
		helper : "clone",	//original obj is not affected while it is being dragged
		zindex : 10000	//element with higher zindex is stacked in front
	});

	$('.isCircle').droppable({
		accept: '.draggableCircle',	//Controls which draggable elements are accepted by the droppable
		drop: handleDrop		//triggered when acceptable draggable is dropped on droppable
	});

	$('.isRectangle').droppable({
		accept: '.draggableRect',
		drop: handleDrop
	});
});	

	var countCir = 0;
	var countRec = 0;

function handleDrop(event, ui){
	ui.draggable.draggable('disable');	//i think ui.draggable refers to the obj that was dropped into the basket
	var dropped = ui.draggable;
	var droppedOn = $(this);		//whatever element called this function
	var count;

	if(dropped.hasClass("draggableCircle")) {
		count = $(".isCircle> .draggableCircle").length;
		var topLeft = topLeftCalculator(count);		
						
		$(dropped.context).css({
			"width": "15%",
			"height": "auto",
			"max-height": "50%"
		});
		
		$(dropped).detach().css({
			"position" : "absolute",
			"left" : (topLeft[1]-5) + "%",
			"top" : topLeft[0] - 10 + "%",
		}).appendTo(droppedOn);				
	} 

	else{
		count = $(".isRectangle> .draggableRect").length;
		var topLeft = topLeftCalculator(count);
		
		$(dropped.context).css({
			"width": "14%",
			"height": "auto",
			"max-height": "50%"
		});

		$(dropped).detach().css({
			"position" : "absolute",
			"left" : topLeft[1] + "%",
			"top" : topLeft[0] + 40 + "%",
		}).appendTo(droppedOn);
	}
}

function topLeftCalculator(count){
	var top = count % 3;
	var factor = Math.floor(count / 3);
	var height = 0;
	var left = 0;
	switch(top){
			case 0:
			  height = 20;
			  left = (factor > 0)? ((factor*15)+ 15): 15;
			  break;
			case 1:
			  height = 35;
			  left = (factor > 0)? ((factor*15)+ 15): 15;
			  break;
			case 2:
			  height = 50;
			  left = (factor > 0)? ((factor*15)+ 15): 15;
			  break;
	}
	
	var returnNumber = [height, left];
	return returnNumber;
					
}