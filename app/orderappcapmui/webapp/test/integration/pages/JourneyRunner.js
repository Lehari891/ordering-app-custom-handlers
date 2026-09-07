sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"orderappcapmui/test/integration/pages/OrderSetList.gen",
	"orderappcapmui/test/integration/pages/OrderSetObjectPage.gen"
], function (JourneyRunner, OrderSetListGenerated, OrderSetObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('orderappcapmui') + '/test/flpSandbox.html#orderappcapmui-tile',
        pages: {
			onTheOrderSetListGenerated: OrderSetListGenerated,
			onTheOrderSetObjectPageGenerated: OrderSetObjectPageGenerated
        },
        async: true
    });

    return runner;
});

