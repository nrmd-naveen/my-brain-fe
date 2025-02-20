import { Content } from "../../services/types";
import { LinkSVG, TrashIcon } from "../icons/icnonSvg";
import { deleteContent, fetchContents } from "../../services/api";
import { alertState, contentState, LoadingState } from "../../recoil/atom";
import { useSetRecoilState } from "recoil";
import { formatDistanceToNow, } from 'date-fns';


// export const CardNew = ({ content }: { content: Content }) => {

//     return (
//         <>
//             <div className=" mx-6 rounded-[24px] bg-neutral-50 hover:bg-neutral-100 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] relative p-2 no-underline  transition-colors bg-neutral-800/90 hover:bg-neutral-800/80">
//                 <div className="relative mb-6  w-full rounded-[20px] shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]">
//                     <div className="relative mb-6  w-full rounded-[20px] shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]">
//                 <img alt="Landing Page" loading="lazy" className="absolute inset-0 size-full rounded-[16px] object-cover " src="https://my-brain-store.s3.eu-north-1.amazonaws.com/user_4/thumbnails/Skiper_UI.png" />
//                     <div className="absolute inset-0 rounded-[16px]">
//                         <div className="absolute inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]">

//                         </div>
//                         <div className="absolute inset-0 rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15),0px_1px_1px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_1px_rgba(0,0,0,0.15)_inset,0px_0px_1px_0px_rgba(0,0,0,0.15)]">
//                         </div>
//                     </div>
//             </div>
//                 <div className="absolute inset-0 rounded-[16px]">
//                         <div className="absolute inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]">
                            
//                     </div>
//                         <div className="absolute inset-0 rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15),0px_1px_1px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_1px_rgba(0,0,0,0.15)_inset,0px_0px_1px_0px_rgba(0,0,0,0.15)]">
//                         </div>
//                     </div>
//                 </div>
//                 <h3 className="mt-2 px-1 text-lg font-semibold leading-tight w-full text-neutral-200">Landing Page</h3>
//                 <p className="px-1 pb-2 text-sm text-neutral-400">Modern landing page template featuring Framer Motion animations, custom navigation components, and responsive design optimized for conversions.</p>
//             </div>
//         </>
//     )
// }

const Card = ({ content }: { content: Content }) => {
    const setIsLoading = useSetRecoilState(LoadingState);
    const setContent = useSetRecoilState(contentState)
    const setAlert = useSetRecoilState(alertState)
    const url = new URL(content.link);
    const getYTVideoID = () => {
        if (url.searchParams.get('v')) return url.searchParams.get('v')
        if (url.pathname.includes('shorts')) return url.pathname.split('/')[2]
        if (url.hostname.includes('youtu.be')) return url.pathname.split('/')[1]
        return '4N3hCa6y-8A'
    }
    const getInstaPostID = () => {
        if (url.pathname.includes('p') || url.pathname.includes('reel')) return url.pathname.split('/')[2]
        return null
    }

    const handleCopy = (e: any, link: string) => {
        e.preventDefault();
        if (navigator.clipboard) {
        navigator.clipboard.writeText(link).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Error copying text using Clipboard API: ', err);
            setAlert((prev) => ({
                ...prev,
                message: "Error while copying link!",
                type: "error",
                isVisible: true,
            }))
        });
        } else {
        // Handles All Mobile
        const textArea = document.createElement('textarea');
        textArea.value = link;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setAlert((prev) => ({
            ...prev,
            message: "Link copied successfully!",
            type: "success",
            isVisible: true,
        }))
        }
    };

    
    const HandleDelete = async (e: any, id: number) => {
        e.preventDefault();
        setIsLoading(true);
        const deleted = await deleteContent(id);
        fetchContents()
            .then((res) => {
            setContent(res.data)
        })
        setIsLoading(false);
        if (deleted) {
            setAlert((prev) => ({
                ...prev,
                message: "Content deleted successfully!",
                type: "success",
                isVisible: true,
            }))
        }
        else {
            setAlert((prev) => ({
                ...prev,
                message: "Something went wrong",
                type: "error",
                isVisible: true,
            }))
        }
    }

    
    return <>
        <div className="mx-6 font-poppins my-6  sm:w-96 rounded-[24px] bg-neutral-50 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] relative p-2 md:p-3 no-underline  transition-colors bg-neutral-800/90 ---hver:bg-neutral-800/80">
                <div className="flex justify-between items-center w-full p-1 pb-3 ">
                <div className="flex w-8/12 md:w-8/12 gap-4 justify-between ">
                    <button
                        className="flex w-1/2 items-center justify-between "
                        onClick={(e) => HandleDelete(e, content.id)}
                    >
                        <div className="flex w-full justify-around items-end text-neutral-300 text-xs md:text-sm  inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)] px-3 pb-1 pt-[2px] ">
                        <p>Delete</p>    
                            <TrashIcon />
                        </div>
                    </button>
                    <button
                        className="flex w-1/2 items-center justify-between "
                        onClick={(e) => handleCopy(e, content.link)}
                    >
                        <div className="flex w-full justify-around items-end text-neutral-300 text-xs md:text-sm  inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)] px-3 pb-1 pt-[2px]">
                            <p>Copy</p>    
                                <LinkSVG />
                        </div>
                    </button>
                </div>
                        <div className="right text-neutral-300/50 font-medium text-right text-xs md:pl-4 pr-1 md:pr-2">
                            <TimeAgo key={content.id} timestamp={content.createdAt} />
                        </div>
                    </div>
                <div className="relative mb-6   rounded-[20px] shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]">
                <div className="relative mb-6   rounded-[20px] shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]">
                {content.type === 'Youtube' &&
                            <iframe
                                src={`https://www.youtube.com/embed/${getYTVideoID()}`}
                                className=" w-full rounded-[16px]"
                                frameBorder="0"
                                allowFullScreen
                                title="YouTube Video"
                            ></iframe>}
                        
                        {content.type === 'Instagram' && 
                             <iframe
                                src={`https://www.instagram.com/p/${getInstaPostID()}/embed`}
                                className="rounded-[16px] h-96 w-full"
                            title="Instagram Post"
                            ></iframe>}
                        {content.type === 'Twitter' &&
                            <iframe
                            src={`https://twitframe.com/show?url=${content.link}`.replace('x.com', 'twitter.com')}
                            className="rounded-[16px] w-full h-96 "
                            title="Twitter Post"
                        ></iframe>
                        }
                    {content.type === 'Others' && <img className="w-full h-full  rounded-[16px]" src={content.thumbnail} alt="thumbnail" />}
                    <div className="absolute inset-0 rounded-[16px]">
                        <div className="absolute inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]">

                        </div>
                        <div className="absolute inset-0 rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15),0px_1px_1px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_1px_rgba(0,0,0,0.15)_inset,0px_0px_1px_0px_rgba(0,0,0,0.15)]">
                        </div>
                    </div>
            </div>
                <div className="absolute inset-0 rounded-[16px]">
                        <div className="absolute inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]">
                            
                    </div>
                        <div className="absolute inset-0 rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15),0px_1px_1px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_1px_rgba(0,0,0,0.15)_inset,0px_0px_1px_0px_rgba(0,0,0,0.15)]">
                        </div>
                    </div>
            </div>
            <a target="_blank" href={content.link} >

                <h3 className="mt-2 px-1 text-lg font-semibold leading-tight w-full text-neutral-200">{content.title}</h3>
            </a>
            <p className="px-1 pb-2 text-sm text-neutral-400 mt-1">{content.description}</p>
            <div className="flex  pt-4 flex-wrap gap-3">
                    {content.tags.map((tag) => {
                        return <Tag tag={tag} />
                    })}
                </div>
            </div>
        
    </>
};

// const Confirmation = () => {

//     return (
//         <Dialog
//             isOpen={false}
//             onClose={() => onClose()}
//         >
//             <h1>Are you sure?</h1>
//             <Button
//                 text='Yes'
//                 onClick={() => handleDelete()}
//                 variant='primary'
//             />
//             <Button
//                 text='No'
//                 onClick={() => onClose()}
//                 variant='primary'
//             />
//         </Dialog>
//     )
// }


const TimeAgo = ({ timestamp }: { timestamp: string }) => {
    const relativeTime = formatDistanceToNow(new Date(timestamp), { addSuffix: true });

    return (
        <div>
            <p>{relativeTime}</p>
        </div>
    )
}

const Tag = ({ tag }: { tag: string }) => {
    return <div
    id={tag}
    className="w-fit inset-0 bg-neutral-600 shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)] rounded-full px-4 py-1 text-myblack-text">
        <span className="text-neutral-300 text-xs">
            #{tag}
        </span>      
    </div>
}
export default Card;


//Old Card
    // return <>
    //     <div className="px-6 md:py-2 py-3 font-poppins max-w-96" id={content.id+""}>
    //     <div  className=" md:mx-2 backdrop-filter backdrop-blur-sm bg-opacity-60 bg-[#d3d3d3]  rounded-3xl border-2 shadow-md border-[#bcbcbc] sm:w-72 min-h-32 p-2 ">
    //         <div className="w-full bg--200 h-full bg-myblack rounded-[4px] p-2">
    //             <div className="w-full ">
    //                 <h2 className="font-bold ">{content.title}</h2>
    //             </div>
    //                 <div className="w-full py-2 flex justify-center">
    //                     {content.type === 'Youtube' &&
    //                         <iframe
    //                             src={`https://www.youtube.com/embed/${getYTVideoID()}`}
    //                             className="h-full w-full rounded-[6px]"
    //                             frameBorder="0"
    //                             allowFullScreen
    //                             title="YouTube Video"
    //                         ></iframe>}
                        
    //                     {content.type === 'Instagram' && 
    //                          <iframe
    //                             src={`https://www.instagram.com/p/${getInstaPostID()}/embed`}
    //                         width="265"
    //                             height="530"
    //                             className="rounded-lg"
    //                         title="Instagram Post"
    //                         ></iframe>}
    //                     {content.type === 'Twitter' &&
    //                         <iframe
    //                         src={`https://twitframe.com/show?url=${content.link}`.replace('x.com', 'twitter.com')}
    //                         width="265"
    //                         height="530"
    //                         title="Twitter Post"
    //                     ></iframe>
    //                     }
    //                 {content.type === 'Others' && <img className="w-full h-full border-[1px] border-mywhite-border  rounded-[6px]" src={content.thumbnail} alt="thumbnail" />}
    //             </div>
                
    //             <div className="w-ful">
    //                 <p>{content.description}</p>
    //             </div>
    //             <div className="flex  pt-4 flex-wrap gap-3">
    //                 {content.tags.map((tag) => {
    //                     return <Tag tag={tag} />
    //                 })}
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // </>