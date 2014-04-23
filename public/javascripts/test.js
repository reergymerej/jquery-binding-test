var test = function ($) {

    console.log('\ntesting version ' + $.fn.jquery);

    var testWithAppendTo = function (x) {
    
        // bind to document
        var eventName = 'foo',
            $el,
            html = '<div>some html</div>',
            wasTriggered = false;

        var printWasTriggered = function () {
            if (wasTriggered) {
                console.log('\t\thooray!');
            }
            wasTriggered = false;
        };

        console.log('testing appending element to ' + x);

        $(x).bind(eventName, function () {
            wasTriggered = true;
        });

        $el = $(html).appendTo(x);

        // console.log('\tfrom document...');
        // $(document).trigger(eventName);
        // printWasTriggered();

        console.log('\tfrom element...');
        $el.trigger(eventName);
        printWasTriggered();
    };

    testWithAppendTo(document);
    testWithAppendTo('body');
};