
import Image from 'next/image';
import CardBox from '../../shared/CardBox';

interface TopCardsDataProps {
    img: any;
    subtitle: string;
    title: string;
    color: string
  }

const TopCardsData: React.FC<TopCardsDataProps> = ({ img, subtitle, title,color }) => {
  return (
    <CardBox className={`mb-0 ${color}`}>
        <div className="flex items-center">
          <Image src={img} alt="income" />
          <div className="ms-3">
            <h6 className="text-white dark:text-white text-sm mt-1 mb-0 font-medium">{subtitle}</h6>
            <h2 className="mt-0 text-white dark:text-white text-2xl font-medium">{title}</h2>
          </div>
        </div>
    </CardBox>
  );
};


export default TopCardsData;
