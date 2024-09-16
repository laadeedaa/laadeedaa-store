import axios from "axios";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { title } = useParams();

  const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
  const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
  const TABLE_NAME = "products";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
            params: {
              filterByFormula: `title="${title}"`,
            },
          }
        );
        const records = response.data.records;
        if (records.length > 0) {
          setProduct(records[0].fields);
          setLoading(false);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching product");
      }
    };

    fetchProduct();
  }, [title, AIRTABLE_API_KEY, BASE_ID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="route product-page">
      <h3 className="product-title">{product.title}</h3>
      <Link className="product-return-link" to="/">
        return to products page
      </Link>
      <div className="product-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src={product.image[0].url}
            alt={`${product.title}`}
          />
          <div className="product-buttons">
            <div className="product-button-container">
              <p className="product-button-text">want to buy?</p>
              {product.stocked === "false" ? (
                <a
                  href={`${product.etsylink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="product-button product-button-purchase">
                    contact to buy
                  </div>
                </a>
              ) : (
                <a
                  href={`${product.etsylink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="product-button product-button-purchase">
                    purchase
                  </div>
                </a>
              )}
            </div>
            <div className="product-button-container">
              <p className="product-button-text">want to adapt?</p>
              <a href="mailto:doug@laadeedaa.uk">
                <div className="product-button product-button-contact">
                  contact me
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="product-details-container">
          <p className="product-details-subtitle">{product.subtitle}</p>
          <p
            className="product-details-description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Product;
