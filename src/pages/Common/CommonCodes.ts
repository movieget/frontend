export const C_BasicBtn_L = `<BasicBtn $size='large'>기본버튼</BasicBtn>`
export const C_BasicBtn_M = `<BasicBtn $size='medium'>기본버튼</BasicBtn>`
export const C_BasicBtn_S = `<BasicBtn $size='small'>기본버튼</BasicBtn>`

export const C_MainBtn_L = `<MainBtn $size='large'>기본버튼</MainBtn>`
export const C_MainBtn_M = `<MainBtn $size='medium'>기본버튼</MainBtn>`
export const C_MainBtn_S = `<MainBtn $size='small'>기본버튼</MainBtn>`

export const C_AddIconBtn = `<AddIconBtn>아이콘버튼</AddIconBtn>`

export const C_IssueBtn_L = `<IssueBtn $size='large'>이슈버튼</IssueBtn>`

export const C_DisabledBtn = `<BasicBtn $disabled>disabled 버튼(Basic/Main) 공용</BasicBtn>`

export const C_SocialBtnKakao = `<SocialBtn $social='kakao'>카카오로 시작하기</SocialBtn>`
export const C_SocialBtnNaver = `<SocialBtn $social='naver'>네이버로 시작하기</SocialBtn>`

export const C_IconBtnAlarm = `<IconBtn>
  <IconBtnImg src={Bell} />
</IconBtn>`
export const C_IconBtnMypage = `<IconBtn>
  <IconBtnImg width='100%' height='100%' src={Profile} />
</IconBtn>`

export const C_InputBox = `<InputBox width=''>
  <Input type='text' width='' placeholder='텍스트' />
  <Input type='password' width='' placeholder='패스워드' />
</InputBox>`
export const C_TextareaBox = `<TextareaBox width=''>
  <Textarea width='' placeholder='텍스트를 입력하세요.' />
</TextareaBox>`

export const C_CustomSelect = `<CustomSelect items={['바나나', '원숭이', '사나움사나움사나움']} $direction='right' />`

export const C_CheckboxBasic = `<CheckboxWrapper>
  <Checkbox type='checkbox' id='checkboxText' name='' />
  <CheckText htmlFor='checkboxText'>체크박스</CheckText>
</CheckboxWrapper>`
export const C_CheckboxHeart = `<CheckboxWrapper>
  <Checkbox type='checkbox' id='checkboxHeart' name='' />
  <CheckHeart htmlFor='checkboxHeart' />
</CheckboxWrapper>`
export const C_CheckHeartCount = `<CheckboxWrapper>
  <Checkbox type='checkbox' id='CheckHeartCount' name='' />
  <CheckHeartCount htmlFor='CheckHeartCount' $color=''>
    {formatLikes(1000)}
  </CheckHeartCount>
</CheckboxWrapper>`
export const C_CheckboxSeat = `<CheckboxWrapper>
  <Checkbox type='checkbox' id='seat' />
  <CheckSeat htmlFor='seat' />
  <Checkbox type='checkbox' id='disableSeat' disabled />
  <CheckSeat htmlFor='disableSeat' />
</CheckboxWrapper>`

export const C_ImgInpBox = `const [image1, setImage1] = useState<string | null>(null)
<ImageUpload image={image1} setImage={setImage1} />
`
export const C_ProfileImgInpBox = `const [image2, setImage2] = useState<string | null>(null)
<ProfileImageUpload image={image2} setImage={setImage2} />
`

export const C_Badge = `<BadgeBox>
  <Badge>일반/장르</Badge>
  <Badge $color='orange'>러닝타임</Badge>
  <Badge $playing='playing'>상영중입니다</Badge>
  <Badge $playing='notPlaying'>상영예정</Badge>
</BadgeBox>`
export const C_StyleAge = `<StyleAge $age='all' />
<StyleAge $age='12' />
<StyleAge $age='15' />
<StyleAge $age='18' />`
export const C_StyleProfile = `<ProfileBadge src='' width='' height='' />`

export const C_Tabs = `<Tabs
  tabs={['탭 1', '탭 2', '탭 3', '탭 4', '탭 5']}
  contents={[
    <div>탭 컨텐츠 1</div>,
    <div>탭 컨텐츠 2</div>,
    <div>탭 컨텐츠 3</div>,
    <div>탭 컨텐츠 4</div>,
    <div>탭 컨텐츠 5</div>,
  ]}
  isSelect={true}
  isAllDeleteBtn={true}
/>`

export const C_StyleTitle = `<StyleTitle>상영중 TOP 10</StyleTitle>`
export const C_StarRating = `<StarRating
  rating={userRating1}
  onRatingChange={handleRatingChange1}
  userId='user1'
/>`
export const C_StarRating2 = `<StarRating
  rating={userRating2}
  onRatingChange={handleRatingChange2}
  userId='user2'
  value={3}
  disabled={true}
/>`

export const C_MovieInfoCard = `<MovieInfoCard
  $title='크라벤'
  $age='18'
  $screeningDate='2024년 10월 20일'
  $bookingDate='2024년 10월 20일'
  $cancelDate='2024년 10월 18일'
  $createdDate='2024년 10월 01일'
  $genre={['액션', '스릴러']}
  $overview="주인공이 가족을 구하기 위해 싸우는 이야기입니다."
  $duration={204}
  $reviewType='포토리뷰'
  $rating={5}
  $rewardPoints={120}
  $seats={['E열 24석', 'E열 25석', 'E열 26석']}
  $price={120000}
  $refundAmount={80000}
  $adultCount={4}
  $youthCount={2}
  $location='메가박스 울산 성남 지점'
  $posterImage=''
/>`
