$(document).ready(function () {
   
    

    $('#DNtable').DataTable({
        "bSort": false
        //"order": [[8, "desc"]]
    });

    //$('#DNtable tfoot th').each(function () {
    //    var title = $(this).text();
    //    $(this).html('<input type="text" placeholder="Lọc ' + title + '" />');
    //});

    var table = $('#DNtable').DataTable();

    table.columns().every(function () {
        var that = this;

        $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });

    $('#DNtable tfoot tr').appendTo('#DNtable thead');

});


$(window).on('load', function () {
  
    $('.datepicker').datepicker({
        format: 'dd/mm/yy',
        startDate: '-3d'
    });
    
    $('#dayfrom').datepicker({
        format: 'dd/mm/yyyy',
        startDate: '-3d'
    });

    $('#dayto').datepicker({
        format: 'dd/mm/yyyy',
        startDate: '-3d'
    });

});

function tableToExcel() {
    $("#DNtablebody").empty();
    $("#exportcsv").attr("disabled", true);
    var dayfrom = $('#dayfrom').val();
    var dayto = $('#dayto').val();
    $.ajax({
        method: "POST",
        data: { dayfrom: dayfrom, dayto: dayto },
        url: "/Home/JsonDN/"
    })
    .done(function (data) {
        response = $.parseJSON(data);
        $.each(response, function (i, item) {
            var $tr = $('<tr>').append(
                $('<td>').text(item.TenNguoiLienHe),
                $('<td>').text(item.Email),
                $('<td>').text("'" + item.DienThoai + "'"),
                $('<td>').text(item.TenDoanhNghiep),
                $('<td>').text(item.LoaiDoanhNghiep),
                $('<td>').text("'" + item.MaSoThue + "'"),
                $('<td>').text(item.TienVay),
                $('<td>').text(item.LoaiTaiSan),
                $('<td>').text(item.NgayDangKiStr),
                $('<td>').text(item.Source),
                $('<td>').text(item.utm_sourse),
                $('<td>').text(item.utm_medium),
                $('<td>').text(item.utm_campaign),
                $('<td>').text(item.utm_content)
            ).appendTo('#DNtablebody');
        });

        //var uri = 'data:application/vnd.ms-excel;base64,'
        //    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        //    , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        //    , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) };
        
        //var table = document.getElementById("DNtableajax");
        //var ctx = { worksheet: "worksheet" || 'Worksheet', table: table.innerHTML };
        //window.location.href = uri + base64(format(template, ctx));
        $("#exportcsv").removeAttr("disabled");
        $("#DNtableajax").tableToCSV();
   
    });
}