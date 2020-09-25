import React from "react";
import { useParams } from "react-router-dom";

export function ProfileDetail() {
  const { username } = useParams();
  return (
    <div>
      <h1>Profile detail page for {username}</h1>
    </div>
  );
}
