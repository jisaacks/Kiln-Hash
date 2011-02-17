$('[id^=changesetList] tr').each(function () {
    var sid = $(this).attr('sid');
	if(sid)
	{
		var rest = '<span class="hashRest" style="display:none;">' + sid.substring(10) + '</span>';
		$(this).find('td span.changesetDescription').append('<span class="csetHash">' + sid.substring(0, 10) + rest + '</span>').css('color','#777');
	}
});
$('.csetHash').hover(
	function(){
		$(this).find('.hashRest').css('display','');
	},
	function(){
		$(this).find('.hashRest').css('display','none');
	}
);