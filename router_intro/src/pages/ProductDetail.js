import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const params = useParams();

    return (
        <>
            <h1>{params.productId}</h1>
        </>
    );
};

export default ProductDetailPage;
