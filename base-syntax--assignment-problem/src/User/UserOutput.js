import React from 'react';

const userOutput = ( props ) => {
  return (
  <div className="UserOutput">
  <p>
    User {props.userName}, age {props.age} says:
    1) This is a paragraph of user output it is the best paragraph the most best paragraph you've ever seen. Why can't I write "lorem" and then hit tab though in order to get a paragraph of latin nonsense on command?
  </p>
  <p>2) Does this second paragraph also come through? It would be awesome if it does because that would mean I could return 2 different "p" elements within the same component.</p>
  </div>
  )
};

export default userOutput;
