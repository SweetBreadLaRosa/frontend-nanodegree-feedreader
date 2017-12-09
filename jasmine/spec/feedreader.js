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

        it('all urls should be defined within allFeed array', function() {
            for(var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].url.length).not.toBe(0);
                expect(allFeeds[i].url).toBeDefined();
            }
        });

        it('all names should be defined within allFeed array', function() {
            for(var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].name.length).not.toBe(0);
                expect(allFeeds[i].name).toBeDefined();
            }
        });
    });

    describe('The menu', function() {

        // moved these here because of usage between more than one test
        var body = $('body');
        var menuIconElem = $('.menu-icon-link');

        it('menu element should be hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toEqual(true);
        });

        it('should toggle visibility of menu element when clicked', function() {

            // initial click should be false
            menuIconElem.trigger('click');
            expect(body.hasClass('menu-hidden')).toEqual(false);

            // second click should be true
            menuIconElem.trigger('click');
            expect(body.hasClass('menu-hidden')).toEqual(true);
        })
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('should contain at least one entry after loadFeed() is invoked', function(done) {

            var feedsCount = $('.feed .entry').length;

            expect(feedsCount).toBeGreaterThan(0);
            done();
        })
    });

    describe('New Feed Selection', function() {

        var firstFeedContent;
        var secondFeedContent;

        // only call done after loading a new index
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeedContent = $('.feed').has('h2')[0].innerText;
            });

            loadFeed(1, function() {
                secondFeedContent = $('.feed').has('h2')[0].innerText;
                done();
            });
        });

        it('should change content when new feed is loaded', function(done) {

            expect(firstFeedContent).not.toEqual(secondFeedContent);
            done();
        })

    });
}());
