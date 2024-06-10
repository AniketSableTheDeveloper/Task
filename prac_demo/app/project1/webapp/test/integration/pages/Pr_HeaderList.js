sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.ib.project1',
            componentId: 'Pr_HeaderList',
            contextPath: '/Pr_Header'
        },
        CustomPageDefinitions
    );
});