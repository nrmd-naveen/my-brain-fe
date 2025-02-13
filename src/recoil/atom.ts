import { atom } from "recoil";
import { Content } from "../assets/services/types";

const initialState = [
    {
        "id": 8,
        "title": "UI element Library",
        "description": "it has some buttons, inputs elements and many more",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/UI_element Library.png",
        "link": "https://www.figma.com/community/plugin/1336369411549677436/ui-elements-the-ultimate-design-library",
        "type": "Others",
        "createdAt": "2025-02-09T18:53:21.470Z",
        "userId": 4,
        "tags": [
            "figma",
            "ui",
            "elements"
        ]
    },
    {
        "id": 11,
        "title": "Youtube Video Downloader",
        "description": "Youtube Video and Audio Downloader",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Youtube_Video Downloader.png",
        "link": "https://ddownr.com/enab/youtube-video-downloader",
        "type": "Others",
        "createdAt": "2025-02-09T19:02:31.415Z",
        "userId": 4,
        "tags": [
            "yt",
            "youtube",
            "download"
        ]
    },
    {
        "id": 12,
        "title": "Youtube Video Downloader",
        "description": "Youtube Video and Audio Downloader",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Youtube_Video Downloader.png",
        "link": "https://ddownr.com/enab/youtube-video-downloader",
        "type": "Others",
        "createdAt": "2025-02-09T19:02:39.394Z",
        "userId": 4,
        "tags": [
            "yt",
            "youtube",
            "download"
        ]
    },
    {
        "id": 13,
        "title": "leetcode profile",
        "description": "my leetcode profile",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/leetcode_profile.png",
        "link": "https://leetcode.com/u/naveen_nrmd/",
        "type": "Others",
        "createdAt": "2025-02-09T19:09:11.108Z",
        "userId": 4,
        "tags": [
            "leetcode",
            "dsa"
        ]
    },
    {
        "id": 14,
        "title": "Email JS",
        "description": "A service to send email",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Email_JS.png",
        "link": "https://www.emailjs.com/",
        "type": "Others",
        "createdAt": "2025-02-10T06:45:03.294Z",
        "userId": 4,
        "tags": [
            "email",
            "emailjs"
        ]
    },
    {
        "id": 15,
        "title": "Sora Font",
        "description": "Google Font - sora",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Sora_Font.png",
        "link": "https://fonts.google.com/specimen/Sora",
        "type": "Others",
        "createdAt": "2025-02-10T07:52:42.934Z",
        "userId": 4,
        "tags": [
            "sora",
            "google font",
            "font"
        ]
    },
    {
        "id": 16,
        "title": "Sora Font check",
        "description": "Google Font - sora check",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Sora_Font check.png",
        "link": "https://fonts.google.com/specimen/Sora",
        "type": "Others",
        "createdAt": "2025-02-10T07:55:10.037Z",
        "userId": 4,
        "tags": [
            "sora",
            "google font",
            "font"
        ]
    },
    {
        "id": 17,
        "title": "Skiper UI",
        "description": "A ui component site",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Skiper_UI.png",
        "link": "https://skiper-ui.com/",
        "type": "Others",
        "createdAt": "2025-02-10T08:12:05.854Z",
        "userId": 4,
        "tags": [
            "ui",
            "element\\",
            "component"
        ]
    },
    {
        "id": 18,
        "title": "AI Code editor",
        "description": "AI based IDE",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/AI_Code editor.png",
        "link": "https://www.cursor.com/",
        "type": "Others",
        "createdAt": "2025-02-10T08:14:10.517Z",
        "userId": 4,
        "tags": [
            "cursor",
            "ide"
        ]
    },
    {
        "id": 19,
        "title": "GSAP",
        "description": "Animation framework for javascript",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/GSAP.png",
        "link": "https://gsap.com/",
        "type": "Others",
        "createdAt": "2025-02-10T08:16:14.614Z",
        "userId": 4,
        "tags": [
            "cursor",
            "ide",
            "js",
            "animation",
            "gsap"
        ]
    },
    {
        "id": 20,
        "title": "Scroll Animation",
        "description": "Framer Motion tutorial for scroll animations by Manu Arora",
        "thumbnail": null,
        "link": "https://www.youtube.com/watch?v=IgRPQwZkNPY",
        "type": "Youtube",
        "createdAt": "2025-02-10T16:49:05.530Z",
        "userId": 4,
        "tags": [
            "animation",
            "framer motion",
            "tutorial",
            "tailwind",
            "scroll"
        ]
    },
    {
        "id": 21,
        "title": "short video",
        "description": "test video",
        "thumbnail": null,
        "link": "https://youtube.com/shorts/ei6ZAgeju3E?si=5OQHaZ1LeOTPGaDx",
        "type": "Youtube",
        "createdAt": "2025-02-10T17:28:16.838Z",
        "userId": 4,
        "tags": [
            "yt",
            "shorts"
        ]
    },
    {
        "id": 22,
        "title": "Testing yt video",
        "description": "full video test",
        "thumbnail": null,
        "link": "https://youtu.be/CX6a-YYhY-8?si=TICXerSAOTVH4bnu",
        "type": "Youtube",
        "createdAt": "2025-02-10T17:29:19.793Z",
        "userId": 4,
        "tags": [
            "yt",
            "test"
        ]
    },
    {
        "id": 23,
        "title": "insta video check",
        "description": "insta",
        "thumbnail": null,
        "link": "https://www.instagram.com/reel/CiiHktvOfma/?igshid=MDJmNzVkMjY=",
        "type": "Instagram",
        "createdAt": "2025-02-10T18:14:38.668Z",
        "userId": 4,
        "tags": [
            "insta"
        ]
    },
    {
        "id": 24,
        "title": "Insta Song Check",
        "description": "check ",
        "thumbnail": null,
        "link": "https://www.instagram.com/priyankank?igsh=YzljYTk1ODg3Zg==",
        "type": "Instagram",
        "createdAt": "2025-02-10T19:45:02.276Z",
        "userId": 4,
        "tags": [
            "insta"
        ]
    },
    {
        "id": 25,
        "title": "yt video",
        "description": "ch",
        "thumbnail": null,
        "link": "https://www.youtube.com/watch?v=7168SXKS0_c",
        "type": "Youtube",
        "createdAt": "2025-02-10T19:48:47.374Z",
        "userId": 4,
        "tags": [
            "yt"
        ]
    },
    {
        "id": 26,
        "title": "insta check",
        "description": "insta post",
        "thumbnail": null,
        "link": "https://www.instagram.com/p/DFu-emiN74F/?igsh=YzljYTk1ODg3Zg==",
        "type": "Instagram",
        "createdAt": "2025-02-10T19:58:47.986Z",
        "userId": 4,
        "tags": [
            "insta"
        ]
    },
    {
        "id": 27,
        "title": "insta reel",
        "description": "reel",
        "thumbnail": null,
        "link": "https://www.instagram.com/reel/DFxoX8GJimR/?igsh=YzljYTk1ODg3Zg==",
        "type": "Instagram",
        "createdAt": "2025-02-10T20:01:02.598Z",
        "userId": 4,
        "tags": [
            "insta"
        ]
    },
    {
        "id": 28,
        "title": "Linked In test",
        "description": "Linked in test post",
        "thumbnail": null,
        "link": "https://www.linkedin.com/posts/akshaymarch7_every-video-every-meme-every-post-shapes-activity-7294585773348073472-F7_q?utm_source=share&utm_medium=member_android",
        "type": "LinkedIn",
        "createdAt": "2025-02-10T20:05:21.685Z",
        "userId": 4,
        "tags": [
            "linkedin"
        ]
    },
    {
        "id": 29,
        "title": "ln",
        "description": "ln",
        "thumbnail": null,
        "link": "https://www.linkedin.com/posts/akshaymarch7_kuchtologkahenge-activity-7292776540822548480-l4gf?utm_source=share&utm_medium=member_desktop",
        "type": "LinkedIn",
        "createdAt": "2025-02-11T12:16:30.868Z",
        "userId": 4,
        "tags": [
            "ln"
        ]
    },
    {
        "id": 30,
        "title": "ln check`",
        "description": "ln check",
        "thumbnail": null,
        "link": "https://accounts.google.com/gsi/button?logo_alignment=center&shape=pill&size=large&text=continue_with&theme=filled_blue&type=undefined&width=320&client_id=990339570472-k6nqn1tpmitg8pui82bfaun3jrpmiuhs.apps.googleusercontent.com&iframe_id=gsi_591880_374596&as=sTLVbpftcDyLhq0Mi4A3%2Bw&hl=en_US",
        "type": "LinkedIn",
        "createdAt": "2025-02-11T12:39:52.481Z",
        "userId": 4,
        "tags": [
            "ln"
        ]
    },
    {
        "id": 31,
        "title": "dasasdas",
        "description": "adsasda",
        "thumbnail": null,
        "link": "https://accounts.google.com/gsi/button?logo_alignment=center&shape=pill&size=large&text=continue_with&theme=filled_blue&type=undefined&width=320&client_id=990339570472-k6nqn1tpmitg8pui82bfaun3jrpmiuhs.apps.googleusercontent.com&iframe_id=gsi_763629_412565&as=0BbGpo9baProZzIWbfKF%2Fw&hl=en_US",
        "type": "LinkedIn",
        "createdAt": "2025-02-11T12:42:44.404Z",
        "userId": 4,
        "tags": [
            "asd"
        ]
    },
    {
        "id": 32,
        "title": "linkedIn",
        "description": "ln",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/linkedIn.png",
        "link": "https://www.linkedin.com/posts/chetnavasishth_chetchat-english-learnenglish-activity-7292538262491955200-ICmn?utm_source=share&utm_medium=member_android",
        "type": "Others",
        "createdAt": "2025-02-11T17:44:04.262Z",
        "userId": 4,
        "tags": [
            "linkedin"
        ]
    },
    {
        "id": 33,
        "title": "Chetna Vasishth on LinkedIn: #chetchat #english #learnenglish #trendingreels #englishlanguage… | 12 comments",
        "description": "ln",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/ln.png",
        "link": "https://www.linkedin.com/posts/chetnavasishth_chetchat-english-learnenglish-activity-7292538262491955200-ICmn?utm_source=share&utm_medium=member_android",
        "type": "Others",
        "createdAt": "2025-02-11T18:17:42.379Z",
        "userId": 4,
        "tags": []
    },
    {
        "id": 34,
        "title": "Chetna Vasishth on LinkedIn: #chetchat #english #learnenglish #trendingreels #englishlanguage… | 12 comments",
        "description": "ln",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/ln.png",
        "link": "https://www.linkedin.com/posts/chetnavasishth_chetchat-english-learnenglish-activity-7292538262491955200-ICmn?utm_source=share&utm_medium=member_android",
        "type": "Others",
        "createdAt": "2025-02-11T18:33:49.448Z",
        "userId": 4,
        "tags": []
    },
    {
        "id": 35,
        "title": "Chetna Vasishth on LinkedIn: #chetchat #english #learnenglish #trendingreels #englishlanguage… | 12 comments",
        "description": "ln",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/dasd.png",
        "link": "https://www.linkedin.com/posts/chetnavasishth_chetchat-english-learnenglish-activity-7292538262491955200-ICmn?utm_source=share&utm_medium=member_android",
        "type": "Others",
        "createdAt": "2025-02-11T18:37:19.209Z",
        "userId": 4,
        "tags": []
    },
    {
        "id": 36,
        "title": "Chetna Vasishth on LinkedIn: #chetchat #english #learnenglish #trendingreels #englishlanguage… | 12 comments",
        "description": "kjhk",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/kjhkh.png",
        "link": "https://www.linkedin.com/posts/chetnavasishth_chetchat-english-learnenglish-activity-7292538262491955200-ICmn?utm_source=share&utm_medium=member_android",
        "type": "Others",
        "createdAt": "2025-02-11T18:40:42.384Z",
        "userId": 4,
        "tags": []
    },
    {
        "id": 37,
        "title": "",
        "description": "ads",
        "thumbnail": null,
        "link": "https://x.com/MichaelFilipiuk/status/1888890604392001834?t=SslJ_xleOUaIGnlfm-TShw&s=19",
        "type": "Twitter",
        "createdAt": "2025-02-11T18:51:14.843Z",
        "userId": 4,
        "tags": []
    },
    {
        "id": 38,
        "title": "",
        "description": "fb",
        "thumbnail": null,
        "link": "https://www.facebook.com/share/r/15upNpUUCM/",
        "type": "Facebook",
        "createdAt": "2025-02-11T19:13:38.789Z",
        "userId": 4,
        "tags": []
    },
    {
        "id": 39,
        "title": "fb",
        "description": "fb",
        "thumbnail": null,
        "link": "https://www.facebook.com/share/p/1Bn4tUqwJx/",
        "type": "Facebook",
        "createdAt": "2025-02-11T19:15:17.225Z",
        "userId": 4,
        "tags": []
    },
    {
        "id": 40,
        "title": "Facebook Post",
        "description": "Fb",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Facebook_Post.png",
        "link": "https://www.facebook.com/share/18MM1DZrnS/",
        "type": "Others",
        "createdAt": "2025-02-12T18:36:54.164Z",
        "userId": 4,
        "tags": [
            "fb"
        ]
    },
    {
        "id": 41,
        "title": "fb eco",
        "description": "fb",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/fb_eco.png",
        "link": "https://www.facebook.com/share/r/15upNpUUCM/",
        "type": "Others",
        "createdAt": "2025-02-12T18:39:45.853Z",
        "userId": 4,
        "tags": []
    },
    {
        "id": 42,
        "title": "Fb",
        "description": "fb",
        "thumbnail": "https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Fb.png",
        "link": "https://www.facebook.com/share/r/15upNpUUCM/",
        "type": "Others",
        "createdAt": "2025-02-12T18:40:54.997Z",
        "userId": 4,
        "tags": []
    }
]

export const contentState = atom<Content[]>({
  key: "contentState",
  default: initialState,
});

export const LoadingState = atom<boolean>({
  key: "LoadingState",
  default: false,
})
