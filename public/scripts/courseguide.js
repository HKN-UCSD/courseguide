window.onload = function() {
    jQuery.ajax("/courseguides/chartinfo", {success: function(data) {
        //generateChart(data, $("#cs"), 2);
        generateChart(data, $("#ee"), 1);
    
    }});
};
