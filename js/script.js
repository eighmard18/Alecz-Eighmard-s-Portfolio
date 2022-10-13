jQuery(document).ready(function($) {
    $("#switchmode").change(function () {
        if (this.checked) {
            console.log('checked');
            $("section, header, footer, button").addClass("dark");
            $('.body-container').attr('style', 'background: #222C3A !important');
            $(".my-icon img.dark2").show();
            $(".my-icon img.light").hide();

        } else if (!this.checked) {
            $("section, header, footer, button").removeClass("dark");
            $('.body-container').attr('style', 'background: #F6F7FF !important');
            $(".my-icon img.dark2").hide();
            $(".my-icon img.light").show();
        }
    });

    $('.vertical-menu li a').filter(function(){return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')
        $('.vertical-menu li a').click(function(){
            $(this).parent().addClass('active').siblings().removeClass('active')    
        })

    AOS.init(); 
    
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const obj = document.getElementById("value");
    animateValue(obj, 0, 80, 3000);

    const obj2 = document.getElementById("value2");
    animateValue(obj2, 0, 60, 3000);

    const obj3 = document.getElementById("value3");
    animateValue(obj3, 0, 80, 3000);

    const obj4 = document.getElementById("value4");
    animateValue(obj4, 0, 50, 3000);
});