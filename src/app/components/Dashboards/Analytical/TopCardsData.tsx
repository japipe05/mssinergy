
import Image from 'next/image';
import CardBox from '../../shared/CardBox';

interface TopCardsDataProps {
    img: any;
    subtitle: string;
    title: string;
  }

const TopCardsData: React.FC<TopCardsDataProps> = ({ img, subtitle, title }) => {
  return (
    <CardBox className="mb-0">
        <div className="flex items-center">
        <span className=" bg-primary w-0.5 h-30px -ms-6 me-18px top-card"></span>
          <Image src={img} alt="income" />
          <div className="ms-3">
            <h6 className="text-muted dark:text-darkmuted text-sm mt-1 mb-0 font-medium">{subtitle}</h6>
            <h2 className="mt-0 text-dark dark:text-white text-2xl font-medium">{title}</h2>
          </div>
        </div>
    </CardBox>
  );
};


export default TopCardsData;
