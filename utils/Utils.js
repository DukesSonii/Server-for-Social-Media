const ta = require("time-ago");

const mapPostOutput = (post, userId) => {
  return {
    _id: post._id,
    caption: post.caption,
    image: post.image,
    owner: {
      _id: post.owner._id,
      name: post.owner.name,
      avatar: post.owner.avatar,
    },
    likesCount: post.likes.length,
    isLiked: post.likes.includes(userId),
    timeAgo: ta.ago(post.createdAt),

    // Map through comments to include author details and time ago
    comments: post.comments.map((comment) => ({
      _id: comment._id,
      author: {
        _id: comment.author._id,
        name: comment.author.name,
        avatar: comment.author.avatar, // Assuming the author object contains an avatar
      },
      text: comment.text,
      timeAgo: ta.ago(comment.timestamp),
    })),
  };
};

module.exports = {
  mapPostOutput,
};
