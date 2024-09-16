import axios from "axios";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const BlogPage = () => {
  const [blogItem, setBlogItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
  const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
  const TABLE_NAME = "blog";

  useEffect(() => {
    const getBlogItem = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
          }
        );
        const records = response.data.records;
        if (records.length >= 0) {
          records.forEach((o) => {
            if (o.id === id) {
              setBlogItem(o.fields);
            }
          });
          console.log(blogItem);
        } else {
          setError("item not found");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching product");
      }
    };

    getBlogItem();
  }, [blogItem, id, AIRTABLE_API_KEY, BASE_ID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="route blog-item-page">
      <h3 className="blog-item-title">{blogItem.title}</h3>
      <p className="blog-item-date">{blogItem.date}</p>
      <Link className="blog-item-return-link" to="/blog">
        return to blog page
      </Link>
      <div className="blog-item-container">
        <div className="blog-item-image-container">
          {blogItem.image && blogItem.image[0]?.url ? (
            <img
              className="blog-item-image"
              src={blogItem.image[0].url}
              alt={blogItem.title || "Blog Image"}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div
          className="blog-item-text"
          dangerouslySetInnerHTML={{ __html: blogItem.text }}
        ></div>
      </div>
    </div>
  );
};

export default BlogPage;
