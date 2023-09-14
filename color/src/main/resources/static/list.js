$(function(){
  $.ajax({
    url:'/histories_api',
    success:function(data) {
    	for (let i = 0; i < data.length; i++) {
            let row = data[i];
            let tr = $('<tr></tr>');
            tr.append('<td>' + row['idx'] + '</td>');
            tr.append('<td>' + row['code'] + '</td>');
            tr.append('<td>' + row['created'] + '</td>');
            $('.list tbody').append(tr);
            tr.css('background-color', row['code']);
        }
    }
  });
});
