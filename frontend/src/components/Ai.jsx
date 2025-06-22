import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect, useState } from 'react';
import '../App.css'
import Editor from 'react-simple-code-editor'
import { Loader2 } from 'lucide-react'
import { useAiStore } from "../Store/AiStore";
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

const Ai = () => { 
    const {isreviewing,review} = useAiStore();
    const [code, setcode] = useState(`function sum(){
    return 1+1
}`)
    const [reviews, setreviews] = useState(``)
const handleclick = async (e) => {
    e.preventDefault();
     const result = await review(code);
    setreviews(result)
  };

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
        <div className='bg-gray-900 flex h-screen p-6 gap-4'>
            <div className='left w-1/2 bg-black rounded-2xl relative flex flex-col'>
                <div className="code flex-1 w-full m-0 p-4">
                    <Editor
                        value={code}
                        onValueChange={code=>setcode(code)}
                        highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                        padding={10 }
                        className="editor rounded-xl h-full w-full text-base font-mono bg-black text-white outline-none"
                        style={{ minHeight: '200px', background: 'transparent' }}
                    />
                </div>
                <div onClick={handleclick} className="bg-white p-3 mb-3 mr-3 cursor-pointer px-10 rounded-2xl text-black inline absolute bottom-0 right-0 select-none">
                    {isreviewing?( <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Reviewing...
                </span>):(
                    "Review"
                )}
                </div>
            </div>
            <div className='right w-1/2 overflow-auto bg-gray-800 p-[1.5rem] text-white rounded-2xl'><Markdown
            rehypePlugins={[rehypeHighlight]}
            >
                {reviews}
                </Markdown></div>
        </div>
    )
}

export default Ai
