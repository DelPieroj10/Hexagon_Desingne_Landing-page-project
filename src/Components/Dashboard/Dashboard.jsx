// import { form } from "framer-motion/client";
import { useState, useEffect } from "react";
import "../Styles/contactsDashboard.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showAdmin, setShowAdmin] = useState(false);

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

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch(`${API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setAccess(true);
      localStorage.setItem("admin_access", "true");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  useEffect(() => {
    const savedAccess = localStorage.getItem("admin_access");
    if (savedAccess === "true") return;

    fetch(`${API_URL}/admin/verify`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setAccess(true);
          setShowAdmin(true);
        } else {
          localStorage.removeItem("admin_access");
        }
      })
      .catch((err) => localStorage.removeItem("admin_access"));
    console.log("ACCESS:", access);
    console.log("SHOW ADMIN:", showAdmin);
  }, []);

  useEffect(() => {
    if (!access) return;
    console.log("ACCESS GRANTED 🔓");

    const fetchContacts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/contacts`, {
          credentials: "include",
        });
        console.log("FETCHING CONTACTS...");
        if (!res.ok) {
          console.error("Failed to fetch contacts. Status:", res.status);
          setContacts([]);
          return;
        }
        const data = await res.json();
        setContacts(Array.isArray(data) ? data : []);
        console.log("FETCHED CONTACTS:", data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setContacts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, [access]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
        setShowAdmin(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
        <button type="submit">Enter</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    );
  }

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  return (
    <section>
      <h2>Contact messages</h2>

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
