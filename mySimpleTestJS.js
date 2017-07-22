


/* Console Color Output */
// console color example, ('%c' + variable, 'color: green'). Only take 2 arguments, so you may have to use '+'.
// console.log('%cMy color', 'color: yellow;')
// console.log('%cTest:' + testname + 'OK', 'color: green')
// Expand/Collapse Stack Trace


// Create a separate object as a helper method. It was originally under the setTimeout function.
var TinyTestHelper = {
                          //need to pass arguments.
    renderStats: function(tests, failures) {
        // Output summary statistics. Send information to the DOM.
                /*Object keys checks how many elements in array. Subtracting failures, which
                    are defined, gives the total success.*/
                var numberOfTests = Object.keys(tests).length;
                var success = numberOfTests - failures;

                var summaryString = 'Ran: ' + numberOfTests + ' tests.'
                                    + ' Failures: ' + failures + ' Success: '
                                    + success;

                /* Watch and Code approach to putting stats on the DOM*/
                var summaryElement = document.createElement('h1');
                summaryElement.textContent = summaryString;
                document.body.appendChild(summaryElement);
                
                /* My solution, WC solution above seems cleaner.*/
                // Create element
                //      var dom = document.createElement('h1');
                // CreateTextNode the element will hold, summaryString. Can also use textContent.
                //      var stats = document.createTextNode(summaryString);
                // Attach text to element
                //      dom.appendChild(stats);
                // Attach element with text to body of the document.
                //      document.body.appendChild(dom);

    }
};



var TinyTest = {

    run: function(tests) {
        
        var failures = 0;
        for (var testName in tests) {
            var testAction = tests[testName];
            try {
                testAction.apply(this);
                console.log('%c' + testName, 'color: green');

            } catch (e) {
                failures++;
                console.groupCollapsed('%c' + testName, 'color: red')
                console.error(e.stack);
                console.groupEnd();

               
            }
        }
        /* This uses the event loop. The setTimeout function goes in as a
         web API, then it goes to the callback queue. When JS has finished
         setTimeout is sent through event loop and run. */
        setTimeout(function() { // Give document a chance to complete
            if (window.document && document.body) {
                document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
                // Test helper function from TinyTestHelper object.
                TinyTestHelper.renderStats(tests, failures);

            }
        }, 0);
    },

    fail: function(msg) {
        throw new Error('fail(): ' + msg);
    },

    assert: function(value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    },

    assertEquals: function(expected, actual) {
        if (expected != actual) {
            throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');

        }
    },

    assertStrictEquals: function(expected, actual) {
        if (expected !== actual) {
            throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
        }
    },

};

var fail               = TinyTest.fail.bind(TinyTest),
    assert             = TinyTest.assert.bind(TinyTest),
    assertEquals       = TinyTest.assertEquals.bind(TinyTest),
    eq                 = TinyTest.assertEquals.bind(TinyTest), // alias for assertEquals
    assertStrictEquals = TinyTest.assertStrictEquals.bind(TinyTest),
    tests              = TinyTest.run.bind(TinyTest);