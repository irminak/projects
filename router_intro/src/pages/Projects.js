import { Link } from 'react-router-dom';

const PRODUCTS = [
    { id: 1, title: 'product-1' },
    { id: 2, title: 'product-2' },
    { id: 3, title: 'product-3' },
];

const ProjectsPage = () => {
    return (
        <>
            <div>Projects</div>
            <ul>
                {PRODUCTS.map((prod) => (
                    <li key={prod.id}>
                        <Link to={`/projects/${prod.id}`}>{prod.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProjectsPage;
