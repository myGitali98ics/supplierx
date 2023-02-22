/*global QUnit*/

sap.ui.define([
	"tut/supplierx/controller/VsupplierList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VsupplierList Controller");

	QUnit.test("I should test the VsupplierList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
