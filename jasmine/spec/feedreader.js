/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all urls should be defined within allFeed array', function() {
            for(var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].url.length).not.toBe(0);
                expect(allFeeds[i].url).toBeDefined();
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all names should be defined within allFeed array', function() {
            for(var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].name.length).not.toBe(0);
                expect(allFeeds[i].name).toBeDefined();
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        // moved these here because of usage between more than one test
        var body = $('body');
        var menuIconElem = $('.menu-icon-link');

        it('menu element should be hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toEqual(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should toggle visibility of menu element when clicked', function() {

            // initial click should be false
            menuIconElem.trigger('click');
            expect(body.hasClass('menu-hidden')).toEqual(false);

            // second click should be true
            menuIconElem.trigger('click');
            expect(body.hasClass('menu-hidden')).toEqual(true);
        })
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    });
}());
