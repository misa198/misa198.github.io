import { Blog as IBlog } from "types/Blog";
import Blog from "../database/models/Blog";

import { maxPageSize } from "../../constants/server";
import { GetBlogsDto } from "../dtos/blogs/get-blogs.dto";

const getBlogs = async (query: GetBlogsDto): Promise<[IBlog[], number]> => {
  const { page = 1, key } = query;
  if (!key) {
    const total = await Blog.countDocuments();
    const totalPages = Math.ceil(total / maxPageSize);
    const blogs = await Blog.find({})
      .limit(maxPageSize)
      .skip((page - 1) * maxPageSize)
      .sort({ createdAt: -1 });
    return [blogs, totalPages];
  }

  const dbQuery = {
    $or: [{ title: { $regex: new RegExp(key, "i") } }, { tags: key }],
  };
  const total = await Blog.countDocuments(dbQuery);
  const totalPages = Math.ceil(total / maxPageSize);
  const blogs = await Blog.find(dbQuery)
    .limit(maxPageSize)
    .skip((page - 1) * maxPageSize)
    .sort({ createdAt: -1 });
  return [blogs, totalPages];
};

const getBlog = async (slug: string): Promise<IBlog> => {
  const blog = await Blog.findOne({ slug });
  return blog;
};

export default { getBlogs, getBlog };