"use client";

import IntegrationsHero from "@/components/integrations/IntegrationsHero";
import IntegrationsLogoMarquee from "@/components/integrations/IntegrationsLogoMarquee";
import IntegrationsCategoryTabs from "@/components/integrations/IntegrationsCategoryTabs";
import IntegrationsConnectorCards from "@/components/integrations/IntegrationsConnectorCards";
import IntegrationsHowConnectionsWork from "@/components/integrations/IntegrationsHowConnectionsWork";
import IntegrationsLiveSync from "@/components/integrations/IntegrationsLiveSync";
import IntegrationsSecurity from "@/components/integrations/IntegrationsSecurity";
import IntegrationsCustomApi from "@/components/integrations/IntegrationsCustomApi";
import IntegrationsIndustryStacks from "@/components/integrations/IntegrationsIndustryStacks";
import IntegrationsFinalCta from "@/components/integrations/IntegrationsFinalCta";

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <IntegrationsHero />
      {/* <IntegrationsLogoMarquee /> */}
      <IntegrationsCategoryTabs />
      <IntegrationsConnectorCards />
      <IntegrationsHowConnectionsWork />
      <IntegrationsLiveSync />
      <IntegrationsSecurity />
      <IntegrationsCustomApi />
      <IntegrationsIndustryStacks />
      <IntegrationsFinalCta />
    </main>
  );
}
