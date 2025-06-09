import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
navigate("/previous-notes");
};

  return (
    <>
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
                 “Unclose your mind. You are not a prisoner. You are a bird in flight, searching the skies for dreams.” <br/>
                      ― Haruki Murakami, <em>Hard-Boiled Wonderland and the End of the World</em><br/>
            </p>
            <button className="btn btn-primary" onClick={handleSubmit}>Take a look at your notes</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default Home;