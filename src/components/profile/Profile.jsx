import React, { useEffect, useState } from 'react';
import { print } from 'graphql';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { USER_BY_ID } from '../../graphql/users/user-queries';

const Profile = () => {
  const [user, setUser] = useState(null);
  let { userid } = useParams();

  useEffect(() => {
    if (userid)
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: 'post',
        data: {
          query: print(USER_BY_ID),
          variables: {
            queryParams: {
              id: Number(userid),
            },
          },
        },
      }).then(
        (res) => {
          setUser(res.data.data.Users[0]);
        },
        (err) => console.dir(err)
      );
  }, [userid]);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
