

import TopCardsData from './TopCardsData';
import icon1 from '/public/images/icons/income.png';
import icon2 from '/public/images/icons/expense.png';
import icon3 from '/public/images/icons/assets.png';
import icon4 from '/public/images/icons/staff.png';

type TopCardsProps = {
  activeCard: boolean;
};

const TopCards = ({activeCard}:TopCardsProps) => {
  return (

    <div className="grid grid-cols-12 gap-6">
        <div className={`${activeCard?'lg:col-span-3':'lg:col-span-4'} col-span-12`}>
        <TopCardsData img={icon1} title="953,000" subtitle="Total Income" />
        </div>
        <div className={`${activeCard?'lg:col-span-3':'lg:col-span-4'} col-span-12`}>
        <TopCardsData img={icon2} title="236,000" subtitle="Total Expense" />
        </div>
        <div className={`${activeCard?'lg:col-span-3':'lg:col-span-4'} col-span-12`}>
        <TopCardsData img={icon3} title="987,563" subtitle="Total Assets" />
        </div>
        {activeCard?<div className={`${activeCard?'lg:col-span-3':'lg:col-span-4'} col-span-12`}>
        <TopCardsData img={icon4} title="987,563" subtitle="Total Staff" />
        </div>:null}
    </div>
  );
};

export default TopCards;
