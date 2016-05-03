var main = function() {
    "use strict";

    var addCommentFromInputBox = function() {
        if ($(".comment-input input").val() !== "") {
            vm.commentArray.push($(".comment-input input").val());
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function(event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

    var vm = {
        commentArray: ko.observableArray()
    };
    ko.applyBindings(vm);
};

$(document).ready(main);
