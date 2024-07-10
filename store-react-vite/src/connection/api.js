import axios from "axios";

// Java Spring Boot API
export const getJavaTest = async () => {
  try {
    const response = await axios.get("/api/hello");
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Java backend:", error);
    throw error;
  }
};

// Java API get Barang
export const getDataBarang = async () => {
  try {
    const response = await axios.get("/api/barang");
    return response.data;
  } catch (error) {
    console.error("Error fetching barang data:", error);
    throw error;
  }
};

// Java API add Barang
export const addBarang = async (barang) => {
  try {
    const response = await axios.post("/api/barang", barang, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching barang data:", error);
    throw error;
  }
};

// Java API edit Barang
export const editBarang = async (barang) => {
  console.log("barang", barang);
  try {
    const response = await axios.put(`/api/barang/${barang.rfid}`, barang, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching barang data:", error);
    throw error;
  }
};

// Java API delete Barang
export const deleteBarang = async (id) => {
  try {
    const response = await axios.delete(`/api/barang/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching barang data:", error);
    throw error;
  }
};

// ====================//

// Java API get Customer
export const getDataCustomer = async () => {
  try {
    const response = await axios.get("/api/customers");
    return response.data;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
};

// Java API add Customer
export const addCustomer = async (customer) => {
  try {
    const response = await axios.post("/api/customers", customer, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching barang data:", error);
    throw error;
  }
};

// Java API edit Customer
export const editCustomer = async (customer) => {
  try {
    const response = await axios.put(
      `/api/customers/${customer.qrCode}`,
      customer,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching barang data:", error);
    throw error;
  }
};

// Java API delete Customer
export const deleteCustomer = async (qrCode) => {
  try {
    const response = await axios.delete(`/api/customers/${qrCode}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching barang data:", error);
    throw error;
  }
};

// Java API Create Transaction
export const createTransaction = async (transaksi) => {
  try {
    const response = await axios.delete("/api/transaksi", transaksi, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching barang data:", error);
    throw error;
  }
};

// Express.js API
export const getExpressData = async () => {
  try {
    const response = await axios.put("/api/express/data-endpoint");
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Express backend:", error);
    throw error;
  }
};
