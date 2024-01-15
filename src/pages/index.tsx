import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/search/users",
          {
            params: {
              q: "followers:>1",
              sort: "followers",
              order: "desc",
              per_page: 5,
              page: 1,
            },
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        setTopUsers(response.data.items);
      } catch (error) {
        console.error("Error fetching top users:", error);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1 className="title">Top 5 Github Users</h1>
          <p className="info">Tap the username to see more information</p>
          <ul>
            {topUsers.map((user) => (
              <li key={user.id}>
                <a href={`${user.login}`}>{user.login}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
