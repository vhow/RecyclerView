(function () {
    $(document).ready(() => {
        const count = $(".item").length;
        go(count + 1);
    });

    function go(count) {
        const recyclerView = $("#recycler-view").get();
        const recyclerViewHeight = $(recyclerView).outerHeight();

        const firstItem = $(".item").first().get();

        const itemWidth = $(firstItem).outerWidth();
        const itemHeight = $(firstItem).outerHeight();

        const windowWidth = $("#window").outerWidth();

        const timeline = anime.timeline({
            duration: 300,
            easing: "easeInOutQuart"
        });

        console.log(itemHeight)
        console.log(itemWidth)

        timeline
            .add({
                targets: recyclerView,
                translateY: -itemHeight,
                duration: 600
            })
            .add({
                targets: firstItem,
                duration: 600,
                opacity: .5,
                offset: 0
            })
            .add({
                targets: ".item:last-child",
                opacity: 1,
                offset: 0
            })
            .add({
                targets: firstItem,
                translateX: -itemWidth,
            })
            .add({
                targets: firstItem,
                translateX: "+=0",
                translateY: recyclerViewHeight,
            })
            .add({
                targets: firstItem,
                translateX: 0,
                translateY: recyclerViewHeight,
            })
            .add({
                targets: recyclerView,
                translateY: 0,
                begin: () => {
                    $(firstItem)
                        .css({
                            transform: "translate(0, 0)",
                        })
                        .text(count)
                        .appendTo(recyclerView);
                },
                duration: 0,
                complete: () => {
                    go(count + 1);
                }
            });
    }
})();
