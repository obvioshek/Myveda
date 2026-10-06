// Unit 7's guided lessons, one file per chapter, keyed by chapter slug. See
// content/learn/lesson-kit.ts for what a lesson is and the rules for writing one.

import brandManagement from "./brand-management";
import consumerAndIndustrialBuyingBehaviour from "./consumer-and-industrial-buying-behaviour";
import customerRelationshipMarketing from "./customer-relationship-marketing";
import distributionLogisticsAndSupplyChain from "./distribution-logistics-and-supply-chain";
import emergingTrendsInMarketing from "./emerging-trends-in-marketing";
import internationalMarketing from "./international-marketing";
import marketingConcepts from "./marketing-concepts";
import pricingDecisions from "./pricing-decisions";
import productDecisions from "./product-decisions";
import promotionDecisions from "./promotion-decisions";
import retailMarketing from "./retail-marketing";
import segmentationTargetingAndPositioning from "./segmentation-targeting-and-positioning";
import servicesMarketing from "./services-marketing";
import type { Lesson } from "@/content/learn/lesson-kit";

const lessons: Record<string, Lesson[]> = {
  "marketing-concepts": marketingConcepts,
  "segmentation-targeting-and-positioning": segmentationTargetingAndPositioning,
  "product-decisions": productDecisions,
  "brand-management": brandManagement,
  "pricing-decisions": pricingDecisions,
  "distribution-logistics-and-supply-chain": distributionLogisticsAndSupplyChain,
  "promotion-decisions": promotionDecisions,
  "consumer-and-industrial-buying-behaviour": consumerAndIndustrialBuyingBehaviour,
  "services-marketing": servicesMarketing,
  "customer-relationship-marketing": customerRelationshipMarketing,
  "retail-marketing": retailMarketing,
  "international-marketing": internationalMarketing,
  "emerging-trends-in-marketing": emergingTrendsInMarketing,
};

export default lessons;
