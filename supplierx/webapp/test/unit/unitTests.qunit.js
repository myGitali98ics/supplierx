/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tut/supplierx/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
