jQuery(document).ready(function($) {
    $("#switchmode").change(function () {
        if (this.checked) {
            console.log('checked');
            $("section").addClass("dark");
            $('.body-container').attr('style', 'background: #191919 !important');
            $(".my-icon img.dark").show();
            $(".my-icon img.light").hide();

        } else if (!this.checked) {
            $("section").removeClass("dark");
            $('.body-container').attr('style', 'background: #F6F7FF !important');
            $(".my-icon img.dark").hide();
            $(".my-icon img.light").show();
        }
    });
});