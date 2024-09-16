import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogItems, setBlogItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const airtableApi = axios.create({
    baseURL: `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/blog`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    },
  });

  useEffect(() => {
    const getBlogItems = async () => {
      setLoading(true);
      try {
        const response = await airtableApi.get();
        setBlogItems(response.data.records);
        setLoading(false);
        console.log(blogItems);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    getBlogItems();
  }, []);

  const BlogItem = ({ title, date, text, image, id }) => (
    <div className="blog-item">
      <div className="blog-item-image-wrapper">
        <img className="blog-item-image" src={image} alt="" />
      </div>
      <div className="blog-item-text">
        <div className="blog-item-text-header">
          <h3 className="blog-item-title">{title}</h3>
          <p className="blog-item-date">{date}</p>
        </div>
        <div
          className="blog-item-text-body"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <Link className="blog-item-link" to={`/blog/${id}`}>
          read more...
        </Link>
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="route blog-page">
      <h2 className="route-title">blog</h2>
      <div className="blog-grid">
        {blogItems.map((b) => (
          <BlogItem
            key={b.id}
            id={b.id}
            title={b.fields.title}
            text={b.fields.text}
            date={b.fields.date}
            image={b.fields.image[0].url}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
