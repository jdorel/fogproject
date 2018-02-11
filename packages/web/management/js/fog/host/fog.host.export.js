(function($) {
    var exportBtn = $('#export'),
        exportForm = $('#export-form'),
        exportModal = $('#exportModal'),
        exportModalConfirm = $('#confirmExportModal'),
        passwordField = $('#exportPassword'),
        cancelExport = $('#closeExportModal');

    function disableButtons(disable) {
        exportBtn.prop('disabled', disable);
    }

    var exportAction = exportForm.prop('action');

    exportForm.submit(function(e) {
        e.preventDefault();
    });

    exportBtn.on('click', function(e) {
        exportBtn.prop('disabled', true);
        Common.processForm(exportForm, function(err) {
            exportBtn.prop('disabled', false);
            if (err)
                return;
            $('<form method="post" action="' + exportForm.prop('action') + '"><input type="hidden" name="nojson"/></form>').appendTo('body').submit().remove();
        });
    });

})(jQuery);