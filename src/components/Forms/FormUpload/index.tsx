import { useState } from 'react'
import Files from 'react-files'
import Button from '../../Button'
import { ImSpinner9 } from 'react-icons/im'
import { AiFillFileAdd } from 'react-icons/ai'
import Image from 'next/image'
import DocumentImg from '../../../assets/document.png'
import * as S from './styles'
const FormJob: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState([])
  const [error, setError] = useState('')
  function handleFilesChange(files) {
    setFile(files)
  }

  function handleFilesError(error) {
    let txtError = ''
    switch (error.code) {
      case 1:
        txtError = 'Tipo de arquivo inválido!'
        break
      case 2:
        txtError = 'Arquivo muito grande!'
        break
      case 3:
        txtError = 'Arquivo muito pequeno!'
        break
      case 4:
        txtError = 'Selecione uma imagem!'
        break
      default:
        txtError = 'Arquivo não permitido!'
    }
    setError(txtError)
  }

  const handleUpload = () => {
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setFile([])
    }, 2500)
  }

  return (
    <S.FormContainer>
      <S.ContentDrop>
        <Files
          className="files-dropzone"
          onChange={handleFilesChange}
          onError={handleFilesError}
          accepts={['image/png', 'image/jpg', '.jpg', '.pdf']}
          maxFiles={1}
          multiple={false}
          maxFileSize={10000000}
          minFileSize={0}
          clickable>
          <S.BoxDrop>
            {file.length > 0 ? (
              file.map((img, index) => (
                <div key={index}>
                  <Image
                    src={DocumentImg}
                    alt="teste"
                    width={160}
                    height={160}
                  />
                </div>
              ))
            ) : (
              <S.Drop>
                <AiFillFileAdd size={40} />
                <span>Arraste o arquivo pra cá ou clique para selecionar</span>
              </S.Drop>
            )}
            {loading && (
              <S.BoxLoad>
                <ImSpinner9 className="spinner" size={28} color="#fff" />
                <S.TextLoad>Aguarde! Enviando arquivo!</S.TextLoad>
              </S.BoxLoad>
            )}
          </S.BoxDrop>
        </Files>
        {!!error && <span>{error}</span>}
        {file.length > 0 && !loading && (
          <Button
            onAction={handleUpload}
            type="button"
            title="Enviar aquivo"
            loading={false}
          />
        )}
      </S.ContentDrop>
    </S.FormContainer>
  )
}

export default FormJob
