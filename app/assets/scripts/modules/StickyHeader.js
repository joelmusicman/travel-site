import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTrigger = $('.large-hero__subtitle');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.createPageSectionWaypoints();
    this.headerLinks = $('.primary-nav a');
    this.addSmoothScroll();
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: that.headerTrigger[0],
      handler: function (direction) {
        if (direction == "down") {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }


      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function () {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function (direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "23%"
      });
      new Waypoint({
        element: currentPageSection,
        handler: function (direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;