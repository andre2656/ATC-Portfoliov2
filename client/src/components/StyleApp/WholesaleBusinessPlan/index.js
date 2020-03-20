import React from 'react';
import LineSheets from './LineSheets/index';
import ListOfAccounts from './ListofCurrentAccounts/index';
import TerritoryMap from './TerritoryMap/index';
import PricingList from './PricingList/index';
import OTSreport from './OTSreport/index';
import ShippingPolicy from './ShippingPolicy/index';
import VendorApprovals from './VendorApprovals/index';
import DeliveryDates from './DeliveryDates/index';
import WholesaleBudgetPlan from './WholesaleBudgetPlan/index';
import NewRetailerOpenEvent from './NewRetailerOpenEvent/index';
import VendorEvaluationChecklist from './VendorEvaluationChecklist/index';
import WholesaleSalesGoals from './WholesaleSalesGoals/index';
import DistributionPlanCalendar from './DistributionPlanCalendar/index';
import CustomerService from './CustomerService/index';
import TradeShowScheduleBudget from './TradeShowScheduleBudget/index';
import DevelopmentPlanforNationalSalesTeam from './DevelopmentPlanforNationalSalesTeam/index';
import TrainingBible from './TrainingBible/index';
import CommissionPlan from './CommissionPlan/index';
import CostingReview from './CostingReview/index';
import Marketing from './Marketing/index';
import EcommerceStrategyBloggerCelebAdoption from './EcommerceStrategyBloggerCelebAdoption/index';
import PopUpShopStrategy from './PopUpShopStrategy/index';
import SocialMediaMarketing from './SocialMediaMarketing/index';
import TraditionalPrintStrategy from './TraditionalPrintStrategy/index';
import WholesaleVendorEventSchedule from './WholesaleVendorEventSchedule/index';
import WholesaleStrategyPlanwithProjections from './WholesaleStrategyPlan/index';
import Majorsfocusandstrategy from './MajorsFocusStrategy';
import ChainofcommandproceduresList from './ChainofCommandPorceduresList';



const WholesaleBusinessPlan = () => {
    return (
        <div className="container flex-container" id = 'WholesaleIndex'>
          <LineSheets/>
            <ListOfAccounts />
            <TerritoryMap />
            < PricingList/>
            < OTSreport/>
            < ShippingPolicy/>
            < VendorApprovals/>
            < DeliveryDates/>
            < WholesaleStrategyPlanwithProjections/>
            < WholesaleBudgetPlan/>
            < NewRetailerOpenEvent/>
            <VendorEvaluationChecklist />
            <WholesaleSalesGoals />
            < Majorsfocusandstrategy/>
            <DistributionPlanCalendar />
            <CustomerService />
            <TradeShowScheduleBudget />
            <DevelopmentPlanforNationalSalesTeam />
            < TrainingBible/>
            < ChainofcommandproceduresList/>
            <CommissionPlan />
            < CostingReview/>
            <Marketing />
            <EcommerceStrategyBloggerCelebAdoption />
            <PopUpShopStrategy />
            <SocialMediaMarketing />
            < TraditionalPrintStrategy/>
            <WholesaleVendorEventSchedule />

        </div>
    )
}

export default WholesaleBusinessPlan;