import './conteudo.css'

export default function Conteudo(props) {


    function addImg(e) {
        e.preventDefault()
        props.conteudo[props.index].img = [...props.conteudo[props.index].img, ""]
        props.setConteudo([...props.conteudo])
    }

    function removImg(e , position) {
        e.preventDefault()
        props.conteudo[props.index].img = props.conteudo[props.index].img.filter((ele, index)=> {
            if(position != index)
             return " "
         })
        props.setConteudo([...props.conteudo]) 
    }

    function handleChangeImg(e, index) {
        let file = e.target?.files[0]
        if(!file) return;
        props.conteudo[props.index].img[index] = file
        props.setConteudo([...props.conteudo])
    }

    function addCitation(e) {
        e.preventDefault()
        props.conteudo[props.index].citation = [...props.conteudo[props.index].citation, ""]
        props.conteudo[props.index].author = [...props.conteudo[props.index].author, ""]
        props.setConteudo([...props.conteudo])
    }

    function removCitation(e , position) {
        e.preventDefault()
        props.conteudo[props.index].citation = props.conteudo[props.index].citation.filter((ele, index)=> {
            if(position != index)
             return " "
         })
         props.conteudo[props.index].author = props.conteudo[props.index].author.filter((ele, index)=> {
            if(position != index)
             return " "
         })
        props.setConteudo([...props.conteudo]) 
    }

    function handleChangeCitation(e, index) {
        props.conteudo[props.index].citation[index] = e.target.value
        props.setConteudo([...props.conteudo])
    }

    function handleChangeAutor(e, index) {
        props.conteudo[props.index].author[index] = e.target.value
        props.setConteudo([...props.conteudo])
    }

    function addParagraph(e) {
        e.preventDefault()
        props.conteudo[props.index].paragraph = [...props.conteudo[props.index].paragraph, ""]
        props.setConteudo([...props.conteudo])

    }

    function removParagraph(e , position) {
        e.preventDefault()
        props.conteudo[props.index].paragraph = props.conteudo[props.index].paragraph.filter((ele, index)=> {
            if(position != index)
             return " "
         })
        props.setConteudo([...props.conteudo]) 
    }


    function handleChangeParagraph(e, index) {
        props.conteudo[props.index].paragraph[index] = e.target.value
        props.setConteudo([...props.conteudo])
        console.log(props.conteudo)
    }


    return(

        <div className='conteudo'>
            <button onClick={ (e) => props.removeConteudo(e , props.index )} className='conteudo--remove'>Delete</button>

            {/* Titulo do componente de conteudo */}
            
            <label className='conteudo--title' htmlFor="">
                Titulo {props.index + 1}: 
                <input type="text" name="" id="" 
                value={props.conteudo[props.index].title}
                onChange={e => {
                    props.conteudo[props.index].title = e.target.value
                    props.setConteudo([...props.conteudo])
                }}
                />
            </label>


            {/* Sistema de carregam de imagens do componente de conteudo */}
            {/* Retornar no campo img, fazer sistema de envio como dados de imagem e não do file do meu pc */}
            <h2>Imagens 
                <button onClick={addImg}>
                    <i className="bi bi-plus-circle"></i>
                </button>
            </h2>
            <div className='conteudo--div'>
                {
                    props.conteudo[props.index].img.map((e, index) => {
                        return(
                            <label key={index} htmlFor={`img${index}`}>
                                <input type="file" 
                                    name="" 
                                    id={`img${index}`}
                                    value={props.conteudo[props.index].img[index].value}
                                    onChange={e => {
                                        handleChangeImg(e, index)
                                    }}
                                />
                                <button onClick={(e) => removImg(e, index)}>
                                    <i className="bi bi-plus-circle"></i>
                                </button>
                            </label>
                        )
                    })
                }
            </div>

            {/* Citações e todo o sitema de citações */}

            <h2>Citações 
                <button onClick={addCitation} >
                    <i className="bi bi-plus-circle"></i>
                </button>
            </h2>
            <div className='conteudo--div'>
                {
                    props.conteudo[props.index].citation.map((e, index)=> {
                        return(
                            <label key={index} className='conteudo_div--citacao'  htmlFor={`citation${index}`}>
                                Citação {index + 1}
                                <textarea  name="" 
                                    id={`citation${index}`} 
                                    cols="30" rows="10"
                                    value={props.conteudo[props.index].citation[index]}
                                    onChange={e => {
                                        handleChangeCitation(e, index)
                                    }}
                                ></textarea>
                                <label>Autor: 
                                    <input type="text"
                                        value={props.conteudo[props.index].author[index]}
                                        onChange={e => {
                                            handleChangeAutor(e, index)
                                        }}
                                    />
                                </label>
                                <button onClick={(e) => removCitation(e, index)}>
                                    <i className="bi bi-plus-circle"></i>
                                </button>
                            </label> 
                        )
                    })
                }
            </div>

            {/* Paragrafos de conteudo */}


            <h2>Paragrafos 
                <button onClick={addParagraph} >
                    <i className="bi bi-plus-circle"></i>
                </button>
            </h2>
            <div className='conteudo--div'>
                {
                    props.conteudo[props.index].paragraph.map((e, index) => {
                        return(
                            <label key={index} className='conteudo_div--paragrafo' htmlFor={`paragraph${index}`}>
                                Paragrafo {index + 1} 
                                <textarea 
                                    name="" 
                                    id={`paragraph${index}`} 
                                    cols="30" rows="10"
                                    value={props.conteudo[props.index].paragraph[index]}
                                    onChange={e => {handleChangeParagraph(e, index)}}
                                ></textarea>
                                <button onClick={(e) => removParagraph(e, index)}>
                                    <i className="bi bi-plus-circle"></i>
                                </button>
                            </label>  
                        )      
                    })
                }
            </div> 

                                 
                                
        </div>

        
    )
}