import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Dialog from "../ui/Dialog";
import Input from "../ui/Input";
import Card from "../ui/Card";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { alertState, contentState, LoadingState } from "../../recoil/atom";
import { addContent, fetchContents } from "../../services/api";
import DotLoader from "../ui/Loader";

const Home = () => {
  const setContent = useSetRecoilState(contentState)
  const [isLoading, setIsLoading] = useRecoilState<boolean>(LoadingState)

  useEffect(() => {
    setIsLoading(true);

    fetchContents().then(res => {
        // console.log(res);
        setContent(res.data);
        setIsLoading(false);
    }).catch(error => {
        console.error("Error fetching contents:", error);
        setIsLoading(false);
    });
}, []);
  
  return (
      <>
      <DotLoader />
      <div className="flex items-center justify-center ">
            <div className="px-5 md:px-20">
                <PopUp />
                {isLoading ? <DotLoader /> : <CardComponent />}
            </div>
      </div>
      </>
  )
};

const CardComponent = () => {
    const content = useRecoilValue(contentState)
    return (
      <>
        
           { content.length === 0 ? <div className="flex items-center justify-center">
                <h1>No Content Yet</h1>
            </div>
                : (
                    <div className=" md:flex flex-wrap items-center justify-center">
                {content && content?.map(content => {
                    return <Card content={content} />
                })}
            </div>
            )
        }
                
            
        </>
  )
};

const PopUp = () => {

  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
  const setIsLoading = useSetRecoilState<boolean>(LoadingState)
  const setAlert = useSetRecoilState(alertState)
  const setContent = useSetRecoilState(contentState)
  const setOnClick = () => {
    setDialogOpen( curr => !curr)
  }
  const linkRef = useRef<HTMLInputElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const descRef = useRef<HTMLInputElement>(null)
  const tagRef = useRef<HTMLInputElement>(null)
  const [tags, setTags] = useState<string[]>([])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleNewTag()
    }
  }
  const handleNewTag = () => {
    const tag = tagRef.current?.value
    if (tag) {
      setTags(curr => [...curr, tag])
      if (tagRef.current) {
        tagRef.current.value = ''
        tagRef.current.focus()
      }
    } else {
      setAlert((prev) => ({
        ...prev,
        message: "Please fill Credentials",
        type: "error",
        isVisible: true,
      }))
    }
  }
  const handleSubmit = () => {
    if (!(linkRef.current?.value || linkRef.current?.value.length)) {
      setAlert((prev) => ({
        ...prev,
        message: "Please Enter a Link to Add",
        type: "error",
        isVisible: true,
      }))
      return;
    }
    setIsLoading(true)
    const data = {
      link: linkRef.current?.value,
      title: titleRef.current?.value,
      description: descRef.current?.value,
      tags: tags,
    }
    //@ts-ignore
    addContent(data).then(res => {
      console.log(res)
      fetchContents().then(res => {
        console.log(res)
        setContent(res.data)
      })
      setIsLoading(false)
    }).catch(error => {
      console.error("Error adding content:", error);
      setIsLoading(false)
    }) 
    setTags([])
    setDialogOpen(false)

  }

  return (
    <>
      <div className="fixed bottom-20 right-10 md:right-40 z-20 flex items-center justify-end" >
    <Button 
          text='New +'
          className="w-36 h-12 "
      onClick={()=>setOnClick()}
      variant='primary'
        />
      </div>
    <Dialog
          isOpen={isDialogOpen}
          onClose={setOnClick}
          className='flex flex-col justify-around items-center md:gap-2'
      >
        <h1 className='font-semibold text-black/80 text-lg md:text-xl py-4'>Add new Link</h1>
          {/* <h1>Add new Link</h1> */}
        <Input
            placeHolder='Link'
            ref={linkRef}
            isFullWidth={true}
            />
        <Input
            placeHolder='Title'
            ref={titleRef}
            isFullWidth={true}
            />
          <Input
            placeHolder='Description'
            ref={descRef}
            isFullWidth={true}
            />
          
          <div className="flex w-full justify-between md:justify-start gap-2 md:gap-10 items-center ">
            <Input
              className='py-5 max-w-40 md:max-w-full'
              placeHolder='Tag'
              ref={tagRef}
              onKeyDown={(e) => handleKeyDown(e)}
              
              />
          <Button
            className='text-nowrap'
            text='Add +'
            onClick={() => handleNewTag()}
            variant='primaryFull'
            />
          </div>
          <div className="flex flex-wrap gap-1 md:gap-4 max-h-40 overflow-y-scroll">
            {tags.map((tag, index) => {
                return (
                    <div key={index}>    
                        <Button
                        className="h-[80%] px-5 text-sm"
                        variant='secondary'
                        text={`#${tag}`}
                        />
                    </div>)
                })}
          </div>
          <Button
            className= 'mt-6'
            text='Submit'
            onClick={() => handleSubmit()}
            variant='primary'
            fullWidth={true}
            />
        </ Dialog>
      </>
  )
}

export default Home;
