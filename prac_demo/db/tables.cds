namespace DEALER_PORTAL;

using {cuid,managed} from '../node_modules/@sap/cds/common';


entity PR_HEADER : cuid {

        PR_NO             : Integer64;
        SAP_SO_NO         : String(10);
        PR_CREATION_DATE  : Timestamp;
        DISTRIBUTOR_ID    : String(10);
        DISTRIBUTOR_NAME  : String(100);
        SHIP_TO           : String(30);
        SHIP_NAME         : String(200);
        SHIP_FROM         : String(200);
        BILL_TO           : String(30);
        // BU_CODE : String(10);
        ORDER_TYPE        : String(4);
        // KIT_CODE : Integer;
        PAYMENT_METHOD    : String(10);
        REGION_CODE       : String(3);
        PR_STATUS         : String(10);
        LAST_UPDATED_DATE : Timestamp;
        APPROVER_LEVEL    : Integer;
        APPROVER_ROLE     : String(50);
        GRAND_TOTAL       : String(20);
        TO_ITEMS          : Association to many PR_ITEMS
                                on TO_ITEMS.PR_NO = PR_NO;
        TO_COP_ITEMS    : Composition of many PR_ITEMS on TO_COP_ITEMS.TO_HEADER = $self;

}

entity PR_ITEMS : cuid{

        PR_NO           : Integer64;
        PR_ITEM_NO      : Integer;
        MATERIAL_CODE   : String(40);
        MATERIAL_DESC   : String(50);
        IMAGE_URL       : String(1000);
        HSN_CODE        : String(10);
        UNIT_OF_MEASURE : String(3);
        QUANTITY        : Integer;
        FREE_QUANTITY   : String(10);
        STD_PRICE       : String(10);
        BASE_PRICE      : String(10);
        DISC_AMOUNT     : String(10); //Discount amount
        DISC_PERC       : String(10); //Discount percentage
        NET_AMOUNT      : String(10);
        TOTAL_AMOUNT    : String(10);
        CGST_PERC       : String(10);
        CGST_AMOUNT     : String(10);
        SGST_PERC       : String(10);
        SGST_AMOUNT     : String(10);
        IGST_PERC       : String(10);
        IGST_AMOUNT     : String(10);
        TAXES_AMOUNT    : String(10); //total tax amount
        TO_HEADER : Association to PR_HEADER;

}



