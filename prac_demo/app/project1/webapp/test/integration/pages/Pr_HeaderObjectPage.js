sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.ib.project1',
            componentId: 'Pr_HeaderObjectPage',
            contextPath: '/Pr_Header'
        },
        CustomPageDefinitions
    );
});