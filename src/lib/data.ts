import { getCollection, type CollectionEntry } from 'astro:content'

// 文章按时间排序
export function postsSort(posts: CollectionEntry<'posts'>[]) {
  return posts.slice().sort((a, b) => {
    const dateA = a.data.updatedDate ?? a.data.pubDate
    const dateB = b.data.updatedDate ?? b.data.pubDate
    return new Date(dateB).getTime() - new Date(dateA).getTime()
  })
}

// 获取所有非草稿文章，按时间排序
export async function getAllPosts(): Promise<CollectionEntry<'posts'>[]> {
  const allPosts = await getCollection('posts')
  return postsSort(allPosts.filter((post) => !post.data.draft))
}

// 获取所有置顶文章
export async function getPinnedPosts(): Promise<CollectionEntry<'posts'>[]> {
  const allPosts = await getCollection('posts')
  const pinnedPosts = allPosts.filter((post) => post.data.pinned)
  return postsSort(pinnedPosts)
}

// 获取最新的固定数量的文章
export async function getNumPosts(size: number): Promise<CollectionEntry<'posts'>[]> {
  const allPosts = await getCollection('posts')
  return postsSort(allPosts.filter((post) => !post.data.draft)).slice(0, size)
}

// 获取标签
export async function getAllTags(): Promise<Record<string, number>> {
  const allPosts = await getAllPosts()
  const tags = allPosts.flatMap((post) => post.data.tags || [])
  return tags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )
}

// 项目按时间排序
export function projectsSort(projects: CollectionEntry<'projects'>[]) {
  return projects.slice().sort((a, b) => {
    const dateA = a.data.updatedDate ?? a.data.pubDate
    const dateB = b.data.updatedDate ?? b.data.pubDate
    return new Date(dateB).getTime() - new Date(dateA).getTime()
  })
}

// 获取所有非草稿项目，按时间排序
export async function getAllProjects(): Promise<CollectionEntry<'projects'>[]> {
  const allProjects = await getCollection('projects')
  return projectsSort(allProjects.filter((project) => !project.data.draft))
}

// 获取所有置顶项目
export async function getPinnedProjects(): Promise<CollectionEntry<'projects'>[]> {
  const allProjects = await getCollection('projects')
  const pinnedProjects = allProjects.filter((project) => project.data.pinned)
  return projectsSort(pinnedProjects)
}

// 获取最新的固定数量的项目
export async function getNumProjects(size: number): Promise<CollectionEntry<'projects'>[]> {
  const allProjects = await getCollection('projects')
  return projectsSort(allProjects.filter((project) => !project.data.draft)).slice(0, size)
}

// 教育内容按时间排序
export function educationSort(education: CollectionEntry<'education'>[]) {
  return education.slice().sort((a, b) => {
    const dateA = a.data.updatedDate ?? a.data.pubDate
    const dateB = b.data.updatedDate ?? b.data.pubDate
    return new Date(dateB).getTime() - new Date(dateA).getTime()
  })
}

// 获取所有非草稿教育内容，按时间排序
export async function getAllEducation(): Promise<CollectionEntry<'education'>[]> {
  const allEducation = await getCollection('education')
  return educationSort(allEducation.filter((item) => !item.data.draft))
}

// 获取所有置顶教育内容
export async function getPinnedEducation(): Promise<CollectionEntry<'education'>[]> {
  const allEducation = await getCollection('education')
  const pinnedEducation = allEducation.filter((item) => item.data.pinned)
  return educationSort(pinnedEducation)
}

// 获取最新的固定数量的教育内容
export async function getNumEducation(size: number): Promise<CollectionEntry<'education'>[]> {
  const allEducation = await getCollection('education')
  return educationSort(allEducation.filter((item) => !item.data.draft)).slice(0, size)
}
