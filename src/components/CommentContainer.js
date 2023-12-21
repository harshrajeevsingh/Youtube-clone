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
    <div className="flex items-center p-2  rounded-xl">
      <img
        src="https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg"
        alt="avatar"
        className="w-14 h-14 rounded-full"
      ></img>
      <div className="px-3">
        <p className="dark:text-slate-100 font-medium">{name}</p>
        <p className="dark:text-slate-200">{text}</p>
        <div className="flex gap-5 m-1 py-1 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-thumbs-up"
          >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-thumbs-up"
          >
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-7 border-l-2 border-l-slate-600 border-dashed">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="mt-5 max-w-[930px]">
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
