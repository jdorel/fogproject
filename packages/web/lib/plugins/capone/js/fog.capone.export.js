(function($) {
    var exportTable = $('#capone-export-table').registerTable(null, {
        buttons: [
            'copy',
            {
                extend: 'csv',
                header: false
            },
            'excel',
            'print',
            'colvis'
        ],
        order: [
            [0, 'asc']
        ],
        columns: [
            {data: 'imageID'}, // 0
            {data: 'osID'}, // 1
            {data: 'key'} // 2
        ],
        columnDefs: [
            {
                targets: 1,
                visible: false
            }
        ],
        rowId: 'id',
        processing: true,
        serverSide: true,
        ajax: {
            url: '../management/index.php?node='
            + Common.node
            + '&sub=getExportList',
            type: 'post'
        }
    });

    // Enable searching
    if (Common.search && Common.search.length > 0) {
        exportTable.search(Common.search).draw();
    }
})(jQuery);