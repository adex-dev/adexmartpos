// import { Icon } from '../../components/icons';
import { Adexmart } from '@/components/ui/Informations';
import { StatsGrid } from '@/components/ui/statsgrid';

export default function Home() {
  return (
    <>
      {/* Content */}
      <div className="bg-transparent px-3 pt-4 min-h-[91vh]">
        <StatsGrid transactions={120} revenue={3500000} users={45} />
        <Adexmart />
      </div>
    </>
  );
}
