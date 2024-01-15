import React, { useEffect, useState } from "react";
import { getUser } from "./API/github";
import Image from "next/image";
import { useRouter } from "next/router";

const UserProfile: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser(username);
        setUserProfile({
          avatar_url: res.avatar_url,
          name: res.name,
          location: res.location,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (username) fetchUser();
  }, [username]);

  if (!userProfile) return <p>Loading...</p>;

  return (
    <div className="flex items-center m-[3vw] border-b border-gray-300 pb-10">
      <Image
        className="rounded-full"
        src={userProfile.avatar_url}
        alt=""
        width={75}
        height={75}
      />
      <div className="ml-4">
        <p className="text-custom-gray font-roboto text-xl font-bold">
          {userProfile.name}
        </p>
        <p className="text-gray-500 font-roboto text-base font-normal">
          {userProfile.location}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
