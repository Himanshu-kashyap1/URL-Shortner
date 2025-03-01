"use client";
import React, { useState } from "react";
// import { response } from "react";
import Link from "next/link";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ url: url, shorturl: shorturl });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`),
          seturl(""),
          setshorturl(""),
          // console.log(result),
          alert(result.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate Your Short URL</h1>
      <div className="flex flex-col gap-2">
        <input
          value={url}
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
          className="px-4 py-2 focus:outline-purple-600 bg-white rounded-md"
        />
        <input
          value={shorturl}
          type="text"
          placeholder="Enter prefered short URL"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
          className="px-4 py-2 focus:outline-purple-600 bg-white rounded-md"
        />
        <button
          onClick={generate}
          className="border text-white rounded-lg px-3 my-3 bg-purple-500 shadow-lg py-1 font-bold"
        >
          Generate
        </button>
      </div>
      {generated && <><span className="font-bold text-lg">Your Link:</span><code> <Link target="_blank" href={generated}>{generated}</Link></code></>}
    </div>
  );
};

export default shorten;
