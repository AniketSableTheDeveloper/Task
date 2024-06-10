using demo_srv as service from '../../srv/demo_srv';
annotate service.Pr_Header with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'PR_NO',
                Value : PR_NO,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP_SO_NO',
                Value : SAP_SO_NO,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PR_CREATION_DATE',
                Value : PR_CREATION_DATE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DISTRIBUTOR_ID',
                Value : DISTRIBUTOR_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DISTRIBUTOR_NAME',
                Value : DISTRIBUTOR_NAME,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SHIP_TO',
                Value : SHIP_TO,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SHIP_NAME',
                Value : SHIP_NAME,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SHIP_FROM',
                Value : SHIP_FROM,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BILL_TO',
                Value : BILL_TO,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ORDER_TYPE',
                Value : ORDER_TYPE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PAYMENT_METHOD',
                Value : PAYMENT_METHOD,
            },
            {
                $Type : 'UI.DataField',
                Label : 'REGION_CODE',
                Value : REGION_CODE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PR_STATUS',
                Value : PR_STATUS,
            },
            {
                $Type : 'UI.DataField',
                Label : 'LAST_UPDATED_DATE',
                Value : LAST_UPDATED_DATE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'APPROVER_LEVEL',
                Value : APPROVER_LEVEL,
            },
            {
                $Type : 'UI.DataField',
                Label : 'APPROVER_ROLE',
                Value : APPROVER_ROLE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'GRAND_TOTAL',
                Value : GRAND_TOTAL,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'PR_NO',
            Value : PR_NO,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SAP_SO_NO',
            Value : SAP_SO_NO,
        },
        {
            $Type : 'UI.DataField',
            Label : 'PR_CREATION_DATE',
            Value : PR_CREATION_DATE,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DISTRIBUTOR_ID',
            Value : DISTRIBUTOR_ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DISTRIBUTOR_NAME',
            Value : DISTRIBUTOR_NAME,
        },
    ],
);

