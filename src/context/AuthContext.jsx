import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check auth state on load
    const isAuth = localStorage.getItem('isAuthenticated')
    if (isAuth) setUser({})
  }, [])

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true')
    setUser({})
  }

  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}