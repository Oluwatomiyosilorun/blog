import Axios from "axios";

const siteURL = "https://techcrunch.com";

export const state = () => ({
  posts: [],
  singlePost: [],
  isFetchingSinglePost: false,
  isFetchingPosts: false,
});

export const getters = {
  getIsFetchingPosts(state) {
    return state.isFetchingPosts;
  },
  mainPost(state) {
    if (state.posts.length < 1) {
      return {};
    }
    return state.posts[0];
  },
  otherPosts(state) {
    return state.posts.filter((post, index) => index !== 0);
  },
  getIsFetchingSinglePost(state) {
    return state.isFetchingSinglePost;
  },
  getSinglePost(state) {
    if(state.singlePost.length < 1 ){
      return {};
    }
    
    return state.singlePost[0];
  },
};

export const mutations = {
  IS_FETCHING_POSTS(state) {
    state.isFetchingPosts = true;
  },
  IS_FETCHING_POSTS_SUCCESS(state, posts) {
    state.isFetchingPosts = false;
    state.posts = posts;
  },

  IS_FETCHING_SINGLE_POST(state) {
    state.isFetchingSinglePost = true;
  },

  IS_FETCHING_SINGLE_POST_SUCCESS(state, post) {
    state.isFetchingSinglePost = false;
    state.singlePost = post;
  },

  
};

export const actions = {
  fetchPosts({ commit }) {
    commit("IS_FETCHING_POSTS");
    let url = `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=7`;
    Axios.get(url)
      .then((response) => {
        commit("IS_FETCHING_POSTS_SUCCESS", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  fetchPost({ commit }, slug) {
    commit("IS_FETCHING_SINGLE_POST");
    let url = `${siteURL}/wp-json/wp/v2/posts?slug=${slug}`;
    Axios.get(url)
      .then((response) => {
        commit("IS_FETCHING_SINGLE_POST_SUCCESS", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
