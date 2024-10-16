import styled from 'styled-components'

import Bell from '../../assets/svg/bell.svg'
import Profile from '../../assets/img/Profile.svg'
import './style.css'

// import useImagePreview from './assets/data/useImagePreview'
import useImagePreview from '../../hooks/useImagePreview'
import { BasicBtn, IconBtn, IconBtnImg, MainBtn, SocialBtn } from '../../components/Button/style'
import {
  DeletePreviewImg,
  ImgInpBox,
  InputBox,
  InputFile,
  InputFileLabel,
  Input,
  PreviewImg,
  PreviewImgBox,
  Textarea,
  TextareaBox,
} from '../../components/Input/style'
import { Checkbox, CheckboxWrapper, CheckHeart, CheckText } from '../../components/Checkbox/style'
import { BadgeBox, Badge } from '../../components/Badge/style'

const Common = () => {
  const {
    image: image,
    handleImageChange: handleImageChange,
    resetImage: resetImage,
  } = useImagePreview()
  return (
    <>
      <div className='common'>
        <h2 className='main-title'>공통 CSS</h2>
        <div className='container'>
          {/* 버튼 */}
          <section className='section'>
            <h3 className='sec-title'>- BUTTON</h3>
            <p className='sec-exp'>
              disabled는 전부 같은 형식으로 적용 가능 / 카카오 &네이버는 disabled가 없음
            </p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <BasicBtn size='large'>기본버튼</BasicBtn>
                    </th>
                    <td>&lt;BasicBtn size="large"&gt;기본버튼&lt;/BasicBtn&gt;</td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn size='medium'>기본버튼</BasicBtn>
                    </th>
                    <td>&lt;BasicBtn size="medium"&gt;기본버튼&lt;/BasicBtn&gt;</td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn size='small'>기본버튼</BasicBtn>
                    </th>
                    <td>&lt;BasicBtn size="small"&gt;기본버튼&lt;/BasicBtn&gt;</td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn size='large'>메인버튼</MainBtn>
                    </th>
                    <td>&lt;MainBtn size="large"&gt;메인버튼&lt;/MainBtn&gt;</td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn size='medium'>메인버튼</MainBtn>
                    </th>
                    <td>&lt;MainBtn size="medium"&gt;메인버튼&lt;/MainBtn&gt;</td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn size='small'>메인버튼</MainBtn>
                    </th>
                    <td>&lt;MainBtn size="small"&gt;메인버튼&lt;/MainBtn&gt;</td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn disabled>disabled 버튼(Basic/Main) 공용</BasicBtn>
                    </th>
                    <td>&lt;BasicBtn disabled&gt;버튼&lt;/BasicBtn&gt;</td>
                  </tr>
                  <tr>
                    <th>
                      <SocialBtn social='kakao'>카카오로 시작하기</SocialBtn>
                    </th>
                    <td>&lt;SocialBtn social="kakao"&gt;카카오로 시작하기&lt;/SocialBtn&gt;</td>
                  </tr>
                  <tr>
                    <th>
                      <SocialBtn social='naver'>네이버로 시작하기</SocialBtn>
                    </th>
                    <td>&lt;SocialBtn social="naver"&gt;네이버로 시작하기&lt;/SocialBtn&gt;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 아이콘 버튼 */}
          <section className='section'>
            <h3 className='sec-title'>- ICON BUTTON</h3>
            <p className='sec-exp'>이미지 파일 필요 / import 필요</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <IconBtn>
                        <IconBtnImg src={Bell} />
                      </IconBtn>
                    </th>
                    <td>
                      &lt;IconBtn&gt;
                      <br />
                      &nbsp;&nbsp;&lt;IconBtnImg src=&#123;Bell&#125; /&gt;
                      <br />
                      &lt;/IconBtn&gt;
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <IconBtn>
                        <IconBtnImg width='100%' height='100%' src={Profile} />
                      </IconBtn>
                    </th>
                    <td>
                      &lt;IconBtn&gt;
                      <br />
                      &nbsp;&nbsp;&lt;IconBtnImg width="100%" height="100%" src=&#123;Profile&#125;
                      /&gt;
                      <br />
                      &lt;/IconBtn&gt;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 인풋 */}
          <section className='section'>
            <h3 className='sec-title'>- INPUT</h3>
            <p className='sec-exp'>내용없음</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <InputBox width=''>
                        <Input type='text' width='' placeholder='텍스트' />
                        <Input type='password' width='' placeholder='패스워드' />
                      </InputBox>
                    </th>
                    <td>
                      &lt;InputBox width=""&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Input type="text" width="" /&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Input type="password" width="" /&gt;
                      <br />
                      &lt;/InputBox&gt;
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <TextareaBox width=''>
                        <Textarea width='' placeholder='텍스트를 입력하세요.' />
                      </TextareaBox>
                    </th>
                    <td>
                      &lt;TextareaBox width=""&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Textarea width="" placeholder="텍스트를 입력하세요." /&gt;
                      <br />
                      &lt;/TextareaBox&gt;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 체크박스 */}
          <section className='section'>
            <h3 className='sec-title'>- CHECKBOX</h3>
            <p className='sec-exp'>내용없음</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <CheckboxWrapper>
                        <Checkbox type='checkbox' id='checkboxText' name='' />
                        <CheckText htmlFor='checkboxText'>체크박스</CheckText>
                      </CheckboxWrapper>
                    </th>
                    <td>
                      &lt;CheckboxWrapper&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Checkbox type="checkbox" id="checkboxText" name="" /&gt;
                      <br />
                      &nbsp;&nbsp;&lt;CheckText htmlFor="checkboxText"&gt;체크박스&lt;/CheckText&gt;
                      <br />
                      &lt;/CheckboxWrapper&gt;
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <CheckboxWrapper>
                        <Checkbox type='checkbox' id='checkboxHeart' name='' />
                        <CheckHeart htmlFor='checkboxHeart' />
                      </CheckboxWrapper>
                    </th>
                    <td>
                      &lt;CheckboxWrapper&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Checkbox type="checkbox" id="checkboxHeart" name="" /&gt;
                      <br />
                      &nbsp;&nbsp;&lt;CheckHeart htmlFor="checkboxHeart"&gt;&lt;/CheckHeart&gt;
                      <br />
                      &lt;/CheckboxWrapper&gt;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 인풋 - file */}
          <section className='section'>
            <h3 className='sec-title'>- INPUT - FILE</h3>
            <p className='sec-exp'>파일을 불러올 hook 데이터가 필요함</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <ImgInpBox>
                        <InputFile
                          type='file'
                          accept='image/*'
                          onChange={handleImageChange}
                          id='file01'
                          ref={(input) => input && (input.value = '')}
                        />
                        <InputFileLabel htmlFor='file01'>파일첨부</InputFileLabel>
                        {image && (
                          <PreviewImgBox>
                            <PreviewImg src={image} alt='첨부한 이미지 미리보기' />
                            <DeletePreviewImg onClick={resetImage} />
                          </PreviewImgBox>
                        )}
                      </ImgInpBox>
                    </th>
                    <td>
                      &lt;ImgInpBox&gt;
                      <br />
                      &nbsp;&nbsp;&lt;InputFile
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;type="file"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;accept="image/*"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;onChange=&#123;handleImageChange&#125;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;id="file01"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;ref=&#123;(input) =&gt; input && (input.value =
                      "")&#125;
                      <br />
                      &nbsp;&nbsp;/&gt;
                      <br />
                      &nbsp;&nbsp;&lt;InputFileLabel
                      htmlFor="file01"&gt;파일첨부&lt;/InputFileLabel&gt;
                      <br />
                      &nbsp;&nbsp;&#123;image && (<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;PreviewImgBox&gt;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;PreviewImg src=&#123;image&#125;
                      alt="첨부한 이미지 미리보기" /&gt;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DeletePreviewImg
                      onClick=&#123;resetImage&#125; /&gt;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/PreviewImgBox&gt;
                      <br />
                      &nbsp;&nbsp;)&#125;
                      <br />
                      &lt;/ImgInpBox&gt;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 뱃지 */}
          <section className='section'>
            <h3 className='sec-title'>- BADGE</h3>
            <p className='sec-exp'>내용없음</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <BadgeBox>
                        <Badge>일반/장르</Badge>
                        <Badge color='orange'>러닝타임</Badge>
                        <Badge color='orange'>180분</Badge>
                        <Badge>길어집니다아아아아아아아아</Badge>
                        <Badge playing='playing'>상영중입니다</Badge>
                        <Badge playing='notPlaying'>상영예정</Badge>
                      </BadgeBox>
                    </th>
                    <td>
                      &lt;BadgeBox&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Badge&gt;일반/장르&lt;/Badge&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Badge color="orange"&gt;러닝타임&lt;/Badge&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Badge color="orange"&gt;180분&lt;/Badge&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Badge&gt;길어집니다아아아아아아아아&lt;/Badge&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Badge playing="playing"&gt;상영중입니다&lt;/Badge&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Badge playing="notPlaying"&gt;상영예정&lt;/Badge&gt;
                      <br />
                      &lt;/BadgeBox&gt;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Common

// -------------------------------------------------------- //

// -------------------------------------------------------- //

// -------------------------------------------------------- //

// -------------------------------------------------------- //

// -------------------------------------------------------- //
