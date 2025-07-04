import { gsap, Power3 } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  // change-navigation-color
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
      document.querySelector('.navbar').classList.add('nav__color__change');
    } else {
      document.querySelector('.navbar').classList.remove('nav__color__change');
    }
  });

  // Smooth scrolling
  const scrollLinks = document.querySelectorAll('.scroll');
  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      const elem = document.querySelector(link.hash);
      if (elem) {
        e.preventDefault();
        window.scrollTo({
          top: elem.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  const navbarLinks = document.querySelectorAll('.navbar-nav>li>a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });

  // blob animation
  var tl = new gsap.timeline({
    yoyo: true,
    repeat: -1,
  });
  tl.to(".blob", 3, {
    attr: {
      d: "M470.3 133c45.8 42.5 75.3 104.8 60.3 152-15 47.3-74.4 79.6-120.2 110.7-45.8 31.2-78.1 61.3-116.5 67.4-38.4 6.1-83-11.7-110.2-42.8-27.1-31.2-36.9-75.8-44.7-128.1-7.8-52.3-13.5-112.4 13.6-154.9 27.2-42.5 87.3-67.4 148.5-68.5 61.1-1 123.4 21.7 169.2 64.2z",
    },
  })
    .to(".blob", 3, {
      attr: {
        d: "M452.9 141.3c41.2 47 67.6 102.8 56.3 147.4-11.3 44.5-60.4 77.8-101.6 120.6-41.1 42.8-74.4           95.3-117.3 104.9-42.9 9.7-95.4-23.4-122.1-66.2-26.7-42.9-27.4-95.4-32.6-153.2-5.2-57.7-14.8-120.7 11.9-167.7 26.6-47 89.6-78 149-74.5 59.4 3.5 115.2 41.7 156.4 88.7z",
      },
    })
    .to(".blob", 3, {
      attr: {
        d: "M423.5 172.8c30.2 33.9 43.8 80.5 42.9 126.3-.9 45.7-16.5 90.5-46.7 113.1-30.1 22.7-74.9 23.3-124.8 28.3-49.8 5.1-104.7 14.7-146.6-8-41.8-22.7-70.6-77.6-57.8-119.8 12.7-42.2 66.9-71.6 108.7-105.5 41.9-33.8 71.3-72 109.4-80.6 38.1-8.6 84.7 12.4 114.9 46.2z",
      },
    })
    .to(".blob", 3, {
      attr: {
        d: "M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z",
      },
    });
});

// G-Map
window.marker = null;

function initialize() {
  var map;
  const mapElement = document.getElementById("map");
  if (!mapElement) {
    return;
  }
  var lat = mapElement.dataset.lat;
  var long = mapElement.dataset.long;
  var mapCenter = new google.maps.LatLng(lat, long);
  var style = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e9e9e9",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#333333",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
  ];
  var mapOptions = {
    // SET THE CENTER
    center: mapCenter,
    // SET THE MAP STYLE & ZOOM LEVEL
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // REMOVE ALL THE CONTROLS EXCEPT ZOOM
    zoom: 13,
    panControl: false,
    scrollwheel: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
    },
  };

  map = new google.maps.Map(mapElement, mapOptions);
  // SET THE MAP TYPE
  var mapType = new google.maps.StyledMapType(style, {
    name: "Grayscale",
  });
  map.mapTypes.set("grey", mapType);
  map.setMapTypeId("grey");
  //CREATE A CUSTOM PIN ICON
  var marker_image = mapElement.dataset.pin;
  var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(25, 34));
  marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
    icon: pinIcon,
    title: "bizcred",
  });
}

if (document.getElementById("map")) {
  google.maps.event.addDomListener(window, "load", initialize);
}