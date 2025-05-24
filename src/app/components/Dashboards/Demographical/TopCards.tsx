

import icon1 from '/public/images/icons/income-w.png';
import icon2 from '/public/images/icons/expense-w.png';
import icon3 from '/public/images/icons/assets-w.png';
import icon4 from '/public/images/icons/staff-w.png';
import TopCardsData from './TopCardData';

const TopCards = () => {
  return (

    <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-3 col-span-12">
        <TopCardsData img={icon1} title="953,000" subtitle="Total Income" color="bg-primary dark:bg-primary" />
        </div>
        <div className="lg:col-span-3 col-span-12">
        <TopCardsData img={icon2} title="236,000" subtitle="Total Expense" color="bg-success dark:bg-success" />
        </div>
        <div className="lg:col-span-3 col-span-12">
        <TopCardsData img={icon3} title="987,563" subtitle="Total Assets" color="bg-indigo dark:bg-indigo" />
        </div>
        <div className="lg:col-span-3 col-span-12">
        <TopCardsData img={icon4} title="987,563" subtitle="Total Staff" color="bg-error dark:bg-error" />
        </div>
    </div>
  );
};

export default TopCards;
