export interface VideoDto {
    id: string;
    title: string
    description: string;
    tags: Array<string>;
    videourl: string;
    videoStatus: string;
    thumbnailurl: string;
    viewCount: number;
    likeCount: number;
    disLikeCount: number;
}