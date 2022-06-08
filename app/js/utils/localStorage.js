import { fetchPosts, fetchPages } from "../backend/apiConn.js";

export function saveToStorage(key, value) {
 localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromStorage(key) {
 try {
  return JSON.parse(localStorage.getItem(key));
 } catch {
  return null;
 }
}

export const storePageData = async (pages) => {
 try {
  const pages = await fetchPages();
  pages.forEach((e) => {
   const postTitle = e.title.rendered;
   const postId = e.id;
   const postSlug = e.slug;
   const postAuthor = e.x_author;
   const postDate = e.x_date;
   const postStatus = e.status;
   const postContent = cleanContent(e.content.rendered);
   const postExcerpt = cleanContent(e.excerpt.rendered);
   const featuredImage = e.x_featured_media;

   // Setting localstorage items
   localStorage.setItem("Title", `${postTitle}`);
   localStorage.setItem("Id", `${postId}`);
   localStorage.setItem("Slug", `${postSlug}`);
   localStorage.setItem("Author", `${postAuthor}`);
   localStorage.setItem("Date", `${postDate}`);
   localStorage.setItem("Status", `${postStatus}`);
   localStorage.setItem("Content", `${postContent}`);
   localStorage.setItem("Excerpt", `${postExcerpt}`);
   localStorage.setItem("MainImage", `${featuredImage}`);

   // Getting localstorage items
   const title = localStorage.getItem("Title");
   const id = localStorage.getItem("Id");
   const slug = localStorage.getItem("Slug");
   const author = localStorage.getItem("Author");
   const date = localStorage.getItem("Date");
   const status = localStorage.getItem("Status");
   const content = localStorage.getItem("Content");
   const excerpt = localStorage.getItem("Excerpt");
   const mainImg = localStorage.getItem("MainImage");

   const pageArray = [];
   pageArray.push({
    title: title,
    id: id,
    slug: slug,
    author: author,
    date: date,
    status: status,
    content: content,
    excerpt: excerpt,
    image: mainImg,
   });
   console.log("Page info", pageArray);
   return;
  });
 } catch (error) {
  console.log(error);
 }
};

// Removing line breaks from the content
export const cleanContent = (content) => {
 return content.replace(/\n/g, "");
};

export async function localSetItem() {
 // Sorting out all fetch data
 const post = await fetchPosts();

 // Setting post related variable
 post.forEach((e) => {
  const postTitle = e.title.rendered;
  const postId = e.id;
  const postSlug = e.slug;
  const postAuthor = e.x_author;
  const postDate = e.x_date;
  const postStatus = e.status;
  const postContent = cleanContent(e.content.rendered);
  const postExcerpt = cleanContent(e.excerpt.rendered);
  const featuredImage = e.x_featured_media;
  const postCategories = e.categories;

  // Setting localstorage items
  localStorage.setItem("Title", `${postTitle}`);
  localStorage.setItem("Id", `${postId}`);
  localStorage.setItem("Slug", `${postSlug}`);
  localStorage.setItem("Author", `${postAuthor}`);
  localStorage.setItem("Date", `${postDate}`);
  localStorage.setItem("Status", `${postStatus}`);
  localStorage.setItem("Content", `${postContent}`);
  localStorage.setItem("Excerpt", `${postExcerpt}`);
  localStorage.setItem("MainImage", `${featuredImage}`);
  localStorage.setItem("Categories", `${postCategories}`);

  // Getting localstorage items
  const title = localStorage.getItem("Title");
  const id = localStorage.getItem("Id");
  const slug = localStorage.getItem("Slug");
  const author = localStorage.getItem("Author");
  const date = localStorage.getItem("Date");
  const status = localStorage.getItem("Status");
  const content = localStorage.getItem("Content");
  const excerpt = localStorage.getItem("Excerpt");
  const mainImg = localStorage.getItem("MainImage");
  const categories = localStorage.getItem("Categories");

  const postArray = [];
  postArray.push({
   title: title,
   id: id,
   slug: slug,
   author: author,
   date: date,
   status: status,
   content: content,
   excerpt: excerpt,
   image: mainImg,
   categories: categories,
  });
  return;
 });
}
