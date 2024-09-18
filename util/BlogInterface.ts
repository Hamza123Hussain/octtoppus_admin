export interface Blog {
  id: string // Unique identifier for the blog
  Title: string // Title of the blog
  CreatedBy: string // User who created the blog
  PostID: string // Unique identifier for the post
  Text: string // Main content of the blog
  Conclusion: string // Conclusion text of the blog
  CreatedAt: number // Timestamp of when the blog was created
  UserImage: string // URL of the user's image
  HeaderImageURL: string // URL of the header image
  BlogImageURLs: string[] // Array of URLs for blog images
}
