jQuery(document).ready(function($) {
    $("#switchmode").change(function () {
        if (this.checked) {
            console.log('checked');
            $("section, header, footer, button").addClass("dark");
            $('.body-container').attr('style', 'background: #454545 !important');
            $(".my-icon img.dark2").show();
            $(".my-icon img.light").hide();

        } else if (!this.checked) {
            $("section, header, footer, button").removeClass("dark");
            $('.body-container').attr('style', 'background: #F6F7FF !important');
            $(".my-icon img.dark2").hide();
            $(".my-icon img.light").show();
        }
    });
});