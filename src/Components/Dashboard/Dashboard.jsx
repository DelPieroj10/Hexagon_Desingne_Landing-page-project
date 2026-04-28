import { form } from "framer-motion/client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = (e) => {
    if (password === TOKEN) {
      setAccess(true);
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (!access) return;

    const fetchContacts = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3001/contacts", {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        if (!res.ok) {
          setContacts([]);
          return;
        }
        const data = await res.json();
        setContacts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setContacts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, [access]);

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
      </form>
    )}

  return (
    <section>
      <h2>Contact messages</h2>

      {contacts.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <h4>{contact.name}</h4>
              <p>{contact.email}</p>
              <p>{contact.message}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
