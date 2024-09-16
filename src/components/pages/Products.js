import axios from "axios";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const airtableApi = axios.create({
    baseURL: `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/products`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    },
  });

  useEffect(() => {
    const getRecords = async () => {
      setLoading(true);
      try {
        const response = await airtableApi.get();
        setProducts(response.data.records);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    getRecords();
  }, []);

  const ProductCard = ({
    image,
    title,
    subtitle,
    description,
    etsylink,
    stocked,
  }) => (
    <div className="product-card">
      <img className="product-card-image" src={image} alt="" />
      <div className="product-card-text">
        <div className="product-card-text-header">
          <h3 className="product-card-title">{title}</h3>
          <p className="product-card-subtitle">{subtitle}</p>
        </div>
        <div
          className="product-card-text-body"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div className="product-card-links">
          {stocked === "true" ? (
            <Link
              className="product-card-link product-card-link-purchase"
              to="/contact"
            >
              contact to buy
            </Link>
          ) : (
            <a
              className="product-card-link product-card-link-purchase"
              href={`${etsylink}`}
              target="_blank"
              rel="noreferrer"
            >
              buy now
            </a>
          )}

          <Link
            className="product-card-link product-card-link-details"
            to={`/product/${title}`}
          >
            more details
          </Link>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="route products-page">
      <h2 className="route-title">products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            title={p.fields.title}
            subtitle={p.fields.subtitle}
            description={p.fields.description}
            image={p.fields.image[0].url}
            etsylink={p.fields.etsylink}
            stocked={p.fields.stocked}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
