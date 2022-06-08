// Api url
const base_url = `https://christopher-tonnesland.no/School-projects/project_exam_site/wp-json`;

// All endpoints to the base_url
const end = {
 po: `/wp/v2/posts?per_page=5`,
 pd: `/wp/v2/posts`,
 pg: `/wp/v2/pages`,
 co: `/wp/v2/comments`,
 me: `/wp/v2/media`,
 nav: `/wp/v2/navigation`,
 tag: `/wp/v2/tags`,
 cat: `/wp/v2/categories`,
 //  filter: `/wp-json/wp/v2/posts/?filter[${filterOption}]`
};

// Fetching post data
export async function fetchPosts() {
 try {
  const request = await fetch(base_url + end.po);
  const response = await request.json();
  return response;
 } catch (err) {
  console.error(err);
 }
}

// Fetching post detail data
export async function fetchPostDetails(id) {
 try {
  const request = await fetch(base_url + end.pd + `/${id}`);
  const response = await request.json();
  const data = response;
  //   console.log("Post details: ", data);
  return data;
 } catch (err) {
  console.error(err);
 }
}

// fetching comments data
export async function fetchComments(id) {
 try {
  const request = await fetch(base_url + end.co + `/?${id}`);
  const response = await request.json();
  //   console.log("Comments: ", response);
  return response;
 } catch (err) {
  console.error(err);
 }
}

// Fetching media data
export async function fetchMedia(id) {
 try {
  const request = await fetch(base_url + end.me + `/?${id}`);
  const response = await request.json();
  //   console.log("Media: ", response);
  return response;
 } catch (err) {
  console.error(err);
 }
}

// Fetching tag data
export async function fetchTags() {
 try {
  const request = await fetch(base_url + end.tag);
  const response = await request.json();
  //   console.log("Tags: ", response);
  return response;
 } catch (err) {
  console.error(err);
 }
}

// Fetching categories data
export async function fetchCategories() {
 try {
  const request = await fetch(base_url + end.cat);
  const response = await request.json();
  //   console.log("Categories: ", response);
  return response;
 } catch (err) {
  console.error(err);
 }
}

// Fetching navigation data
export async function fetchNavigation() {
 try {
  const request = await fetch(base_url + end.nav);
  const response = await request.json();
  //   console.log("Navigation: ", response);
  return response;
 } catch (err) {
  console.error(err);
 }
}

// Fetching navigation data
export async function fetchPages() {
 try {
  const request = await fetch(base_url + end.pg);
  const response = await request.json();
  //   console.log("Pages: ", response);
  return response;
 } catch (err) {
  console.error(err);
 }
}
