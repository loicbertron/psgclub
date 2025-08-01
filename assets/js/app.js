// app.js for concatenation of smaller libraryies
// to reduce http requests of small files

// Prefetch in-viewport links during idle time
import { listen } from "quicklink/dist/quicklink.mjs";
listen();

// lazy sizes for image loading
// TODO: use lazysizes in all pages
import "lazysizes";

// global alert
import "./alert";

import "./script";

import "./form-handler";

import "./bootstrap";

import "./mobile-nav-fix";
