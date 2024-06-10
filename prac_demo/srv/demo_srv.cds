using {DEALER_PORTAL} from '../db/tables';


service demo_srv {

    @odata.draft.enabled
    entity Pr_Header as projection on DEALER_PORTAL.PR_HEADER;
    
    entity Pr_Items as projection on DEALER_PORTAL.PR_ITEMS; 

}