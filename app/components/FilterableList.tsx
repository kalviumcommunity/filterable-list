"use client";

import { useState } from "react";

type MenuItem = {
  id: number;
  name: string;
};


const MENU: MenuItem[] = [
  { id: 1, name: "Margherita Pizza" },
  { id: 2, name: "Paneer Wrap" },
  { id: 3, name: "Cold Brew" },
  { id: 4, name: "Veg Burger" },
  { id: 5, name: "Masala Fries" },
  { id: 6, name: "Lemon Iced Tea" },
];

export default function FilterableList() {
 
  const [query, setQuery] = useState("");

  
  const visible = MENU.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="list">
      
      <input
        placeholder="Search the menu..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      
      {visible.length === 0 ? (
        <p>No menu items match &ldquo;{query}&rdquo;.</p>
      ) : (
        <ul>
         
          {visible.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
  
