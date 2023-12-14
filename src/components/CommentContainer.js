import React from "react";

const commentsData = [
  {
    name: "Harsh Singh",
    text: "Namste, Pranam! Kem Cho bhai Log? This is Comment",
    replies: [],
  },
  {
    name: "Harsh Singh",
    text: "Namste, Pranam! Kem Cho bhai Log? This is Comment.",
    replies: [
      {
        name: "Harsh Singh",
        text: "Namste, Pranam! Kem Cho bhai Log? This is Nestesd Comment 🪹",
        replies: [],
      },
      {
        name: "Harsh Singh",
        text: "Namste, Pranam! Kem Cho bhai Log? This is Nestesd Comment 🪹",
        replies: [
          {
            name: "Harsh Singh",
            text: "Namste, Pranam! Kem Cho bhai Log? This is Nestesd Comment 🪹",
            replies: [
              {
                name: "Harsh Singh",
                text: "Namste, Pranam! Kem Cho bhai Log? This is Nestesd Comment 🪹",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Harsh Singh",
    text: "Namste, Pranam! Kem Cho bhai Log? This is Comment.",
    replies: [],
  },
  {
    name: "Harsh Singh",
    text: "Namste, Pranam! Kem Cho bhai Log? This is Comment.",
    replies: [
      {
        name: "Harsh Singh",
        text: "Namste, Pranam! Kem Cho bhai Log? This is Nestesd Comment 🪹",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 bg-gray-200 rounded-md">
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png"
        alt="avatar"
        className="w-10 h-10"
      ></img>
      <div className="px-3">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-7 border border-l-slate-600 border-dashed">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="mt-5">
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
