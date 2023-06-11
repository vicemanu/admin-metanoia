import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useState } from "react"
import { storage } from "../../firebase"

export default function Teste2() {


    const [imgURL, setImgURL] = useState("")
    const [progress, setProgress] = useState(0)

    const handleUpLoad = e => {
        e.preventDefault()
        const file = e.target[1]?.files[0]
        if(!file) return;
        console.log(file )
        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)


        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgURL(url)
                })
            }
        )
    }
    return(
        <>
            <form onSubmit={handleUpLoad} action="">
                <input type="file" />
                <input type="file" />
                <button type="submit">Enviar</button>
            </form>
            <br />
            {!imgURL && <progress value={progress} max="100"/>}
            {imgURL && <img src={imgURL} alt="imagem" /> }
        </>
        
    )
}