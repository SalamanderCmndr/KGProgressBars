var KGPInterval;

$(function(){
	initKGP();
});

function initKGP(){
	KGPInterval = setInterval(function(){
		initKGPLeftColumn();
	}, 100);
}

function initKGPLeftColumn(){

	var $column = $('#leftColumnViewport');
	var $rows = $column.find('.res-row');

	$rows.each(function(index, item){

		var $row = $(item);
		
		// #5
		if(!$row.hasClass('resource_kittens')){

			var maxAmount = getAmountLeftColumn($row.find('.maxRes'));

			var currentAmount = getAmountLeftColumn($row.find('.resAmount'));

			if(maxAmount > 0 && currentAmount > 0)
			{
				var percentage = (100 * currentAmount) / maxAmount;// #1

				$row.css('background-repeat', 'no-repeat');
				$row.css('background-position', 'bottom left');
				$row.css('background-size', percentage + '% 1px');// #3

				if(percentage > 95)
				{
					$row.css('background-image', 'linear-gradient(0, red, red)');
				}
				else if(percentage > 75)
				{
                        	        $row.css('background-image', 'linear-gradient(0, orange, orange)');
	                        }
        	                else
                	        {
                        	        $row.css('background-image', 'linear-gradient(0, green, green)');
	                        }
			}
		}
	});
}

function getAmountLeftColumn($cell){
	if($cell.length === 0)
		return 0;

	var cellContent = $cell.text().replace('/', '');

	return getAmountFromFormatted(cellContent);
}

function getAmountFromFormatted(formatted){
	var unit = formatted.slice(-1);

	var noUnit = !isNaN(Number(unit));// #4

	var amount = noUnit ? Number(formatted) : Number(formatted.substring(0, formatted.length - 1));

	if(noUnit)
		return amount;
	
	switch(unit){
		case 'K':
			return amount*1000;
		case 'M':
			return amount*1000000;
		case 'G':
		    return amount*1000000000;
		case 'T':
		    return amount*1000000000000;
		case 'P':
		    return amount*1000000000000000;
		case 'E':
		    return amount*1000000000000000000;			
		case 'Z':
		    return amount*1000000000000000000000;	
		case 'Y':
		    return amount*1000000000000000000000000;
		case 'U':
		    return amount*1000000000000000000000000000;
		case 'S':
		    return amount*1000000000000000000000000000000;
		case 'H':
		    return amount*1000000000000000000000000000000000;
		case 'F':
		    return amount*1000000000000000000000000000000000000;
		case 'L':
		    return amount*1000000000000000000000000000000000000000;
		case 'W':
		    return amount*1000000000000000000000000000000000000000000;
		case 'Q':
		    return amount*1000000000000000000000000000000000000000000000;			
		default:
			return 0;
	}
}
