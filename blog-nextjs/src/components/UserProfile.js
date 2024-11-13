"use client"

import { useUser } from '@/context/UserContext'
import React from 'react'

export default function UserProfile() {

    const {user, updateUser} = useUser()
    const handleLogin = () => {
        const sampleUser = { name: "Melike Çiğdem", email: "melike@example.com" };
        updateUser(sampleUser); // Kullanıcı bilgilerini günceller
      };
    
      return (
        <div>
          {user ? (
            <div>
              <h2>Hoş geldin, {user.name}!</h2>
              <p>Email: {user.email}</p>
            </div>
          ) : (
            <button onClick={handleLogin}>Giriş Yap</button>
          )}
        </div>
      );
}

