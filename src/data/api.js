export const getComments = async () => {
  return [
    {
      id: "1",
      body: "I had really great time there. Especially love desserts.",
      username: "Jack",
      userId: "1",
      createdAt: "2020-02-06T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Best place for lunch. I love to go there with my friends.",
      username: "Bruce",
      userId: "2",
      createdAt: "2021-12-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "I rate it 10/10. Love vegan sushi!",
      username: "Katie",
      userId: "3",
      createdAt: "2022-01-24T23:00:33.010+02:00",
    },

  ];
};

export const createComment = async (text, username) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    userId: "1",
    username: username,
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
