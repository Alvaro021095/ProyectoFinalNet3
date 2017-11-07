var options = {

    url: function (phrase) {
        return "api/countrySearch.php";
    },

    getValue: function (element) {
        return element.name;
    },

    ajaxSettings: {
        dataType: "json",
        method: "POST",
        data: {
            dataType: "json"
        }
    },

    preparePostData: function (data) {
        data.phrase = $("#example-ajax-post").val();
        return data;
    },

    requestDelay: 400
};

$("#example-ajax-post").easyAutocomplete(options);