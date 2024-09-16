import axios from "axios";

const AIRTABLE_API_KEY =
  "3bf0d509e6130be87ede27b844539463894a37e24140d1c4b2a288f3376dd80b";
const BASE_ID = "patjY5KaerKH4VXg3";
const TABLE_NAME = "products";

const airtableApi = axios.create({
  baseURL: `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
  headers: {
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  },
});

export const fetchRecords = async () => {
  try {
    const response = await airtableApi.get();
    return response.data.records;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};
