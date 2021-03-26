import Input from '../FormComponents/Input'
import Textarea from '../FormComponents/Textarea'

// import InputRadio from '../FormComponents/InputRadio'

// import InputSign from '../FormComponents/InputSign'

// import Select from '../FormComponents/Select'

import { FormContactProps } from './interfaces'
import * as S from './styles'

// import InputDate from '~/components/atoms/InputDate'

const FormContact: React.FC<FormContactProps> = ({ whenStarted, disabled }) => {
  return (
    <S.FormContainer>

        <S.ContainerRegister>
          <S.RowFirst>
          <Textarea
              name="contact.msg"
              title="conteúdo"
              placeholderText="aaa"
              widthLabel="100%"
              disabled={disabled}
            />
            <Input
              name="contact.name"
              title="Nome completo"
              placeholderText="DIGITE O NOME DO PACIENTE"
              widthLabel="100%"
              disabled={disabled}
            />
            <Input
              name="contact.email"
              title="Email"
              placeholderText="DIGITE O NOME DO PACIENTE"
              widthLabel="100%"
              disabled={disabled}
            />
            <Input
              name="contact.subject"
              title="Nome completo"
              placeholderText="DIGITE O NOME DO PACIENTE"
              widthLabel="100%"
              disabled={disabled}
            />

          </S.RowFirst>
{/*
          <S.Row>
            <Input
              name="patient.cpf"
              title="CPF"
              placeholderText="DIGITE O CPF DO PACIENTE"
              widthLabel="30%"
              mask="999.999.999-99"
              disabled={disabled}
            />

            <Input
              name="patient.age"
              title="Idade"
              type="number"
              placeholderText="DIGITE A IDADE"
              widthLabel="20%"
              disabled={disabled}
            />

            <Select
              name="patient.gender"
              title="Gênero"
              placeholderText="SELECIONE O GÊNERO DO PACIENTE"
              options={[
                { label: 'Feminino', value: 2 },
                { label: 'Masculino', value: 1 },
                { label: 'Ignorado', value: 3 }
              ]}
              disabled={disabled}
            />
          </S.Row> */}

          {/* <S.Row>
            <Input
              name="patient.emergencyContactName"
              title="Nome do contato de emergência"
              placeholderText="DIGITE O NOME DO CONTATO"
              widthLabel="65%"
              disabled={disabled}
            />

            <Input
              name="patient.emergencyContactPhone"
              title="Telefone do contato de emergência"
              placeholderText="DIGITE O TELEFONE"
              mask="(99) 99999-9999"
              disabled={disabled}
            />
          </S.Row> */}

          {/* <S.Row>
            <Input
              name="patient.zipcodeOccurrency"
              title="CEP"
              placeholderText="digite o CEP"
              widthLabel="10%"
              mask="99999-999"
              disabled={disabled}
            />

            <Input
              name="patient.addressOccurrency"
              title="Endereço da ocorrência"
              placeholderText="NOME DA RUA"
              disabled={disabled}
            />

            <Input
              name="patient.numberOccurrency"
              title="Número"
              type="number"
              placeholderText="NÚMERO DA RESIDÊNCIA"
              widthLabel="15%"
              disabled={disabled}
            />

            <Input
              name="patient.neighborhood"
              title="Bairro"
              type="text"
              placeholderText="DIGITE O BAIRRO"
              widthLabel="35%"
              disabled={disabled}
            />
          </S.Row> */}

          {/* <S.Row>
            <S.Complement
              name="patient.complementAddress"
              title="Complemento"
              placeholderText="COMPLEMENTO"
              disabled={disabled}
            />
            <Select
              name="patient.state"
              title="Estado"
              placeholderText="SELECIONE O ESTADO"
              options={[
                { label: 'São Paulo', value: 'SP' },
                { label: 'Bahia', value: 'BA' },
                { label: 'Pernambuco', value: 'PE' }
              ]}
              disabled={disabled}
            />

            <Select
              name="patient.city"
              title="Cidade"
              placeholderText="SELECIONE A CIDADE"
              options={[
                { label: 'Petrolina', value: 'Petrolina' },
                { label: 'São Paulo', value: 'São Paulo' },
                { label: 'Salvador', value: 'Salvador' }
              ]}
              disabled={disabled}
            />
          </S.Row> */}
        </S.ContainerRegister>



        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="comorbidities.isHypertensive"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="comorbidities.isHypertensive"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="comorbidities.isHypertensive"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="comorbidities.isDiabetic"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="comorbidities.isDiabetic"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="comorbidities.isDiabetic"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="comorbidities.usesInsulin"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="comorbidities.usesInsulin"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="comorbidities.usesInsulin"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="comorbidities.usesAnticoagulant"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="comorbidities.usesAnticoagulant"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="comorbidities.usesAnticoagulant"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="comorbidities.haveArrhythmia"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="comorbidities.haveArrhythmia"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="comorbidities.haveArrhythmia"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="comorbidities.hasStrokeHistory"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="comorbidities.hasStrokeHistory"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="comorbidities.hasStrokeHistory"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="comorbidities.usesRecreationalDrugs"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="comorbidities.usesRecreationalDrugs"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="comorbidities.usesRecreationalDrugs"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="comorbidities.hasEpilepsyHistory"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="comorbidities.hasEpilepsyHistory"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="comorbidities.hasEpilepsyHistory"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}



        {/*  1. Escala de Glasgow */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio isEmpty>
              <S.Input
                name="signsSymptomsStroke.glasgowScale"
                title="Pontuação"
                type="number"
                placeholderText="DIGITE O VALOR"
                disabled={disabled}
              />
            </InputRadio>
            <InputRadio isEmpty />
            <InputRadio isEmpty />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="signsSymptomsStroke.wokeUpWith"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="signsSymptomsStroke.wokeUpWith"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="signsSymptomsStroke.wokeUpWith"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>
          <S.ContainerInputs>
            <InputRadio isEmpty />
           // <InputDate whenStarted={whenStarted} disabled={disabled} /> /
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="signsSymptomsStroke.hasFacialAsymmetry"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="signsSymptomsStroke.hasFacialAsymmetry"
              value={2}
              disabled={disabled}
            />
            <InputRadio isEmpty />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sem fraqueza"
              name="signsSymptomsStroke.hasWeaknessArms"
              value={1}
              description="Mantém em cima mais de 10 segundos"
              disabled={disabled}
            />
            <InputRadio
              text="Leve"
              name="signsSymptomsStroke.hasWeaknessArms"
              value={2}
              description="Cai em menos de 10 segundos"
              disabled={disabled}
            />
            <InputRadio
              text="Grave"
              name="signsSymptomsStroke.hasWeaknessArms"
              value={3}
              description="Um ou ambos caem rapidamente"
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="signsSymptomsStroke.hasSpeechDisorder"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="signsSymptomsStroke.hasSpeechDisorder"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="signsSymptomsStroke.hasSpeechDisorder"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio isEmpty />
            <InputRadio
              text="Normal"
              name="signsSymptomsStroke.hasSpeechContentDisorder"
              value={1}
              description="2 ou 3 corretos"
              disabled={disabled}
            />
            <InputRadio
              text="Anormal"
              name="signsSymptomsStroke.hasSpeechContentDisorder"
              value={2}
              description="0 ou 1 correto"
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio isEmpty />
            <InputRadio
              text="Normal"
              name="signsSymptomsStroke.hardUnderstandSpeech"
              value={1}
              description="Paciente mostra 2 dedos"
              disabled={disabled}
            />
            <InputRadio
              text="Anormal"
              name="signsSymptomsStroke.hardUnderstandSpeech"
              value={2}
              description="Paciente não entende ou não mostra 2 dedos"
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Normal"
              name="signsSymptomsStroke.hasConjugateGazePalsy"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Preferência do olhar para um dos lados"
              name="signsSymptomsStroke.hasConjugateGazePalsy"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Desvio forçado e fixo"
              name="signsSymptomsStroke.hasConjugateGazePalsy"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}


        {/* <S.Line>

          <InputSign
            title="mmHg"
            name="monitoring.bloodPressureDiastolic"
            nameTwo="monitoring.bloodPressureSystolic"
            isDifferent
            disabled={disabled}
          />
        </S.Line> */}
        {/* <S.Line>

          <InputSign
            title="mg/dl"
            name="monitoring.capillaryBloodGlucose"
            disabled={disabled}
          />
        </S.Line> */}
        {/* <S.Line>

          <InputSign
            title="bpm"
            name="monitoring.heartRate"
            disabled={disabled}
          />
        </S.Line> */}
        {/* <S.Line>

          <InputSign
            title="%"
            name="monitoring.oxygenSaturation"
            disabled={disabled}
          />
        </S.Line> */}



        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="thrombolysis.hadTBIsevereCVAisch3M"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="thrombolysis.hadTBIsevereCVAisch3M"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="thrombolysis.hadTBIsevereCVAisch3M"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="thrombolysis.hadIntracrNeoplCVAhemAVM"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="thrombolysis.hadIntracrNeoplCVAhemAVM"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="thrombolysis.hadIntracrNeoplCVAhemAVM"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="thrombolysis.suspectBacterialEndocardAD"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="thrombolysis.suspectBacterialEndocardAD"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="thrombolysis.suspectBacterialEndocardAD"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="thrombolysis.underwentMajorSurgInvasProced2W"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="thrombolysis.underwentMajorSurgInvasProced2W"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="thrombolysis.underwentMajorSurgInvasProced2W"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="thrombolysis.hadHemorrGenitourinaryGI3W"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="thrombolysis.hadHemorrGenitourinaryGI3W"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="thrombolysis.hadHemorrGenitourinaryGI3W"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}
        {/* <S.Line>

          <S.ContainerInputs>
            <InputRadio
              text="Sim"
              name="thrombolysis.hasRecovAfterCorrectingHypoglycemiaBelow50"
              value={1}
              disabled={disabled}
            />
            <InputRadio
              text="Não"
              name="thrombolysis.hasRecovAfterCorrectingHypoglycemiaBelow50"
              value={2}
              disabled={disabled}
            />
            <InputRadio
              text="Não sei"
              name="thrombolysis.hasRecovAfterCorrectingHypoglycemiaBelow50"
              value={3}
              disabled={disabled}
            />
          </S.ContainerInputs>
        </S.Line> */}

    </S.FormContainer>
  )
}

export default FormContact
