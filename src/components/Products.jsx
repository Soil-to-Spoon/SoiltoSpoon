import ProductCard from './ProductCard';
import { ProductData } from './NavLinks';

const Sections = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center">
        {ProductData.map((section, index) => (
          <ProductCard
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;