sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ib/project1/test/integration/FirstJourney',
		'com/ib/project1/test/integration/pages/Pr_HeaderList',
		'com/ib/project1/test/integration/pages/Pr_HeaderObjectPage',
		'com/ib/project1/test/integration/pages/Pr_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Pr_HeaderList, Pr_HeaderObjectPage, Pr_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ib/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePr_HeaderList: Pr_HeaderList,
					onThePr_HeaderObjectPage: Pr_HeaderObjectPage,
					onThePr_ItemsObjectPage: Pr_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);