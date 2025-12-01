import TradingViewWidget from "@/components/TradingViewWidget";
import { Button } from "@/components/ui/button";
import { MARKET_OVERVIEW_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG  } from "@/lib/constants";

const Home = ( )=> {
  const sctriptUrl = "https://s3.tradingview.com/external-embedding/embed-widget-";
  
  return (
    <div className="flex min-h-screen home-wrapper">
    <section className="grid w-full gap-8 home-section">
      <div className="md:col-span-1 xl:col-span-1">
        <TradingViewWidget 
        title="Market Overview" 
        scriptUrl={`${sctriptUrl}market-overview.js`}
        config= { MARKET_OVERVIEW_WIDGET_CONFIG}
        className="custom-chart hegiht-[600px]"
        />
        </div> 
        <div className="md:col-span-1 xl:col-span-2">
    <TradingViewWidget 
        title="Stock Heatmap"
        scriptUrl={`${sctriptUrl}stock-heatmap.js`}
        config= { MARKET_OVERVIEW_WIDGET_CONFIG}
        className="custom-chart hegiht-[600px]"
        />
        </div>
    </section>
    <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-2">
    <TradingViewWidget 
        scriptUrl={`${sctriptUrl}market-quotes.js`}
        config= { MARKET_DATA_WIDGET_CONFIG}
        />
        </div>
      <div className="md:col-span-1 xl:col-span-1">
        <TradingViewWidget 
        scriptUrl={`${sctriptUrl}timeline.js`}
        config= { MARKET_OVERVIEW_WIDGET_CONFIG}
        />
        </div> 
    </section>
    </div>
  );
}
export default Home;