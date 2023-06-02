import './admin.css'

export default function Admin() {
    return(
        <div className='admin_page'>
            <div className='Menu'></div>
            <div className='admin_page--main'>
                <form action="" className='main--form'>

                    <div className='form--div form--principal'>
                        <label className='form_principal--title' htmlFor="">
                            Titulo: <input type="text" />
                        </label>
                        <label className='form_principal--img' htmlFor=""> Background: 
                            <input type="file" name="" id="" />
                        </label>
                        <label className='form_principal--descricao' htmlFor="">
                            <span>Descrição:</span>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </label>
                        <label className='form_principal--date' htmlFor="">
                            Dia de lançamento:
                            <input type="date" />
                        </label>
                    </div>

                    <div className='form--div conteudo'>
                        <label htmlFor="">titulo1<input type="text" name="" id="" /></label>
                        <label htmlFor=""><input type="file" name="" id="" /></label>
                        <label htmlFor="">citação<textarea name="" id="" cols="30" rows="10"></textarea><input type="text" /></label>
                        <label htmlFor="">paragrafo 1 <textarea name="" id="" cols="30" rows="10"></textarea></label>
                    </div>

                </form>
            </div>
        </div>
    )
}