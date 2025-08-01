import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import { 
  WhatsAppIcon, 
  GoogleSheetsIcon, 
  NotionIcon, 
  HubSpotIcon, 
  OpenAIIcon 
} from '@/components/ui/service-icons';

export function OrbitingServices() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="flex h-[320px] w-[320px] items-center justify-center">
        {/* Center content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold">KLM</h3>
          <p className="text-sm text-muted-foreground">Integration Hub</p>
        </div>

        {/* Inner circle - smaller radius, faster rotation */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          radius={80}
          iconSize={40}
        >
          <WhatsAppIcon size={20} />
          <NotionIcon size={20} />
        </OrbitingCircles>

        {/* Outer circle - larger radius, slower rotation */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={30}
          radius={140}
          iconSize={40}
          reverse
        >
          <GoogleSheetsIcon size={20} />
          <HubSpotIcon size={20} />
          <OpenAIIcon size={20} />
        </OrbitingCircles>
      </div>
    </div>
  );
}