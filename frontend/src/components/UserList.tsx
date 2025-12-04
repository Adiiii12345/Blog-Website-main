import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  email: string;
  nev: string;
  createdAt: string;
}

const API_BASE_URL = "http://localhost:3000";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const loadUsers = async () => {
    try {
      setLoading(true)
      setError('')

      const res = await fetch(`${API_BASE_URL}/felhasznalo`)

      if (!res.ok) {
        throw new Error(`Hiba történt: ${res.status}`)
      }

      const data = await res.json()
      setUsers(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError(String(err) || "Ismeretlen hiba")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className="user-list">
      <div className="actions">
        <button onClick={loadUsers} disabled={loading}>
          {loading ? "Betöltés..." : "Frissítés"}
        </button>
      </div>

      {error && <p className="error">Hiba: {error}</p>}

      {!loading && users.length === 0 && !error && (
        <p>Nincs felhasználó az adatbázisban.</p>
      )}

      {!loading && users.length > 0 && (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Név</th>
              <th>Létrehozva</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.email}</td>
                <td>{u.nev}</td>
                <td>{new Date(u.createdAt).toLocaleString("hu-HU")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default UserList
