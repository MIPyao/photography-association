import mongoose, { Schema } from "mongoose"

const NewsSchema = new Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    coverImage: { type: String },
    tags: [{ type: String }],
    publishedAt: { type: Date, default: Date.now },
    authorId: { type: Schema.Types.ObjectId, ref: "User" },
    authorName: { type: String },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
)

export const NewsModel = (mongoose.models.News || mongoose.model("News", NewsSchema)) as mongoose.Model<any>

