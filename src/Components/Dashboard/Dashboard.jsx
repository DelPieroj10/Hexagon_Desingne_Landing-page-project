import { useState, useEffect } from "react";
import "../Styles/contactsDashboard.css";

const API_URL = import.meta.env.VITE_API_URL;
console.log(import.meta.env.VITE_API_URL)

export default function Dashboard({ showAdmin, setShowAdmin }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const filtered = contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredContacts(filtered);
  }, [search, contacts]);

  useEffect(() => {
    const savedToken = sessionStorage.getItem("admin_token");
    if (savedToken !== "true") return;

    fetch(`${API_URL}/admin/verify`, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          setAccess(true);
        } else {
          sessionStorage.removeItem("admin_token");
        }
      })
      .catch((err) => sessionStorage.removeItem("admin_token"));
  }, []);

  useEffect(() => {
    if (!access) return;
    console.log("ACCESS GRANTED 🔓");
    
    const fetchContacts = async () => {
      setLoading(true);
      const token = sessionStorage.getItem("admin_token");
      try {
        const res = await fetch(`${API_URL}/contacts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          console.error("Failed to fetch contacts. Status:", res.status);
          setContacts([]);
          return;
        }
        const data = await res.json();
        setContacts(Array.isArray(data) ? data : []);
        console.log("FETCHED CONTACTS:", data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setContacts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, [access]);
  
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError("");

      try {
      const res = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: "include",
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem("admin_token", data.token);
        setAccess(true);
      } else {
        setError("Invalid password. Please try again.");
      }
    } catch (err) {
      setError("Connection error. Please try again later.");
    }
  };

  const handleLogout = () => {
    setAccess(false);
    setContacts([]);
    setPassword("");
    setError("");
    sessionStorage.removeItem("admin_token");
  };

  if (!showAdmin && !access) return null;

  if (!access) {
    return (
      <form onSubmit={handlePasswordSubmit}>
        <h2>Admin Access</h2>
        <input
          type="password"
          placeholder="Enter admin token"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="db-btn-secondary" type="submit">
          Enter
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    );
  }

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  return (
    <section>
      <div className="btn-dashboard">
        <h2>Contact messages</h2>
        <button className="db-btn-secondary" onClick={handleLogout}>Logout</button>
      </div>

      <input
        className="dashboard"
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table_dashboard">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{new Date(contact.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
