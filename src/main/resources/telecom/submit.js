window.data = [];
$(".jtqd_table2 table tr").each(function(index, eles) {
	if (index != 0) {
		e = [];
		$(eles).find("td").each(function(index, ele) {
			e.push($(ele).text())
		});
		data.push(e);
	}
});
return window.data;