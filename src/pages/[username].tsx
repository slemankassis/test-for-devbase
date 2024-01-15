import React, { useEffect, useState } from "react";
import { getUser } from "./API/github";
import Image from "next/image";
import { useRouter } from "next/router";

interface UserProfile {
  avatar_url: string;
  name: string;
  location: string;
}

const Person: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser(username);
        console.log(res);
        setUserProfile({
          avatar_url: res.avatar_url,
          name: res.name,
          location: res.location,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div style={{ paddingTop: "40px", paddingLeft: "40px" }}>
      {userProfile ? (
        <>
          <Image
            style={{ height: "80px", width: "80px", borderRadius: 40 }}
            src={userProfile.avatar_url}
            alt={`${userProfile.name}'s avatar`}
            width={30}
            height={30}
          />
          <h2>{userProfile.name}</h2>
          <h3>{userProfile.location}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Person;
