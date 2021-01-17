const { Post } = require("../models");

const postData = [
  {
    title: "Gizmodo is #1",
    post_content:
      "Originally launched as a part of Gawker Media Network, Gizmodo is a design, technology, science and science fiction website that also features articles on politics.",
    user_id: 3,
  },
  {
    title: "The Verge is #2",
    post_content:
      "The Verge is an ambitious multimedia effort founded nine years ago to examine how technology will change life in the future for a massive mainstream audience.",
    user_id: 1,
  },
  {
    title: "TechCrunch is #3",
    post_content:
      "Founded by Michael Arrington and later sold to AOL, TechCrunch has remained as one of the leaders covering tech industry news.",
    user_id: 2,
  },
  {
    title: "Wired is #4",
    post_content:
      "Wired.com focuses on how emerging technologies affect culture, the economy, and politics.The website provides an in-depth coverage of current and future trends in technology.",
    user_id: 5,
  },
  {
    title: "Ars Technica is #5",
    post_content:
      "Founded by Ken Fisher over 20 years ago, Ars Technica (Art of Technology) is devoted to the latest technology that would cater to what he called "alpha geeks": technologists and IT professionals.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
